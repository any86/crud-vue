import { message } from 'ant-design-vue';
import axios from 'axios';
const http = axios.create({
    // 配置
    baseURL: import.meta.env.VITE_API_BASE_URL,
});


// let timeId: number;
http.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    // clearTimeout(timeId);
    // timeId = window.setTimeout(() => {
        message.error(`网络故障(${error.response.status}), 请重试`);
    // }, 200)
    return Promise.reject(error);
});
export default http;

