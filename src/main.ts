import App from '@/App.vue'
import { createApp } from 'vue'
// 加载UI库, 引入后组件会被全局注册, 我们在任意组件内都可以直接使用
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'
import '@5a.css/reset';
import '@5a.css/helpers';
// import '@/assets/iconfont/iconfont.css'

import * as a from './lib'
console.log(a);
const app = createApp(App);
// 加载UI
app.use(Antd);
app.mount('#app');
