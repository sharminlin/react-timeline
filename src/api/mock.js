import { rejects } from "assert"
import { resolve } from "dns"

export const mock = (request) => (data) => {
  return request(data).then((res) => {
    resolve({
      code: 200,
      data: res,
      msg: '登录成功'
    })
  }, (res) => {
    resolve({
      code: -1,
      data: null,
      msg: res
    })
  })
}
