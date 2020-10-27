import { createStore, combineReducers } from 'redux';
import reducerFormResult from '../reducers';

const rootReducer = combineReducers({
  reducerFormResult,
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;