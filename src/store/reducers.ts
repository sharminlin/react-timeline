import { combineReducers } from 'redux'
import { reducer as userReducer } from './modules/user.store'

export const rootReducer = combineReducers({
  user: userReducer
})

export type RootState = ReturnType<typeof rootReducer>
