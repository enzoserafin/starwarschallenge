import React, { useState, useEffect, useCallback } from 'react';
import { ActivityIndicator } from 'react-native';
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
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState<Data | null>(null);
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    api.get(`/people?page=${page}`).then((response) => {

      setCharacters([...characters, ...response.data?.results]);
      setData(response.data);
      setLoading(false);
    });
  }, [page]);

  const loadMore = () => {
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
        keyExtractor={(_characters, index) => index.toString()}
        renderItem={({ item: characters }) => (
          <CharacterContainer onPress={() => handleSelectCharacter(characters.url)}>
            <CharacterName>{characters.name}</CharacterName>
          </CharacterContainer>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
      />
    </Container>
  );
};

export default Dashboard;
