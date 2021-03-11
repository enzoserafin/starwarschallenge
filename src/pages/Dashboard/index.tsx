import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Header,
  HeaderTitle,
} from './styles';
import CharacterList from '../../components/CharacterList/CharacterList'

const Dashboard: React.FC = () => {
  const navigation = useNavigation();

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

      <CharacterList/>

    </Container>
  );
};

export default Dashboard;
