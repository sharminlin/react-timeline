import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
import { loadState, saveState } from './util'

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(rootReducer, loadState(), composeEnhancers(applyMiddleware(thunk)));

// 页面刷新之前，存储state
window.onbeforeunload = () => {
  const state = store.getState();
  saveState(state);
};

export default store;


