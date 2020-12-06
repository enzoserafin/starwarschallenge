import React, { useState, useEffect, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import {
  Container,
  Header,
  HeaderTitle,
  CharactersList,
  CharacterContainer,
  CharacterName,
} from './styles';


interface Data {
  count: number;
  next: string;
  previous: string;
  results: Array<Character>;
}

export interface Character {
  name: string;
  url: string;
}

const Dashboard: React.FC = () => {
  const navigation = useNavigation();
  const [page, setPage] = useState(1);
  const [data, setData] = useState<Data | null>(null);
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    api.get(`/people?page=${page}`).then((response) => {

      setData(response.data);
      setCharacters([...characters, ...data?.results]);
    });
  }, [page]);

  const loadMore = () => {
    // let length = data?.length;
    const next = data?.next;
    if (next === null) return;
    let pageNumber = page + 1;
    setPage(pageNumber);

  };

  const handleSelectCharacter = useCallback(
    (characterURL: string) => {
      navigation.navigate('Character', { characterURL });
    },
    [navigation],
  );

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Escolha um personagem
        </HeaderTitle>
      </Header>

      <CharactersList
        data={characters}
        keyExtractor={(characters) => characters.url}
        renderItem={({ item: characters }) => (
          <CharacterContainer onPress={() => handleSelectCharacter(characters.url)}>
            <CharacterName>{characters.name}</CharacterName>
          </CharacterContainer>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.09}
      />
    </Container>
  );
};

export default Dashboard;
