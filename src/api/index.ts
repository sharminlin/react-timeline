import { mock } from './mock'
import { login, LoginParams } from './user'

export const loginRequest = (data: LoginParams): any => mock(login)(data)
