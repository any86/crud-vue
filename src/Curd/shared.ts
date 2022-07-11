import { ref, type Ref } from 'vue'
import to from 'await-to-js';
import { message } from 'ant-design-vue';
import NForm from './NForm.vue';
import type { CProps, KV } from './Types';
import { cloneDeep } from 'lodash';



export function useForm(done: CProps['done'], onSuccess: (formData: KV) => void, onFail: (error: string) => void, onReset = () => { }) {
    const nFormRef = ref<typeof NForm>();
    const defaultFormData = ref<KV>({});
    // 提交中
    const isSubmitting = ref(false);
    const isShow = ref(false);
    // 默认值
    const formData = ref(cloneDeep(defaultFormData.value));
    // 保存新增
    async function save() {
        const formRef = nFormRef.value?.formRef;


        if (!formRef) return;
        isSubmitting.value = true;
        // 验证表单
        const [error] = await to(formRef.validateFields());
        formRef.scrollToField('usersLoginname');
        if (null !== error) {
            isSubmitting.value = false;
            console.log(error);
            return;
        }
        // 保存
        try {
            const [error1, data1] = await to(done(formData.value));
            if (null !== error1) {
                isSubmitting.value = false;
                console.log(error1);
                return;
            }
            if (!Array.isArray(data1)) {
                throw '"检查done"的返回值格式,预期[number,string]!';
            }

            const [isSuccess, msg] = data1;
            if (isSuccess) {
                message.success(msg);
                reset();
                onSuccess(formData.value)
            } else {
                message.error(msg);
                onFail(msg);
            }
            isShow.value = false;
        } catch (error) {
            console.log(error);
        } finally {
            isSubmitting.value = false;
        }
    }

    function reset() {
        onReset();
        nFormRef.value?.reset();
    }

    function setDefault(formData: KV) {
        defaultFormData.value = formData;
    }

    return {
        nFormRef, isShow, isSubmitting, save, reset, formData, setDefault
    };
}



