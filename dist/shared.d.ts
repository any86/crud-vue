import type { CProps, DProps, RProps, UProps, KV } from './types';
export declare function useForm(done: CProps['done'], onSuccess: (formData: KV) => void, onFail: (error: string) => void, onReset?: () => void): {
    nFormRef: import("vue").Ref<import("vue").DefineComponent<{
        modelValue: {
            type: null;
            required: true;
            default: () => {};
        };
        formProps: {
            type: null;
            required: false;
        };
        items: {
            type: FunctionConstructor;
            required: true;
        };
    }, {
        props: {
            modelValue: KV<any>;
            formProps?: Partial<import("vue").ExtractPropTypes<{
                layout: import("_vue-types@3.0.2@vue-types").VueTypeDef<"inline" | "horizontal" | "vertical">;
                labelCol: {
                    type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
                        span: (StringConstructor | NumberConstructor)[];
                        order: (StringConstructor | NumberConstructor)[];
                        offset: (StringConstructor | NumberConstructor)[];
                        push: (StringConstructor | NumberConstructor)[];
                        pull: (StringConstructor | NumberConstructor)[];
                        xs: {
                            type: import("vue").PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        sm: {
                            type: import("vue").PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        md: {
                            type: import("vue").PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        lg: {
                            type: import("vue").PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xl: {
                            type: import("vue").PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xxl: {
                            type: import("vue").PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xxxl: {
                            type: import("vue").PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        prefixCls: StringConstructor;
                        flex: (StringConstructor | NumberConstructor)[];
                    }>> & import("vue").HTMLAttributes>;
                };
                wrapperCol: {
                    type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
                        span: (StringConstructor | NumberConstructor)[];
                        order: (StringConstructor | NumberConstructor)[];
                        offset: (StringConstructor | NumberConstructor)[];
                        push: (StringConstructor | NumberConstructor)[];
                        pull: (StringConstructor | NumberConstructor)[];
                        xs: {
                            type: import("vue").PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        sm: {
                            type: import("vue").PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        md: {
                            type: import("vue").PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        lg: {
                            type: import("vue").PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xl: {
                            type: import("vue").PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xxl: {
                            type: import("vue").PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xxxl: {
                            type: import("vue").PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        prefixCls: StringConstructor;
                        flex: (StringConstructor | NumberConstructor)[];
                    }>> & import("vue").HTMLAttributes>;
                };
                colon: {
                    type: BooleanConstructor;
                    default: any;
                };
                labelAlign: import("_vue-types@3.0.2@vue-types").VueTypeDef<"left" | "right">;
                labelWrap: {
                    type: BooleanConstructor;
                    default: any;
                };
                prefixCls: StringConstructor;
                requiredMark: {
                    type: import("vue").PropType<"" | import("ant-design-vue/lib/form/Form").RequiredMark>;
                    default: any;
                };
                hideRequiredMark: {
                    type: BooleanConstructor;
                    default: any;
                };
                model: import("_vue-types@3.0.2@vue-types").VueTypeValidableDef<{
                    [key: string]: any;
                }> & {
                    default: () => {
                        [key: string]: any;
                    };
                };
                rules: {
                    type: import("vue").PropType<{
                        [k: string]: import("ant-design-vue/lib/form").RuleObject | import("ant-design-vue/lib/form").RuleObject[];
                    }>;
                };
                validateMessages: {
                    type: import("vue").PropType<import("ant-design-vue/lib/form/interface").ValidateMessages>;
                    default: import("ant-design-vue/lib/form/interface").ValidateMessages;
                };
                validateOnRuleChange: {
                    type: BooleanConstructor;
                    default: any;
                };
                scrollToFirstError: {
                    type: import("vue").PropType<boolean | import("_scroll-into-view-if-needed@2.2.29@scroll-into-view-if-needed").Options<any>>;
                };
                onSubmit: import("vue").PropType<(e: Event) => void>;
                name: StringConstructor;
                validateTrigger: {
                    type: import("vue").PropType<string | string[]>;
                };
                size: {
                    type: import("vue").PropType<import("ant-design-vue/lib/button").ButtonSize>;
                };
                onValuesChange: {
                    type: import("vue").PropType<(changedValues: any, values: any) => void>;
                };
                onFieldsChange: {
                    type: import("vue").PropType<(changedFields: import("ant-design-vue/lib/form/interface").FieldData[], allFields: import("ant-design-vue/lib/form/interface").FieldData[]) => void>;
                };
                onFinish: {
                    type: import("vue").PropType<(values: any) => void>;
                };
                onFinishFailed: {
                    type: import("vue").PropType<(errorInfo: import("ant-design-vue/lib/form/interface").ValidateErrorEntity<any>) => void>;
                };
                onValidate: {
                    type: import("vue").PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
                };
            }>> | undefined;
            items: (formData: KV<any>) => import('./types').NFormItem[];
        };
        isLoading: import("vue").Ref<boolean>;
        formData: import("vue").Ref<KV<any>>;
        defaultValueMap: KV<any>;
        formItems: import("vue").ComputedRef<import('./types').NFormItem[]>;
        formRef: import("vue").Ref<import("ant-design-vue").FormInstance | undefined>;
        getVModelName: (item: import('./types').NFormItem) => string;
        reset: () => Promise<void>;
        isShowFormItem: import("vue").Ref<boolean>;
        toggleItem: () => Promise<void>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: null;
            required: true;
            default: () => {};
        };
        formProps: {
            type: null;
            required: false;
        };
        items: {
            type: FunctionConstructor;
            required: true;
        };
    }>>, {
        modelValue: any;
    }> | undefined>;
    isShow: import("vue").Ref<boolean>;
    isSubmitting: import("vue").Ref<boolean>;
    save: () => Promise<void>;
    reset: () => void;
    formData: import("vue").Ref<KV<any>>;
    setDefault: (formData: KV) => void;
};
export declare function walkTree<Node extends {
    children?: Node[];
}>(nodes: Node[], each: (node: Node) => void): void;
export declare function defineC(config: CProps): CProps;
export declare function defineU(config: UProps): UProps;
export declare function defineR(config: RProps): RProps;
export declare function defineD(config: DProps): DProps;
