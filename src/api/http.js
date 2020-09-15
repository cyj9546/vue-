import axios from 'axios';
import qs from 'qs';

// function loginClick() {
//   this.props.history.push('/login')
// }
//http request 拦截器
axios.interceptors.request.use(
  config => {
    config.data = qs.stringify(config.data);
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
        // 这里后端用的是jwt 自行改
    if (localStorage.getItem('Authorization')) {
      config.headers.Authorization = "Bearer " + localStorage.getItem('Authorization')
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//http response 拦截器
axios.interceptors.response.use(

  // var that = this
  response => {
    console.log(response)
    if (response.headers.authorization) {
      let Authorization= response.headers.authorization
      localStorage.setItem("Authorization", Authorization.slice(7))
    }
    if (response.data.code == 2) {
      localStorage.removeItem('Authorization')
      window.location.hash = '/login';
    }
    return response;
  },
  error => {
    return Promise.reject(error)
  }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    // console.log("data", qs.stringify(data));
    axios.post(url, (data))
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

