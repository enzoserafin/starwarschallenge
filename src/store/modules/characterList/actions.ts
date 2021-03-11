import { ICharacter } from './types'

export function loadMoreItems(character: ICharacter) {
  return {
    type: 'ADD_CHARACTER_TO_LIST',
    payload: {
      character,
    }
  };
}
