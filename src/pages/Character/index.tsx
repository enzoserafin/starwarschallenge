import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';
import Button from '../../components/Button';
import { Container, Header, HeaderTitle, CharacterInfo, FilmList } from './styles';

interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: Array<Film>;
  species: Array<String>;
  vehicles: Array<String>;
  starships: Array<String>;
  created: string;
  edited: string;
  url: string;
}

export interface Film {
  url: string;
}

interface Planets {}

interface RouteParams {
  characterURL: string;
}

const Character: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as RouteParams;
  const [selectedCharacter, setSelectedCharacter] = useState<string>(params.characterURL);
  const [character, setCharacter] = useState<Character>();

  useEffect(() => {
    axios
      .get(selectedCharacter).then((response) => {
        setCharacter(response.data);
      });
  }, []);

  return (
    <Container>
      <Header>
        <HeaderTitle>
          {character?.name}
        </HeaderTitle>
      </Header>

      <CharacterInfo>Altura: {character?.height}</CharacterInfo>
      <CharacterInfo>Peso: {character?.mass}</CharacterInfo>
      <CharacterInfo>Cor do cabelo: {character?.hair_color}</CharacterInfo>
      <CharacterInfo>Cor da pele: {character?.skin_color}</CharacterInfo>
      <CharacterInfo>Cor dos olhos: {character?.eye_color}</CharacterInfo>
      <CharacterInfo>Ano de nascimento: {character?.eye_color}</CharacterInfo>
      <CharacterInfo>Gênero: {character?.eye_color}</CharacterInfo>
      <CharacterInfo>Planeta Natal: {character?.homeworld}</CharacterInfo>

      <FilmList
        data={character?.films}
        keyExtractor={( film ) => film.url}
        renderItem={({ item: film }) => (
            <CharacterInfo>{film}</CharacterInfo>
        )}
        // onEndReached={loadMore}
        // onEndReachedThreshold={0.09}
      />

      <Button onPress={() => navigation.goBack()} >Voltar</Button>
    </Container>
  );
};

export default Character;
