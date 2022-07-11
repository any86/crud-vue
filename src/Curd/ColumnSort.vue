<script setup lang="ts">
import cloneDeep from 'lodash/cloneDeep';
import { ref, toRaw } from 'vue';
import type { AntTreeNodeDropEvent } from 'ant-design-vue/es/tree';
import { walkTree } from '../shared';
import { SettingOutlined } from '@ant-design/icons-vue';
type Node = { [k: string]: any; title: string; key: string; children?: Node[] };
type Tree = Node[];

interface Props {
  columns: Tree;
}

interface Emits {
  (type: 'change', columns: Tree): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const treeRaw = cloneDeep(toRaw(props.columns));
// 让每个节点上都有key字段
walkTree(treeRaw, (node) => {
  const { title, dataIndex, key } = node;
  node.key = key || dataIndex || title;
  return node;
});

// 树
const tree = ref(treeRaw);
// 默认树的节点都选中
// 注意这里不能用reactive,只能ref, 不然tree组件不能"check"交互
const checkedKeys = ref(treeRaw.map(({ key }) => key));

function onCheck(checkedKeys: string[], { halfCheckedKeys }: { halfCheckedKeys: string[] }) {
  const keys = [...checkedKeys, ...halfCheckedKeys];
  const treeRaw2 = cloneDeep(treeRaw);
  walkTree(treeRaw2, (node) => {
    if (keys.includes(node.key)) return node;
  });
  console.log(treeRaw2);
  emit('change', treeRaw2);
}

/**
 * 选择所有列
 */
function reset() {
  checkedKeys.value = treeRaw.map(({ key }) => key);
  tree.value = treeRaw;
  emit('change', treeRaw);
}

function onDrop(e: AntTreeNodeDropEvent) {
  // dropToGap 插入dropNode后面还是其内部
  // dropPosition 在移动前(不考虑移动), 如果横线变成节点, 节点索引
  const { dragNode, node, dropToGap, dropPosition } = e;
  const dragNodePos = dragNode.pos?.split('-').slice(1);
  const dropNodePos = node.pos?.split('-').slice(1);
  // console.log(dragNode.pos, node.pos, dropToGap, dropPosition, e);
  // console.log({ insertToChildren: !dropToGap });
  if (dragNodePos && dropNodePos) {
    const treeRaw = cloneDeep(toRaw(tree.value));
    insertNode(treeRaw, dragNodePos, dropNodePos, !dropToGap, dropPosition);
    tree.value = treeRaw;
    emit('change', treeRaw);
  }
}

/**
 * 移动节点
 * @param tree
 * @param path1 源节点路径
 * @param path2 目标路径
 */
function insertNode(tree: Tree, path1: string[], path2: string[], insertToChildren: boolean, dropPosition: number) {
  const [children1, childIndex1] = findChildrenRef(tree, path1);
  const [children2, childIndex2] = findChildrenRef(tree, path2);
  const node1 = children1[childIndex1];
  const lastIndex = path1.length - 1;
  const moveUp = path1[lastIndex] >= (path2[lastIndex] || 0);

  function _insertToChildren() {
    if (moveUp) {
      // 先删除源节点
      // console.log(children1, childIndex1,children2, childIndex2);
      const [_node1] = children1.splice(childIndex1, 1);
      const node2 = children2[childIndex2];
      node2.children = node2.children || [];
      node2.children.unshift(_node1);
      // console.log(node2);
    } else {
      // 先移动源节点, 再删除源节点
      const node2 = children2[childIndex2];
      node2.children = node2.children || [];
      node2.children.unshift(node1);
      children1.splice(childIndex1, 1);
    }
  }

  function _insertSibling() {
    if (moveUp) {
      // 先删除源节点
      const [_node1] = children1.splice(childIndex1, 1);
      children2.splice(childIndex2 + 1, 0, _node1);
    } else {
      // 先移动源节点
      children2.splice(childIndex2 + 1, 0, node1);
      children1.splice(childIndex1, 1);
    }
  }

  if (insertToChildren) {
    // 插入到节点的children字段
    _insertToChildren();
    // 暂时只做1级
    // _insertSibling();
  } else {
    // 插入到dropNode的后面
    if (-1 == dropPosition) {
      // -1特指掺入到根的第一个位置前面
      // 先删除源节点
      const [_node1] = children1.splice(childIndex1, 1);
      children2.unshift(_node1);
    } else {
      _insertSibling();
    }
  }
}

/**
 * 找到父容器(children)和元素索引
 */
function findChildrenRef(tree: Tree, path: string[]): [Node[], number] {
  const { length } = path;
  if (1 === length) return [tree, Number(path[0])];
  let node = tree[Number(path[0])];
  for (let i = 1; i < length - 1; i++) {
    node = node.children![Number(path[i])];
  }
  return [node.children!, Number(path[length - 1])];
}
</script>

<template>
  <a-popover trigger="click">
    <template #title>
      <p class="d-flex align-items-center">
        <span class="flex-1">列设置</span>
        <a-button class="px-0" type="link" @click="reset">重置</a-button>
      </p>
    </template>
    <template #content>
      <a-tree
        class="tree-sort"
        v-model:checkedKeys="checkedKeys"
        @check="onCheck"
        :tree-data="tree"
        autoExpandParent
        checkable
        draggable
        block-node
        defaultExpandAll
        @drop="onDrop"
      />
    </template>

    <a-tooltip>
      <template #title>列设置</template>
      <a>
        <setting-outlined />
      </a>
    </a-tooltip>
  </a-popover>
</template>

<style lang="scss">
.tree-sort {
  .ant-tree-treenode {
    &::before {
      content: '';
      cursor: grab;
      // color: #ccc;
      height: 20px;
      width: 20px;
      display: block;
      font-size: 20px;
      background-image: url(@/assets/icon/drag.svg);
      opacity: 0.5;
      background-size: 100% auto;
    }

    &:hover {
      &::before {
        opacity: 1;
        transition: transform 1s;
        transform: scale(0.9);
      }
    }
  }
}
</style>
