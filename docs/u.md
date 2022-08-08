# u
编辑数据表单.

**必填**
- [items, 配置表单每一项的组件](#items)
- [done, 点击"新增"按钮后触发](#done)

**选填**
- [before, 表单显示前的钩子函数](#before)
- [drawerProps, 🐜ant 的 drawer 组件完整配置](#drawerprops)
- [formProps, 🐜ant 的 form 组件完整配置](#formprops)



## items

**必填项**, 配置表单结构, [完整说明](./items.md)

```typescript
defineU({
  items: () => [{ is: 'a-input', name: 'userName', label: '账号' }],
});
```

## done

**必填项**, 是个函数, 内部需要写把表单数据传给接口的逻辑.

```typescript
defineU({
  items: () => [{ is: 'a-input', name: 'userName', label: '账号' }],

  async done(formData) {
    // formData为表单数据
    const { data, status } = await http('/user', { formData });
    return [200 === true, data.msg];
  },
});
```

**特别注意**

1. `done`必须是一个返回"**promise**"的函数, 也可以用"async", 其返回值也是"**promise**".
2. `done`函数的返回值必须是`[boolean,string?]`格式, "boolean"用来表示是否操作成功, "string"是选填,是成功/失败后消息框显示的文字, 如果不填, 不进行消息显示.
   ![image](https://user-images.githubusercontent.com/8264787/181669190-7e374ccf-0a5e-4680-9fa3-83344fedb296.png)

## before

在显示"表单"前的钩子函数, 函数必须返回promise,或使用`async`, 返回值会作为表单的默认值.
```typescript
defineC({
  conditionItems: [{ name: 'userName', is: 'a-input',label:'账号'}],

  // row是表格当前行的数据,
  async before(row) {
    const { data } = await axios.get('/user/'+row.id);
    return data; // {userName:'Perez'}
  },

});
```

![image](https://user-images.githubusercontent.com/8264787/181679457-0eef431b-21a8-450e-bc2d-32a0600569ef.png)

##### 预备数据
在表单显示前, 可预备表单组件需要的数据, 比如"select"组件的"options".

```typescript
// select组件的选项数据.
const options = [];
defineC({
  // row是表格当前行的数据,
  // 一般里面都会包含表示唯一的"xxId"
  async before(row) {
    const { data } = await axios.get('/xx/'+row.xxId);
    options = data;
  },

  // options用来渲染select组件
  conditionItems: [{ name: 'category', is: 'a-input', props: [{ options }] }],
});
```

## formProps

`crud-vue`的表单是基于"ant"的"form"组件进行的封装, 所以想进一步对 form 组件设置, 可以通过[formProps](https://www.antdv.com/components/form-cn#API)属性, 比如设置标题文字的宽度:

```typescript
const c = defineC({
  formProps: { labelCol: { span: 2 } },
});
```

## drawerProps

表单所在的弹窗使用"ant"的"drawer"组件, 通过[drawerProps](https://www.antdv.com/components/drawer-cn#API)可进一步设置.
