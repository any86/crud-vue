<script setup lang="ts">
import { ref, watch } from 'vue';
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
const defaultValueMap: KV = !!props.modelValue ? cloneDeep(props.modelValue) : {};
watch(
  () => props.modelValue,
  (modelValue) => {
    formData.value = cloneDeep(modelValue);
  }
);

// 结构数据
const formItems = computed(() => props.items(formData.value));
watch(
  formItems,
  (formItems) => {
    formItems.forEach((item) => {
      if (void 0 !== item.defaultValue) {
        if (void 0 === item.name) {
          console.warn('表单组件缺少name字段');
        } else {
          // 同步items配置中设置的默认值
          formData.value[item.name] = formData.value[item.name] || item.defaultValue;
          defaultValueMap[item.name] = formData.value[item.name];
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
  formData.value = cloneDeep(defaultValueMap);
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
  <a-form v-if="!isLoading && void 0 !== formData" ref="formRef" :model="formData" v-bind="formProps">
  <!-- {{ formData }} -->
    <template v-for="item in formItems" :key="item.name">
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
    </template>
    <slot name="after"></slot>
  </a-form>
</template>
