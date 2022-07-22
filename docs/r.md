# r
表格数据显示配置

## columns
就是`ant`的`table`组件的`columns`,用来配置表头和字段.




| 字段             | 类型     | 说明                                                                                            |
| ---------------- | -------- | ----------------------------------------------------------------------------------------------- |
| columns          | Object   | 就是`ant`的`table`组件的`columns`, 用来配置表头和字段                                           |
| tableProps       | Object   | 通过其可以直接对`ant`的`table`组件直接配置, 比如`tableProps:{columns:[],dataSource:[]}`         |
| hideRowSelection | Boolean  | 控制是否显示表格每行的 checkbox, 默认为`true`,此时不显示 checkbox                               |
| done             | Function | 是个 Promise 函数, 需要返回`{list:[],total:100}`格式的数据, curd 组件会自动根据这 2 个值来分页. |
