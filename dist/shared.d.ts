import { type Ref } from 'vue';
import type { CProps, DProps, RProps, UProps, KV } from './types';
export declare function useForm(done: CProps['done'], onSuccess: (formData: KV) => void, onFail: (error: string) => void, onReset?: () => void): {
    nFormRef: Ref<any>;
    isShow: Ref<boolean>;
    isSubmitting: Ref<boolean>;
    save: () => Promise<void>;
    reset: () => void;
    formData: Ref<KV<any>>;
    setDefault: (formData: KV) => void;
};
export declare function walkTree<Node extends {
    children?: Node[];
}>(nodes: Node[], each: (node: Node) => void): void;
export declare function defineC(config: CProps): CProps;
export declare function defineU(config: UProps): UProps;
export declare function defineR(config: RProps): RProps;
export declare function defineD(config: DProps): DProps;
