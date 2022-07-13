# v-curd

基于 ant-design-vue@3 的 curd 组件. 简单的事别整复杂了.

## 快速开始

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
    return data;
  },
});
</script>

<template>
  <curd v-bind="{ primaryKey, r }"></curd>
</template>
```
