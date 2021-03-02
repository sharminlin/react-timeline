import { combineReducers } from 'redux'
import { reducer as mainReducer } from '../Layout/Main/store'
import { reducer as userReducer } from './modules/user.store'

export const rootReducer = combineReducers({
  main: mainReducer,
  user: userReducer
})

export declare type RootState = ReturnType<typeof rootReducer>
