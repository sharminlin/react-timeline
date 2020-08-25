import { RootState } from './reducers'

export const saveState = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem('state', serializedState);
  } catch (err) {
    console.error(err)
  }
}

export const loadState = () => {
  try {
      const serializedState = sessionStorage.getItem('state');
      return serializedState ? JSON.parse(serializedState) : undefined
  } catch (err) {
    // ... 错误处理
    return undefined;
  }
}