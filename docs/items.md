# items

表单结构, 值为函数, 函数返回值为数组, 数组中的每一个对象代表一个表单组件.

```typescript
{
  items: [
    { is: 'a-input', name: 'userName', label: '账号', rules: [{ required: true, message: '必填项' }] },
    {
      is: 'a-select',
      name: 'positionId',
      label: '职位',
      props: {
        options: [
          { label: '运营总监', value: 1 },
          { label: '营销总监', value: 2 },
          { label: '财务专员', value: 3 },
          { label: '产品专员', value: 4 },
        ],
      },
    },
  ];
}
```

生成如下表单:

![image](https://user-images.githubusercontent.com/8264787/181456752-e7f3b0b1-e926-4c59-af02-ddc7f9199638.png)

## 字段

- [is, 插入组件](#is)
- [name, 表单项对应键值](#name)
- [label, 表单项前面的标题](#label)
- [props, 表单项内组件的属性](#props)
- [rules, 验证规则](#rules)

### is

**必填项**, 值可以是字符串,比如`a-input`对应 ant 组件的 input,如果是`input`, 那么对应原生 input 元素.

其还可以是组件对象, 其实在`v-curd`组件内部, 这个`is`就是对应 vue 中[component 组件的 is](https://staging-cn.vuejs.org/api/built-in-special-elements.html#component).

```typescript
import YourComponent from './YourComponent.vue';
{
  items: [
    { is: 'a-input', name: 'userName', label: '账号' },
    { is: 'input', name: 'nickName', label: '昵称' },
    { is: YourComponent, name: 'nickName', label: 'xxx' },
  ];
}
```

### name

**必填项**, 表单项对应键值,最后点击提交时候会把组件`value`属性的值和`name`形成键值对, 供提交表单.

```typescript
{
  items: [
    { is: 'a-input', name: 'userName', label: '账号'},
  ],

  done(formData){
    console.log(formData); // {userName:'你的输入'}
  }
}
```

### label

表单项前面的标题.

```typescript
{
  items: [{ is: 'a-input', name: 'userName', label: '账号' }];
}
```

效果:
![image](https://user-images.githubusercontent.com/8264787/181462757-d7c246e5-4596-441e-b42f-db7f9c2cc278.png)

### props

其值会传给`is`对应的组件, 比如`a-select`组件会接收`options`的数据:

```typescript
{
  items: [
    {
      is: 'a-select',
      name: 'positionId',
      label: '职位',
      props: {
        options: [
          { label: '运营总监', value: 1 },
          { label: '营销总监', value: 2 },
          { label: '财务专员', value: 3 },
          { label: '产品专员', value: 4 },
        ],
      },
    },
  ];
}
```

### rules

验证规则, 就是"ant"组件中`formItem`组件的[rules](https://www.antdv.com/components/form-cn#%E6%A0%A1%E9%AA%8C%E8%A7%84%E5%88%99)字段

```typescript
{
  items: [{ is: 'a-input', name: 'userName', label: '账号', rules: [{ required: true, message: '必填项' }] }];
}
```

[🚀返回主页](../README.md)