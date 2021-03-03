import { useSelector, useDispatch } from 'react-redux'
import { changeIsLoginAction } from '../../store/modules/user.store'

type UserLogin = () => [boolean, (value: boolean) => void]

export const useLogin: UserLogin = () => {
  const isLogin: boolean = useSelector((state: RootState) => state.user.isLogin)
  const dispatch = useDispatch()
  const setLogin = (value: boolean) => {
    dispatch(changeIsLoginAction(value))
  }
  return [isLogin, setLogin]
}
