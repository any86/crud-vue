# r

表格数据显示配置, 其中"columns / done"为**必填项**.

## columns

**必填项**, 就是[ant 中 table 组件的 columns 字段](https://www.antdv.com/components/table-cn#Column),用来配置列.

## done

**必填项**, 关联表格接口数据的函数, **主要用来格式化返回值为特定格式**.

```typescript
{
    async done(params){
        // 搜索条件, 包含分页信息
        const { data } = await http('/user', { params });
        return {list:data.xxList, total:data.xxTotal};
    }
}
```

**⚡特别注意**
1. `done`函数的返回值必须是一个"**promise**", 也可用`async`, 其返回值也是"**promise**", 这样`v-curd`才能等数据加载完毕才显示表格.
2. 函数的参数包含了搜索条件(含分页信息), 需要传给接口.
## conditionItems

构造搜索条件表单,实际和"新增/编辑"中的表单是一样的结构. [items 详细说明](./items.md)

## before

**表格加载前触发**的钩子函数, 常用来初始化[items](./items.md)中组件可能会用的数据.

```typescript
// select组件的选项数据.
const options = [];
const r = defineR({
  // 表格加载前, 获取select组件的选项
  async before() {
    const { data } = await axios.get('/xx');
    options = data;
  },

  // options用来渲染select组件
  conditionItems: [{ name: 'category', is: 'a-input', props: [{ options }] }],
});
```

## hideRowSelection

控制每行前的是否有 checkbox, 默认为`true`.

![image](https://user-images.githubusercontent.com/8264787/181663194-efb6576b-da64-4613-b5a2-099fd7ba88f5.png)

如果开启"checkbox", 那么当选中后, 界面会出现"批量删除"按钮.
![image](https://user-images.githubusercontent.com/8264787/181664857-ad734243-98b4-4729-98c7-81bc3d474682.png)

## getOne()
当"r"中存在"getOne"函数,那么表格的每一行会显示"查看"按钮.

![image](https://user-images.githubusercontent.com/8264787/181665915-7df25a9b-9f29-45c2-8309-53808f2ff935.png)

点击"查看"后会执行`getOne`函数, `getOne`函数的返回值会被放到名为"one"的插槽(slot)中.
```html
<v-curd>
    <template #one="oneData">
        {{oneData}}
    </template>
</v-curd>
```
**⚡特别注意**
1. `getOne`函数的返回值必须是一个"**promise**", 也可用`async`, 其返回值也是"**promise**".
2. 函数的参数是当前行的数据.

```typescript
{
  async getOne(row) {
    const { data } = await http.get('/user/' + row[primaryKey]);
    // 返回的是一个对象.
    return data;
  },
}
```

## tableProps
直接操作ant的table组件, 如果有更进一步的需求, 可以通过这个参数完整控制[table组件](https://www.antdv.com/components/table-cn#Table).

## drawerProps
"详情"是通过ant的"drawer"组件展现的, 如果对"drawer"有进一步的设置, 可以通过[drawerProps属性](https://www.antdv.com/components/drawer-cn#API)完整控制.