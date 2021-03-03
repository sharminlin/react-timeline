import { combineReducers } from 'redux'
import { reducer as userReducer } from './modules/user.store'

export const rootReducer = combineReducers({
  user: userReducer
})

declare global {
  type RootState = ReturnType<typeof rootReducer>
}
