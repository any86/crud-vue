import { ref, type PropType } from 'vue'
import to from 'await-to-js';
import { message } from 'ant-design-vue';
import NForm from '@/Curd/VForm.vue';
import { cloneDeep } from 'lodash';
import type { CProps, DProps, RProps, UProps, KV } from '@/types';

// export const FORM_PROPS = {
//     done: {
//         type: Function as PropType<CProps['done']>,
//         required: true,
//     },
//     before: {
//         type: Function as PropType<CProps['before']>,
//         default: () => void 0,
//     },

//     formProps: {
//         type: Object as PropType<CProps['formProps']>,
//     },

//     modelValue: {
//         type: Object as PropType<CProps['modelValue']>,
//         required: true,
//     },

//     items: {
//         type: Function as PropType<CProps['items']>,
//         required: true,
//     },
// };


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
                throw '"请检查done"函数的返回值格式,预期[boolean,string]!';
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



export function walkTree<Node extends { children?: Node[] }>(nodes: Node[], each: (node: Node) => void) {
    const stack: Node[] = [];
    _filter(nodes, each, stack);
    while (stack.length > 0) {
        const node = stack.pop()!;
        if (node.children?.length) {
            _filter(node.children, each, stack);
        }
    }

    function _filter(nodes: Node[], each: (node: Node) => void, stack: Node[]) {
        let { length } = nodes
        for (let i = 0; i < length; i++) {
            const node = nodes[i];
            if (void 0 === each(node)) {
                nodes.splice(i, 1);
                length--;
                i--;
            } else {
                stack.push(node);
            }
        }
    }
}
export function _warn(...message: any) {
    console.warn(...message)
}


export function defineC(config: CProps): CProps {
    return config;
}

export function defineU(config: UProps): UProps {
    return config;
}

export function defineR(config: RProps): RProps {
    return config;
}

export function defineD(config: DProps): DProps {
    return config;
}