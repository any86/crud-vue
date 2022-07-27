# v-curd

🚀基于 ant-design-vue@3 封装的"**增/删/改/查**"组件.

![image](https://user-images.githubusercontent.com/8264787/181182787-ecde9c22-0e2d-4bad-ba8a-9ef727cdfcad.png)


## 安装

```shell
npm i v-curd -D
```

## 快速开始

下面是一个简单的表格, 只需要配置`columns`和`done`字段.

`columns`就是"ant"组件库中table组件的配置, 用来配置列.

`done`是"v-curd"定义的字段, 值是个函数, 用来格式化接口返回数据, 函数返回`{total:10,list:[{xx:1}]}`这样的数据表格就会显示.

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

通过配置"v-curd"组件的"**c/u/r/d**"4个字段实现"增删改查".

### primaryKey

**必填**, ant 中的`a-table`需要, 这里一般使用数据中的"**id**"字段即可.

### r

**必填**, 值是个对象, 用来配置表格,包含如下字段

- [columns , 表格字段配置]()
- [tableProps , 🐜ant的table 组件完整配置]()
- [hideRowSelection , 控制每行 checkbox 显隐]()
- [conditionItems , 搜索条件表单结构数据]()
- [done , 列表接口数据处理]()
- [getOne , 详情接口数据处理]()


### c

用来构造"新建"表单.
- [before, 表单显示前的钩子函数, 用来获取]()
- [formProps, 🐜ant的form组件完整配置]()
- [items, 配置表单每一项的组件]()
- [done, 点击"新增"按钮后触发]()


### u

用来构造"编辑"表单, 和"c"一样.

### d

用来配置"删除操作"

- [done, 点击"删除"按钮后触发]()