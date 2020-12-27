import { mock } from './mock'
import { login, LoginParams } from './user'

export const loginRequest = (data: LoginParams): Promise<ResponseBody> => mock(login)(data)
