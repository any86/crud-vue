# 更新日志
## 新增功能(2项)
r上增加drawerProps
增加modalProps和drawerProps
## 功能重构(1项)
删除shared数据的逻辑
## 功能优化(5项)
导出VForm组件
树形默认展开低一层
如果u中没有before, 那么表单的默认值从table的row中取
精简表单默认值逻辑
如果done的返回值没有msg内容, 那么不做UI反馈
## 修复Bug(4项)
修复demo中错误的语法
getDefaultValue和before合成一个函数
用老的方式定义props,保证d.ts能正确识别props的类型
暂时规避使用pnpm, https://github.com/qmhc/vite-plugin-dts/issues/84