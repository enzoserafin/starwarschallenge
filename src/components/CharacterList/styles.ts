import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Character } from '../../pages/Dashboard';
import { RectButton } from 'react-native-gesture-handler';

export const CharactersFlatlist = styled(
  FlatList as new () => FlatList<Character>,
).attrs({
  contentContainerStyle: {
    paddingTop: 32,
    paddingBottom: 16,
    paddingHorizontal: 24,
  },
})``;

export const CharacterContainer = styled(RectButton)`
  padding: 20px;
  margin-bottom: 16px;
  background: #3e3b47;
  border-radius: 10px;
`;

export const CharacterName = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  color: #f4ede8;
`;

