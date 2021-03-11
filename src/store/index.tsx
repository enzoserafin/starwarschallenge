import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';
import { IDataState } from './modules/characterList/types';

export interface IState {
  data: IDataState;
}

const store = createStore(rootReducer);

export default store;
