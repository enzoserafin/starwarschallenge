
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Character } from '.';

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

export const CharactersList = styled(
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



