import type { AntTreeNodeDropEvent } from 'ant-design-vue/es/tree';
declare type Node = {
    [k: string]: any;
    title: string;
    key: string;
    children?: any[];
};
declare type Tree = Node[];
declare const _sfc_main: import("vue").DefineComponent<{
    columns: {
        type: ArrayConstructor;
        required: true;
    };
}, {
    props: {
        columns: Tree;
    };
    emit: (type: 'change', columns: Tree) => void;
    treeRaw: Tree;
    tree: import("vue").Ref<{
        [x: string]: any;
        title: string;
        key: string;
        children?: any[] | undefined;
    }[]>;
    checkedKeys: import("vue").Ref<string[]>;
    onCheck: (checkedKeys: string[], { halfCheckedKeys }: {
        halfCheckedKeys: string[];
    }) => void;
    reset: () => void;
    onDrop: (e: AntTreeNodeDropEvent) => void;
    insertNode: (tree: Tree, path1: string[], path2: string[], insertToChildren: boolean, dropPosition: number) => void;
    findChildrenRef: (tree: Tree, path: string[]) => [Node[], number];
    SettingOutlined: import("@ant-design/icons-vue/lib/icons/SettingOutlined").SettingOutlinedIconType;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    columns: {
        type: ArrayConstructor;
        required: true;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
