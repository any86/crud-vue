<script setup lang="ts">
import { CloudDownloadOutlined, UpOutlined, DownOutlined } from '@ant-design/icons-vue';
import { cloneDeep } from 'lodash';
import { ref, reactive, watch, computed, onBeforeMount, type PropType } from 'vue';
import { message } from 'ant-design-vue';
import * as xlsx from 'xlsx';
import ColumnSort from '@/Crud/ColumnSort.vue';
import {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
  PlusOutlined,
  RedoOutlined,
} from '@ant-design/icons-vue';
import Add from './Crud/Add.vue';
import Edit from './Crud/Edit.vue';
import NForm from './Crud/VForm.vue';
import type { CProps, DProps, RProps, UProps, KV } from '@/types';
import { _warn } from '@/shared';
// 表格需要的数据源
type tableData = {
  list: { [k: string]: unknown }[];
  total: string;
};

// 为了能正确的生成d.ts,
// 此处必须用js逻辑去定义props,
// 并且要保证存在"props"变量
const props = defineProps({
  primaryKey: {
    type: String,
    required: true,
  },
  r: {
    type: Object as PropType<RProps>,
    required: true,
  },
  c: Object as PropType<CProps>,
  u: Object as PropType<UProps>,
  d: Object as PropType<DProps>,
});
const emit = defineEmits<{
  (type: 'remove-fail', error: unknown): void;
  (type: 'show-one', one: KV): void;
}>();

// 显示前
const isLoading = ref(false);
const columnConfig = ref(cloneDeep(props.r.columns)!);
function changeColumns(columns: any) {
  columnConfig.value = columns;
}

// 初始化
onBeforeMount(async () => {
  if (props.r.before) {
    isLoading.value = true;
    await props.r.before();
    isLoading.value = false;
  }
});

// 顶部筛选
const conditionFormRef = ref<typeof NForm>();
const conditionFormData = ref<KV>({});


// 左侧快捷筛选条件
const quickConditionFormRef = ref<typeof NForm>();
const quickConditionFormData = ref<KV>({});
watch(quickConditionFormData,quickConditionFormData=>{
  for(const key in quickConditionFormData){
    conditionFormData.value[key] = quickConditionFormData[key]
  }
  getTableData()
},{deep:true})


// 是否显示更多筛选条件
const isShowMoreCondition = ref(false);
watch(isShowMoreCondition, () => {
  conditionFormRef.value?.toggleItem();
});

// 处理hasShowMore
const conditionItems = props.r.conditionItems || (() => []);
const hasShowMore = conditionItems().some((item) => 'toggle' in item);

// 表格的选择
// 注意table组件上一定要指定rowKey属性才能生效
const selectedRowKeys = ref<string[]>([]);
function onTableSelectChange(keys: string[]) {
  selectedRowKeys.value = keys;
}

// 分页
const pageCurrent = ref(1);
const pageSize = ref(10);
const pageCount = ref(0);
const isTableLoading = ref(true);
const dataSouce = ref<tableData['list']>([]);
const pagination = computed(() => ({
  total: pageCount.value,
  current: pageCurrent.value,
  pageSize: pageSize.value,
  // hideOnSinglePage:true,
  showSizeChanger: true,
  // pageSizeOptions:[1,2,3],
  onChange: (page: number) => {
    pageCurrent.value = page;
  },
  onShowSizeChange: onPageSizeChange,
}));

const tableSize = ref(props.r.tableProps?.size || 'default');

const otherTableProps = computed(() => {
  const { r, primaryKey } = props;
  // console.log(dataSouce.value,dataSouce.value.map((row) => row[primaryKey]))
  return {
    pagination: { ...r.pagination, ...pagination.value },
    rowKey: (row: KV) => row[primaryKey],
    rowSelection: r.hideRowSelection ? null : { selectedRowKeys, onChange: onTableSelectChange, ...r.rowSelection },
    // expandedRowKeys: dataSouce.value.map((row) => row[primaryKey]),
    defaultExpandAllRows: true,
    ...r.tableProps,
    size: tableSize.value,
  };
});

function onPageSizeChange(current: number, size: number) {
  pageSize.value = size;
  pageCurrent.value = 1;
}


// 默认展开低一层
const expandedRowKeys = ref<string[]>([]);
const { primaryKey } = props
function expandedRow(list: KV[]) {
  list.forEach(row => {
    expandedRowKeys.value.push(row[primaryKey]);
  })
}


// 重置条件
// 并加载数据
async function reset() {
  await conditionFormRef.value?.reset();
  await quickConditionFormRef.value?.reset();
  getTableData();
}

// 加载数据
async function getTableData() {
  isTableLoading.value = true;
  try {
    // 清空已选行
    selectedRowKeys.value = [];
    const { list, total } = await props.r.done({
      pageNum: pageCurrent.value,
      pageSize: pageSize.value,
      ...conditionFormData.value,
    });
    dataSouce.value = list;
    isTableLoading.value = false;
    pageCount.value = Number(total);
    expandedRow(list)
  } catch (error) {
    // props.r.onError(error);
    // message.error(error as string);
  } finally {
    isTableLoading.value = false;
  }
}
// quickConditionNames


watch([pageCurrent, pageSize], getTableData, { immediate: true });

// ========= 删除 =========
async function remove(keys: string[], row?: KV) {
  const [isSuccess, msg] = await props.d!.done(keys, row);
  if (isSuccess) {
    msg && message.success(msg);
    selectedRowKeys.value = [];
    getTableData();
  } else {
    msg && message.error(msg);
    emit('remove-fail', msg);
  }
}

// 主要用来初始化默认值
const FormDataAdd = reactive({});
const FormDataEdit = reactive({});

// 新增
const addRef = ref<typeof Add | undefined>();
const isAddFormLoading = ref(false);
async function showAddForm() {
  try {
    isAddFormLoading.value = true;
    if (props.c?.before) {
      await props.c.before({});
    }
    addRef.value?.show();
  } catch (error) {
    console.log(error);
  } finally {
    isAddFormLoading.value = false;
  }
}

// 编辑
const editRef = ref<typeof Edit | undefined>();
function showEditForm(record: KV) {
  editRef.value?.show(record);
}

// 详情
const isShowOne = ref(false);
const one = ref<any>();
const isOneLoading = ref(false);
async function showOne(row: KV) {
  try {
    isShowOne.value = true;
    isOneLoading.value = true;
    one.value = await props.r.getOne!(row);
    if (void 0 === one.value) {
      _warn('当前"getOne"函数没有返回值!');
    }
    emit('show-one', row);
  } catch (error) {
  } finally {
    isOneLoading.value = false;
  }
}

// 导出表格
async function exportExcelFile() {
  const keyAndTitleMap: KV = {};
  const columnTitles: string[] = [];
  props.r.columns?.forEach((column: any) => {
    const { title, dataIndex } = column;
    if (title && dataIndex && '操作' !== title) {
      keyAndTitleMap[dataIndex] = title;
      columnTitles.push(title);
    }
  });

  const dataSouce = await props.r.exportExcel!.done(conditionFormData);
  const data = dataSouce.map((row) => {
    const newRow: Record<string, any> = {};
    for (const key in row) {
      if (keyAndTitleMap[key]) {
        newRow[key] = row[key];
      }
    }
    return newRow;
  });
  data.unshift(keyAndTitleMap);

  const sheet = xlsx.utils.json_to_sheet(data, { skipHeader: true });
  const book = xlsx.utils.book_new();
  book.SheetNames.push('sheet1');
  book.Sheets['sheet1'] = sheet;
  xlsx.writeFile(book, 'data.xlsx', { bookType: 'xlsx', type: 'binary' });
}
// const = useColumnSetting();
</script>

<template>
  <a-card class="crud" :loading="isLoading">
    <a-drawer v-if="r.getOne" v-model:visible="isShowOne" title="详情" width="50%" v-bind="r.drawerProps">
      <a-skeleton :loading="isOneLoading" active>
        <slot name="one" v-bind="one"></slot>
      </a-skeleton>
    </a-drawer>

    <!-- 编辑 -->
    <Edit ref="editRef" v-if="u" v-model="FormDataEdit" v-bind="u" @success="getTableData" />

    <!-- 新增 -->
    <Add ref="addRef" v-if="c" v-model="FormDataAdd" v-bind="c" @success="getTableData" />

    <!-- 新增&导出按钮 -->
    <div class="mb-2 d-flex align-items-center" style="column-gap: 8px">
      <!-- 批量操作 -->
      <a-button v-if="c" :loading="isAddFormLoading" type="primary" @click="showAddForm"><plus-outlined />新建</a-button>

      <!-- 导出表格 -->
      <a-button v-if="r.exportExcel" type="success" @click="exportExcelFile"><cloud-download-outlined />导出</a-button>

      <a-popconfirm v-if="void 0 !== d" title="确定要删除吗?" ok-text="确定" cancel-text="取消" @confirm="remove(selectedRowKeys)">
        <a-button class="ml-1" v-show="selectedRowKeys.length > 0" type="primary" ghost danger>批量删除({{
          selectedRowKeys.length }}条)</a-button>
      </a-popconfirm>
      <p class="flex-1" align="right">
        <a-space :size="16">
          <a-tooltip title="刷新表格">
            <a class="icon-reset" @click="reset"><redo-outlined :spin="isTableLoading" /></a>
          </a-tooltip>

          <!-- 筛选条件 -->
          <column-sort v-if="r.columns" :columns="(r.columns as any)" @change="changeColumns" />

          <!-- 列密度 -->
          <a-tooltip title="表格尺寸">
            <a-radio-group v-model:value="tableSize" size="small" option-type="button" :options="[
                { label: '宽松', value: 'default' },
                { label: '中等', value: 'middle' },
                { label: '紧凑', value: 'small' },
              ]" />
          </a-tooltip>

          <!-- <a-tooltip title="全屏">
            <a @click="toggleTableFull"><FullscreenOutlined /></a>
          </a-tooltip> -->
        </a-space>
      </p>
    </div>

    <section class="d-flex">
      <div>
        <a-card class="mr-2">
          {{ quickConditionFormData }}
          <n-form ref="quickConditionFormRef" v-model="quickConditionFormData" v-if="void 0 !== r.quickConditionItems"
            :items="r.quickConditionItems">
          </n-form>
        </a-card>

      </div>

      <div>
        <!-- 筛选条件 -->
        <n-form ref="conditionFormRef" v-model="conditionFormData" v-if="void 0 !== r.conditionItems"
          :items="r.conditionItems" layout="inline" :label-col="{ span: 5 }">
          <template #after>
            <a-form-item>
              <a-space>
                <a-button :loading="isTableLoading" @click="reset">重置</a-button>
                <a-button type="primary" :loading="isTableLoading" @click="getTableData"><search-outlined />查询</a-button>
                <a-button v-if="hasShowMore" @click="isShowMoreCondition = !isShowMoreCondition" type="link">
                  <template v-if="isShowMoreCondition"><up-outlined />收起</template>
                  <template v-else><down-outlined />展开</template>
                </a-button>
              </a-space>
            </a-form-item>
          </template>
        </n-form>
        <!-- 表格数据 -->
        <a-table bordered :loading="isTableLoading" :columns="columnConfig" :dataSource="dataSouce"
          v-model:expandedRowKeys="expandedRowKeys" v-bind="otherTableProps">
          <template #bodyCell="{ column, record }">
            <template v-if="column.dataIndex === 'operation' || column.key === 'operation'">
              <slot name="row-buttons-before" v-bind="record"></slot>

              <a-button v-if="r.getOne" type="link" @click="showOne(record)"><eye-outlined />查看</a-button>

              <a-button v-if="void 0 !== u" type="link" size="small" @click="showEditForm(record)">
                <edit-outlined />编辑</a-button>
              <a-popconfirm v-if="void 0 !== d" title="确定要删除吗?" ok-text="确定" cancel-text="取消"
                @confirm="remove([record[primaryKey]], record)">
                <a-button type="link" size="small"><delete-outlined />删除</a-button>
              </a-popconfirm>
            </template>
          </template>
        </a-table>
      </div>
    </section>


  </a-card>
</template>

<style lang="scss">
.crud {
  &__header {
    background-color: #fff;
  }

  .ant-table-cell:empty {
    &:after {
      content: '暂无';
      text-align: center;
      color: #ccc;
      font-size: 12px;
    }
  }

  .ant-form-inline {
    .ant-form-item {
      margin-bottom: 16px;
    }
  }
}

.icon-reset {
  transform: rotate3d(30deg);
}
</style>
