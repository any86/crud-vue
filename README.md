# crud-vue

🚀 基于 ant-design-vue@3 封装的"**增/删/改/查**"组件.

![image](https://user-images.githubusercontent.com/8264787/181182787-ecde9c22-0e2d-4bad-ba8a-9ef727cdfcad.png)

## 演示

[demo](https://crud-tawny-ten.vercel.app/)

[v-admin](https://v-admin-sage.vercel.app/)

## 安装

```shell
npm i crud-vue -D
```

## 快速开始

下面是一个简单的表格, 只需要配置`columns`和`done`字段.

`columns`就是"ant"组件库中 table 组件的配置, 用来配置列.

`done`是"crud-vue"定义的字段, 值是个函数, 用来格式化接口返回数据, 函数返回`{total:10,list:[{xx:1}]}`这样的数据表格就会显示.

```vue
<script setup lang="ts">
import curd, { defineR } from 'crud-vue';
const primaryKey = 'id';
const r = defineR({
    columns: [
        {
            title: 'name',
            dataIndex: 'name',
        },

        {
            title: '操作',
            key: 'operation',
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

-   **Props**
    -   [primaryKey(主键)](#primarykey主键)
    -   [r(读取)](#r读取)
    -   [c(新增)](#c新增)
    -   [u(编辑)](#u编辑)
    -   [d(删除)](#d删除)
-   **Slots**
    -   [one(详情)](#one)
    -   [row-buttons-before(表格行按钮)](#row-buttons-before)

### Props

通过配置"crud-vue"组件的"**c/u/r/d**"4 个字段实现"增删改查".

#### primaryKey(主键)

**必填项**, ant 中的`a-table`需要, 选用数据中的能"**表示唯一的 id**"字段即可.

![image](https://user-images.githubusercontent.com/8264787/181693782-c4680197-4e26-49e9-bc94-ee86aaa150c9.png)

#### r(读取)

**必填项**, 主要配置"表格"和"数据", 这里的表格实际就是 🐜ant 的 table 组件, 使用`defineR`函数定义.

```typescript
const r = defineR({
    // 列配置
    columns: [{ title: 'name', dataIndex: 'name' }],

    // 筛选条件配置
    conditionItems: [{ name: 'name', is: 'a-input' }],

    // 列表接口数据处理
    async done() {
        const { data } = await http('/user');
        return { list: data.xxList, total: data.xxTotal };
    },
});
```

[查看"r"的文档](./docs/r.md)

#### c(新增)

**非必填**, 用来构造"新建"表单,用`defineC`函数来定义.

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

[查看"c"的文档](./docs/c.md)

#### u(编辑)

**非必填**, 用来构造"编辑"表单,用`defineU`函数来定义.基本和"**c**"的配置一样.

[查看"u"的文档](./docs/u.md)

#### d(删除)

**非必填**, 用来配置"删除操作",用`defineD`函数来定义. `d`暂只有一个属性`done`:

##### done

**必填项**, `done`是个函数, 点击"删除"按钮后触发, 函数内需要写请求删除接口的逻辑.

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

可以通过 done 的参数来判断是批量删除还是单行删除.

**特别注意**

1. `done`必须是一个返回"**promise**"的函数, 也可以用"async", 其返回值也是"**promise**".
2. `done`函数的返回值必须是`[boolean,string?]`格式, "boolean"用来表示是否操作成功, "string"是选填,是成功/失败后消息框显示的文字, 如果不填, 不进行消息显示.
   ![image](https://user-images.githubusercontent.com/8264787/181669190-7e374ccf-0a5e-4680-9fa3-83344fedb296.png)

### Slots

#### one

`r.getOne`函数返回的数据会被传递到`one`插槽上.

```typescript
defineR({
    async getOne() {
        return { a: 1, b: 2 };
    },
});
```

```html
<crud-vue>
    <template #one="{a,b}"> 苹果 = {{a}} 香蕉 = {{b}} </template>
    <!-- 输出 => 苹果 = 1 香蕉 = 2 -->
</crud-vue>
```

#### row-buttons-before

表格每行按钮的最前面位置, 一般用来加入自定义按钮.

```vue
<template>
    <crud-vue>
        <template #row-buttons-before>
            <a-button @click="config">配置</a-button>
        </template>
    </crud-vue>
</template>

<script setup>
function config() {
    alert('配置');
}
</script>
```

![image](https://user-images.githubusercontent.com/8264787/182507703-34bfeb98-d424-43de-a563-b644ecd8ce8b.png)
