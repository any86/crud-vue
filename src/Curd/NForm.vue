<script setup lang="ts">
import { reactive, ref, watch, computed, useAttrs } from 'vue';
import type { FormInstance, FormProps } from 'ant-design-vue';
import type { NFormItem, KV } from '@/types';
import { cloneDeep } from 'lodash';

interface Props {
  modelValue: KV;
  formProps?: FormProps;
  items: (formData: KV) => NFormItem[];
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => ({}),
});

const isLoading = ref(true);
let formData = reactive<KV>(props.modelValue || {});
const defaultValueMap: KV = !!props.modelValue ? cloneDeep(props.modelValue) : {};

// 结构数据
const formItems = computed(() => props.items(formData));
const isInlineLayout = computed(() => {
  const attrs = useAttrs();
  return [props.formProps?.layout, attrs.layout].includes('inline');
});

watch(
  formItems,
  (formItems) => {
    formItems.forEach((item) => {
      if (void 0 !== item.defaultValue) {
        if (void 0 === item.name) {
          console.warn('表单组件缺少name字段');
        } else {
          // 同步items配置中设置的默认值
          formData[item.name] = formData[item.name] || item.defaultValue;
          defaultValueMap[item.name] = formData[item.name];
        }
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
  // formData = cloneDeep(defaultValueMap);

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
  <!-- {{ formData }} -->
  <a-form v-if="!isLoading && void 0 !== formData" ref="formRef" :model="formData"  v-bind="formProps" scrollToFirstError>
    <a-row>
      <template v-for="item in formItems" :key="item.name">
        <a-col :span="isInlineLayout ? void 0 : item?.span || 24">
          <a-form-item v-if="!('toggle' in item && !isShowFormItem)" colon :id="item.name" v-bind="item">
            <!-- {{formData[item.name]}} -->
            <!-- 表单类的组件 -->
            <component
              v-if="item.name"
              :is="item.is"
              v-bind="{
                allowClear: true,
                placeholder: `请输入${item.label || ''}`,
                ...item.props,
              }"
              v-model:[getVModelName(item)]="formData[item.name as string]"
            >
            </component>
            <!-- 纯显示组件 -->
            <component v-else :is="item.is" v-bind="item.props"></component>
          </a-form-item>
        </a-col>
      </template>
    </a-row>
    <slot name="after"></slot>
  </a-form>
</template>
