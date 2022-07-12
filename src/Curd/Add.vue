<script setup lang="ts">
import { type FormProps} from 'ant-design-vue';
import NForm from './NForm.vue';
import { useForm } from '@/shared';
import type { CProps, NFormItem, KV } from '@/types';

interface Props extends CProps {
  modelValue: KV;
  formProps?: FormProps;
  items: (formData: KV) => NFormItem[];
  done: (formData: KV) => Promise<[boolean, string]>;
}

interface Emits {
  (type: 'success', formData: KV): void;
  (type: 'fail', error: unknown): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

function onReset() {
  const elList = document.querySelectorAll('.modal-add');
  for (const el of Array.from(elList)) {
    el.querySelector('.ant-modal-body')?.scrollTo(0, 0);
  }
}

const { nFormRef, isShow, isSubmitting, save, reset, formData,setDefault} = useForm(
  props.done,
  (formData) => {
    emit('success', formData);
  },
  (error) => {
    console.log(error);
    emit('fail', error);
  },
  onReset
);

setDefault({});

defineExpose({
  reset,
  show() {
    isShow.value = true;
  },
});
</script>

<template>
  <a-modal
    class="modal-add"
    ref="modalRef"
    v-model:visible="isShow"
    title="新建"
    width="52%"
    :bodyStyle="{ overflow: 'scroll', maxHeight: '70vh' }"
  >
    <n-form ref="nFormRef" v-model="formData" :items="items" :formProps="formProps"></n-form>
    <template #footer>
      <a-button :loading="isSubmitting" @click="reset">重置</a-button>
      <a-button type="primary" :loading="isSubmitting" @click="save">确定</a-button>
    </template>
  </a-modal>
</template>
