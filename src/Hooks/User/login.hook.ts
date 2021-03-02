import { useDispatch } from 'react-redux'
import { changeIsLoginAction } from '../../store/modules/user.store'

export const useLogin = () => {
  const dispatch = useDispatch()

  const setLogin = (value: boolean) => {
    dispatch(changeIsLoginAction(value))
  }
  return { setLogin }
}
