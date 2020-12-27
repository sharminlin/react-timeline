import axios from 'axios'

export const baseUrl = ''

const request = axios.create({
  baseURL: baseUrl
})

request.interceptors.request.use(config => {
  // do something ...
  return config
}, error => {
  console.log(error)
  return Promise.reject(error)
})

request.interceptors.response.use(
  res => res.data,
  err => {
    console.log(err, '网络错误')
    return Promise.reject(err)
  }
)

export default request
