import { Reducer } from 'redux';
import produce from 'immer';
import { ICharacter, IDataState } from './types';

const INITAL_STATE: IDataState = {
  count: 0,
  next: '',
  previous: '',
  results: []
}

const characterList: Reducer<IDataState> = (state = INITAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case 'LOAD_MORE_DATA': {
        const { character } = action.payload;

        // draft.results.push({
        //   character
        // });
      }
      default: {
        return draft;
      }
    }
  });
}

export default characterList;
