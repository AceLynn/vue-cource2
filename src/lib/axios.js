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
    const config = {
      baseUrl: this.baseUrl,
      headers: {},
    };
    return config;
  }
  interceptors(instance, url) {
    instance.interceptors.request.use(
      (config) => {
        // config 请求拦截到的数据
        // 请求成功
        // 添加全局的loading
        // 比如 Spin.show()
        if (Object.keys(this.queue).length > 0) {
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

    instance.interceptors.response.use(
      (res) => {
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
  request(options) {
    // 创建axios实例
    const instance = axios.create();
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance, options.url);
    return instance(options);
  }
}

export default HttpRequest;
