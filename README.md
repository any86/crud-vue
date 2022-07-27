# v-curd

🚀 基于 ant-design-vue@3 封装的"**增/删/改/查**"组件.

![image](https://user-images.githubusercontent.com/8264787/181182787-ecde9c22-0e2d-4bad-ba8a-9ef727cdfcad.png)

## 演示

[demo](https://v-curd.vercel.app/)

[vue-admin](https://vue-admin-zeta.vercel.app/)

## 安装

```shell
npm i v-curd -D
```

## 快速开始

下面是一个简单的表格, 只需要配置`columns`和`done`字段.

`columns`就是"ant"组件库中 table 组件的配置, 用来配置列.

`done`是"v-curd"定义的字段, 值是个函数, 用来格式化接口返回数据, 函数返回`{total:10,list:[{xx:1}]}`这样的数据表格就会显示.

```vue
<script setup lang="ts">
import curd from 'v-curd';
const primaryKey = 'id';
const r = defineR({
  columns: [
    {
      title: 'id',
      dataIndex: 'id',
    },

    {
      title: 'name',
      dataIndex: 'name',
    },

    {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      width: 250,
    },
  ],

  async done() {
    const { data } = await http('/role');
    return { list: data.list, total: data.total };
  },
});
</script>

<template>
  <curd :primaryKey="primaryKey" :r="r"></curd>
</template>
```

## API

通过配置"v-curd"组件的"**c/u/r/d**"4 个字段实现"增删改查".

### primaryKey

**必填**, ant 中的`a-table`需要, 这里一般使用数据中的"**id**"字段即可.

### r

**必填**, 值是个对象, 用来配置表格, 用`defineR`函数来定义,包含如下字段:

- [columns , 表格字段配置]()
- [tableProps , 🐜ant 的 table 组件完整配置]()
- [hideRowSelection , 控制每行 checkbox 显隐]()
- [conditionItems , 搜索条件表单结构数据]()
- [done , 列表接口数据处理]()
- [getOne , 详情接口数据处理]()

```typescript
const r = defineR({
  columns: [{ title: 'name', dataIndex: 'name' }],
  tableProps: {},
  hideRowSelection: true,
  conditionItems: [{ name: 'name', is: 'a-input' }],
  async done() {
    const { data } = await http('/role');
    return { list: data.list, total: data.total };
  },
});
```

### c

**非必填**, 用来构造"新建"表单,用`defineC`函数来定义.

- [before, 表单显示前的钩子函数]()
- [modalProps, 🐜ant 的 modal 组件完整配置]()
- [formProps, 🐜ant 的 form 组件完整配置]()
- [items, 配置表单每一项的组件]()
- [done, 点击"新增"按钮后触发]()

```typescript
const c = defineC({
  async before() {
    await Promise.all([getRoleOptions(), getDepartmentOptions(), getPositionOptions()]);
  },
  async done(formData) {
    const { status, data } = await http.post('/user', formData);
    return [200 === status, data.msg];
  },
  formProps: { labelCol: { span: 2 } },
  items: () => [
    { is: 'a-input', name: 'userName', label: '账号', rules: [{ required: true, message: '必填项' }] },
    { is: 'a-input', name: 'realName', label: '姓名' },
```

### u

**非必填**, 用来构造"编辑"表单,用`defineU`函数来定义.和`c`的配置一样, 除了`modalProps`这里是`drawerProps`

- [drawerProps, 🐜ant 的 drawer 组件完整配置]()

### d

**非必填**, 用来配置"删除操作",用`defineD`函数来定义.

- done, 点击"删除"按钮后触发

```typescript
const d = defineD({
  async done(idList) {
    // 判断idList长度区分是否批量删除
    // 批量删除
    if (1 < idList.length) {
      const { data, status } = await http.delete('/user/' + idList.join(','));
      return [200 === status, data.msg];
    } else {
      // 删除一条
      const { data, status } = await http.delete('/user/' + idList[0]);
      return [200 === status, data.msg];
    }
  },
});
```
