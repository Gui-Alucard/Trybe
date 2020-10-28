import { createStore, combineReducers } from 'redux';
import reducerLogin from '../reducers/reducerLogin';

const rootReducer = combineReducers({
  reducerLogin,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;