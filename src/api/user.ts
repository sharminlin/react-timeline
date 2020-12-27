import users from '../assets/json/users.json'

export interface LoginParams {
  user: string,
  password: string
}

export const login: ApiRequest = ({ user, password }: LoginParams) => {
  return new Promise((resolve, reject) => {
    const userInfo = users.find(u => u.user === user)
    if (!userInfo) {
      reject(`login: user ${user} does not exist`)
    } else if (window.md5(password) !== userInfo?.password) {
      reject('login: Invild password')
    } else {
      resolve(true)
    }
  })
}
