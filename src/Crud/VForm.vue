<script setup lang="ts">
import { onBeforeMount, onMounted, reactive, ref, watch } from 'vue';
import type { FormInstance, FormProps } from 'ant-design-vue';
import type { NFormItem, KV } from '@/types';
import cloneDeep from 'lodash/cloneDeep';
import { computed } from 'vue';

interface Props {
  modelValue: KV;
  formProps?: FormProps;
  items: (formData: KV) => NFormItem[];
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => ({}),
});

const isLoading = ref(true);
const formData = ref<KV>(props.modelValue || {});
// 对表单中删除的字段和数据进行备份,
// 当FormItem删除的时候formData会删除对应值,
// 而formDataBackup会备份,
// 这样当FormItem再次出现的时候, 
// 从formDataBackup同步对应值到formData
const formDataBackup = ref<KV>({})
const defaultValueMap: KV = !!props.modelValue ? cloneDeep(props.modelValue) : {};
watch(
  () => props.modelValue,
  (modelValue) => {
    formData.value = cloneDeep(modelValue);
  }
);



// 结构数据
const formItems = computed(() => props.items(formData.value));

// 根据label字数确定标题宽度
const labelCol = computed(() => {
  const labelSizes: number[] = [];
  formItems.value.forEach(({ label }) => {
    if (label) {
      labelSizes.push(calcStringSize(label))
    }
  });
  const max = Math.max(...labelSizes);
  return { span: Math.ceil(max / 3) };
});
// console.log(labelCol);

/**
 * 计算字符长度
 * @param inputString 输入字符串
 * @return 长度
 */
function calcStringSize(inputString: string): number {
  var len = 0;
  for (var i = 0; i < inputString.length; i++) {
    var c = inputString.charCodeAt(i);
    //单字节加1 
    if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
      len++;
    } else {
      len += 2;
    }
  }
  return len;
}

// 如果items减少,
// 那么同步删除formData上对应数据
const formItemNamesMap = ref<Record<string, 1>>({});
watch(formItemNamesMap, formItemNamesMap => {
  for (const name in formData.value) {
    // formData中删除formItems中不存在的表单数据
    if (1 !== formItemNamesMap[name]) {
      // 备份删除时候的值
      formDataBackup.value[name] = formData.value[name];
      // 删除
      Reflect.deleteProperty(formData.value, name);
      // delete formData.value[name];
    }
  }
})

watch(formItems, (formItems) => {
  // 表单名映射
  formItemNamesMap.value = {};

  formItems.forEach((item) => {
    const { name, defaultValue } = item;
    // 同步默认值
    if (void 0 !== name) {
      // 记录formItems中存在的键值
      formItemNamesMap.value[name] = 1;

      // 重新判断表单值
      // 恢复之前设置过的值到表单项
      formData.value[name] = formData.value[name] ?? formDataBackup.value[name] ?? defaultValue;
    }
  });
},
  { immediate: true, deep: true }
);

isLoading.value = false;
const formRef = ref<FormInstance>();

/**
 * 获取表单项应该使用的vModel名
 * @param item 表单单项配置信息
 */
function getVModelName(item: NFormItem) {
  return item.modelName || 'value';
}

/**
 * 重置表单
 */
async function reset() {
  // console.log(cloneDeep(defaultValueMap));
  // formData.value = cloneDeep(defaultValueMap);
  // console.log(formRef.value?.scrollToField);
  // formRef.value?.scrollToField('mouldName')
  formRef.value?.resetFields();

}

const isShowFormItem = ref(false);
async function toggleItem() {
  isShowFormItem.value = !isShowFormItem.value;
}

defineExpose({ formRef, reset, toggleItem });
</script>

<template>
  <!-- {{ defaultValueMap }} -->
  <a-form v-if="!isLoading && void 0 !== formData" ref="formRef" :model="formData" :labelCol="labelCol"
    v-bind="formProps">
    <!-- {{ formData }} -->
    <template v-for="item in formItems" :key="item.name">
      <a-form-item v-if="!('toggle' in item && !isShowFormItem)" colon :id="item.name" v-bind="item">
        <!-- {{formData[item.name]}} -->

        <!-- 表单类的组件 -->
        <component v-if="item.name" :is="item.is" v-bind="{
          allowClear: true,
          placeholder: `请输入${item.label || ''}`,
          ...item.props,
        }" v-model:[getVModelName(item)]="formData[item.name as string]">
        </component>
        <!-- 纯显示组件 -->
        <component v-else :is="item.is" v-bind="item.props"></component>
      </a-form-item>
    </template>
    <slot name="after"></slot>
  </a-form>
</template>
