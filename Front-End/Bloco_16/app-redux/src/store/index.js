import { createStore, combineReducers } from 'redux';
import listReducer from '../reducers';

const rootReducer = combineReducers({ listReducer });

const store = createStore(rootReducer);

export default store;

/*
É onde vamos armazenar todos os dados compartilhados
da aplicação e é representado por um objeto JavaScript.
O State é armazenado no Store do Redux.
*/