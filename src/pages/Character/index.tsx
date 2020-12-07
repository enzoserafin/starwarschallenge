import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';
import Button from '../../components/Button';
import { Container, Header, HeaderTitle, CharacterInfo, CardList, TitleCard, FilmList, ButtonPadding } from './styles';

interface Data {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: Array<URL>;
  species: Array<String>;
  vehicles: Array<String>;
  starships: Array<String>;
  created: string;
  edited: string;
  url: string;
}

interface URL {
  url: string;
}

export interface Film {
  title: string;
}

interface Planet {
  name: string;
}

interface RouteParams {
  characterURL: string;
}

const Character: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as RouteParams;
  const [selectedCharacter, setSelectedCharacter] = useState<string>(params.characterURL);
  const [data, setData] = useState<Data>();
  const [urlFilms, setURLFilms] = useState<URL[]>();
  const [films, setFilms] = useState<Film[]>([]);
  const [urlPlanet, setURLPlanet] = useState<URL>();
  const [planet, setPlanet] = useState<Planet>();

  useEffect(() => {
    axios.get(selectedCharacter).then((response) => {
      setData(response.data);
      setURLFilms(response.data.films);
      setURLPlanet(response.data.homeworld);
    });
  }, []);

  useEffect(() => {
    if (urlPlanet === undefined) {
      return;
    } else {
      axios.get(urlPlanet.toString()).then((response) => {
        setPlanet(response.data);
      });
    }
  }, [urlPlanet]);

  useEffect(() => {
    if (urlFilms === undefined) {
      return;
    } else {
      urlFilms.forEach((item) => {
        axios.get(item.toString()).then((response) => {
          setFilms((prevFilm) => ([...prevFilm, response.data]));
        });
      })
    }
  }, [urlFilms]);

  return (

      <Container>
        <Header>
          <HeaderTitle>
            {data?.name}
          </HeaderTitle>
        </Header>

        <CharacterInfo>Altura: {data?.height}</CharacterInfo>
        <CharacterInfo>Peso: {data?.mass}</CharacterInfo>
        <CharacterInfo>Cor do cabelo: {data?.hair_color}</CharacterInfo>
        <CharacterInfo>Cor da pele: {data?.skin_color}</CharacterInfo>
        <CharacterInfo>Cor dos olhos: {data?.eye_color}</CharacterInfo>
        <CharacterInfo>Ano de nascimento: {data?.birth_year}</CharacterInfo>
        <CharacterInfo>Gênero: {data?.gender}</CharacterInfo>
        <CharacterInfo>Planeta Natal: {planet?.name}</CharacterInfo>

        <CardList>
          <TitleCard>Lista de Filmes</TitleCard>

          <FilmList
            data={films}
            keyExtractor={(film_, index) => index.toString()}
            renderItem={({ item: film }) => (
              <CharacterInfo>{film.title}</CharacterInfo>
            )}
            scrollEnabled={false}
          />
        </CardList>

        <ButtonPadding>
          <Button onPress={() => navigation.goBack()} >Voltar</Button>
        </ButtonPadding>
      </Container>

  );
};

export default Character;
