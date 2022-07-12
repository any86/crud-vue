import type { ColProps, FormProps, FormItemProps, TableProps } from 'ant-design-vue';
import type { VNode, Component as C1 } from 'vue';
export interface KV<T = any> {
    [k: string | number]: T;
}
export interface NFormItem extends FormItemProps {
    is: string | VNode | C1;
    name?: string;
    modelName?: string;
    props?: KV;
    span?: ColProps['span'];
    defaultValue?: any;
    toggle?: boolean;
}
/**
 * "新增"表单组件的属性
 */
export interface CProps {
    before?: (() => Promise<void>) | (() => void);
    formProps?: FormProps;
    items: (formData: KV) => NFormItem[];
    done: (formData: KV) => Promise<[boolean, string]>;
}
/**
 * "编辑"表单组件的属性
 */
export interface UProps extends CProps {
    getDefaultValue: (formData: KV) => Promise<KV>;
}
export interface RProps extends TableProps {
    conditionItems?: () => NFormItem[];
    tableProps?: TableProps;
    done: (params: KV) => Promise<{
        list: KV[];
        total: number;
    }>;
    hideRowSelection?: boolean;
    getOne?: (params: KV) => Promise<KV>;
}
export interface DProps {
    /**
     * 点击删除后执行
     * @param keys 主键的数组,
     * @param row 删除当行时, 当前行信息
     */
    done: (keys: string[], row?: KV) => Promise<[boolean, string]>;
}
