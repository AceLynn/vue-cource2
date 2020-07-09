import axios from "axios";
import { baseURL } from "@/config";

class HttpRequest {
  constructor(baseUrl = baseURL) {
    this.baseUrl = baseUrl;
    // 把每次所有的请求放在队列里
    // 比如全局loading，会建立多个loading，逐个执行，最后清空队列
    this.queue = {};
  }

  getInsideConfig() {
    // 全局设置
    const config = {
      baseUrl: this.baseUrl,
      headers: {},
    };
    return config;
  }
  interceptors(instance, url) {
    // 请求拦截器
    instance.interceptors.request.use(
      (config) => {
        // config 请求拦截到的数据
        // 拦截请求开始前的操作，可以统一添加token等代码，便于维护
        // 请求成功
        // 添加全局的loading
        // 比如 iview UI库中的 Spin.show()
        // console.log(config);
        if (!Object.keys(this.queue).length > 0) {
          // 如果没有请求，加loading
          // Spin.show()
        }
        this.queue[url] = true;
        return config;
      },
      (err) => {
        // 请求失败
        return Promise.reject(err);
      }
    );

    // 响应拦截器
    instance.interceptors.response.use(
      (res) => {
        // 服务端返回的数据
        // 可以进行统一过滤
        console.log(res);
        delete this.queue[url];
        const { data, status } = res;
        return { data, status };
      },
      (err) => {
        delete this.queue[url];
        return Promise.reject(err);
      }
    );
  }
  // 用于创建请求
  request(options) {
    // 创建axios实例
    const instance = axios.create();
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance, options.url);
    return instance(options);
  }
}

export default HttpRequest;
