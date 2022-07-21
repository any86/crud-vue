# v-curd

基于 ant-design-vue@3 封装的 curd 组件, 帮你复杂事简单办.

## 安装

```shell
npm i v-curd -D
```

## 快速开始

下面是一个简单的表格

```vue
<script setup lang="ts">
import curd from "v-curd";
const primaryKey = "id";
const r = defineR({
  columns: [
    {
      title: "id",
      dataIndex: "id",
    },

    {
      title: "name",
      dataIndex: "name",
    },

    {
      title: "操作",
      key: "operation",
      fixed: "right",
      width: 250,
    },
  ],

  async done() {
    const { data } = await http("/role");
    return {list:data.list,total:data.total};
  },
});
</script>

<template>
  <curd :primaryKey="primaryKey" :r="r"></curd>
</template>
```

## API
`v-curd`组件通过属性来配置"增删改查"的必要逻辑.

### primaryKey
**必填**, ant中的`a-table`需要, 这里一般使用数据中的`xxid`字段即可.

### r
**必填**, 值是个对象, 用来配置表格的显示.
其中`columns`字段就是`ant`的`table`组件的`columns`, 具体说明可参考ant的文档.

