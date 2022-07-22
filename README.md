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
    return { list: data.list, total: data.total };
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

**必填**, ant 中的`a-table`需要, 这里一般使用数据中的"**id**"字段即可.

### r

**必填**, 值是个对象, 用来配置表格,包含如下字段

- [columns , 表格字段配置]()
- [tableProps , table 组件完整配置]()
- [hideRowSelection , 控制每行 checkbox 显隐]()
- [conditionItems , 搜索条件表单结构数据]()
- [done , 列表接口数据处理]()
- [getOne , 详情接口数据处理]()


### c

用来构造"新建"表单.
-[before, 表单显示前的钩子函数, 用来获取]()
-[formProps]()
-[items]()
-[done]()