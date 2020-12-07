import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FlatList } from 'react-native';
import { Film } from '.';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 16px;
  padding-top: ${getStatusBarHeight() + 16}px;
  background: #28262e;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: #f4ede8;
  font-size: 20px;
  font-family: 'RobotoSlab-Regular';
  line-height: 28px;
`;

export const CharacterInfo = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  color: #f4ede8;
  padding: 8px 16px 8px 16px;
`;

export const CardList = styled.View`
  padding-top: 8px;
  background: #3e3b47;
  border-radius: 10px;
  margin-left: 16px;
  margin-right: 16px;
`;

export const TitleCard = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  color: #f4ede8;
  margin-left: 130px

`;

export const FilmList = styled(
  FlatList as new () => FlatList<Film>,
).attrs({})``;

export const ButtonPadding = styled.View`
  padding: 16px;
`;
