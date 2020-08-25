import { combineReducers } from 'redux'
import { reducer as mainReducer } from '../Layout/Main/store'

export const rootReducer = combineReducers({
  main: mainReducer
})

export declare type RootState = ReturnType<typeof rootReducer>
