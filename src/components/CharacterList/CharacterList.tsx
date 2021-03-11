import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ICharacter, IDataState } from '../../store/modules/characterList/types';
import api from '../../services/api'
import { CharactersFlatlist, CharacterContainer, CharacterName } from './styles';
import { loadMoreItems } from '../../store/modules/characterList/actions';

const CharacterList: React.FC = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState<IDataState[]>([]);

  useEffect(() => {
    api.get(`people`).then((response) => {
      setData(response.data);
    });
  }, []);

  const loadMore = useCallback((character: ICharacter) => {
    dispatch(loadMoreItems(character))
  }, [dispatch]);

  return (
    <CharacterName>{data}</CharacterName>
    // <CharactersFlatlist
    //   data={data.map(item => (item.results))}
    //   keyExtractor={(_characters, index) => index.toString()}
    //   renderItem={({ item: characters }) => (
    //     <CharacterContainer onPress={() => {/*handleSelectCharacter(characters.url)*/ }}>
    //       <CharacterName>{characters.name}</CharacterName>
    //     </CharacterContainer>
    //   )}
    // // onEndReached={loadMore}
    // // onEndReachedThreshold={0.1}
    // />
  );
}


export default CharacterList;
