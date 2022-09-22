import type { ColProps, FormProps, FormItemProps, TableProps, DrawerProps, ModalProps } from 'ant-design-vue';
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

interface UC {
  formProps?: FormProps;
  // modelValue不暴露给defineC函数
  // modelValue: KV;
  items: (formData: KV) => NFormItem[];
}

/**
 * "新增"表单组件的属性
 */
export interface CProps extends UC {
  modalProps?: ModalProps;
  before?: ((formData: KV) => Promise<void>) | (() => void);
  done: (formData: KV) => Promise<[boolean, string?]>;
}

/**
 * "编辑"表单组件的属性
 */
export interface UProps extends UC {
  drawerProps?: DrawerProps;
  before?: ((formData: KV) => Promise<KV>) | (() => void);
  done: (formData: KV, currentRow: KV) => Promise<[boolean, string?]>;
}

export interface RProps extends TableProps {
  before?: () => void;
  drawerProps?: DrawerProps;
  // 筛选条件配置
  conditionItems?: (shared?: KV) => NFormItem[];
  tableProps?: TableProps
  done: (params: KV) => Promise<{ list: KV[], total: number }>;
  hideRowSelection?: boolean;
  // 获取一条
  getOne?: (params: KV) => Promise<KV>;
  // 导出excel
  exportExcel?: {
    done: (condition: KV) => Promise<KV[]>;
  }
}

export interface DProps {
  /**
   * 点击删除后执行
   * @param keys 主键的数组,
   * @param row 删除当行时, 当前行信息
   */
  done: (keys: string[], row?: KV) => Promise<[boolean, string]>;
}
