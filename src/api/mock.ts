
export const mock = (request: ApiRequest) => (data: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      request(data).then((res: any) => {
        resolve({
          code: 200,
          data: res,
          msg: ''
        })
      }, (error: any) => {
        resolve({
          code: -1,
          data: null,
          msg: error
        })
      })
    }, 300)
  })
}
