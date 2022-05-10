import axios from 'axios';
import {Message, MessageBox} from 'element-ui';
import router from '../router';
import url from './url';
import { getToken } from '@/utils/auth'

/** ==环境地址== **/
const baseURL = process.env.NODE_ENV === 'development' ? url.baseUrl : url.baseUrl;

const service = axios.create({
    baseURL: baseURL,
    timeout: 30000,
    // headers: {'Authorization': 'foobar'}
});

// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // 1.根据请求hasToken判断是否增加token
    if(config.hasToken&&getToken()){
        config.headers.common['Authorization'] = getToken()
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if(response.status===200){
        const data = response.data;
        return data;
    }
    
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default service