import * as users from '../assets/json/users.json'

interface LoginParams {
  user: string,
  password: string
}

export const login: (data: LoginParams) => Promise<boolean | string> = ({ user, password }: LoginParams) => {
  return new Promise((resolve, reject) => {
    const userInfo = users.find(u => u.user === user)
    if (!userInfo) {
      reject(`login: user ${user} does not exist`)
    } else if (md5(password) !== userInfo?.password) {
      reject('login: Invild password')
    } else {
      resolve(true)
    }
  })
}
