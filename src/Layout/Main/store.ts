import { produce } from 'immer'
import { AnyAction } from 'redux'
import { MainState } from './store.d'

/**
 * type
 * action
 * effect
 * reducer
 */

const SET_FIRST_ENTRY = 'main/SET_FIRST_ENTRY'

export const changeFirstEntryAction = (data: boolean) => ({ type: SET_FIRST_ENTRY, data })

const defaultState: MainState = {
  firstEntry: true, // 第一次进入
}

export const reducer = produce((draft: MainState, {type, data}: AnyAction) => {
  switch(type) {
    case SET_FIRST_ENTRY:
      draft.firstEntry = data
      break;
    default:
      break;
  }
}, defaultState)
