import styled from '@emotion/native';
import {Dimensions} from 'react-native';

export const HeaderBar = styled.View`
  display: flex;
  background-color: #ffff;
  align-items: center;
  z-index: 10;
  padding: 2px 18px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Input = styled.TextInput`
  font-size: 16px;
  color: #000;
  height: 30px;
  margin: 10px 0px;
  background-color: #ffff;

  padding: 0px 10px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-width: 1.5px;
  height: 40px;
  border-radius: 1px;
  width: 90%;

  border-color: #e5e5e5;
  background-color: '#fff';
`;

export const SearchIcon = styled.Image`
  width: 20px;
  height: 25px;
`;

export const HeaderText = styled.Text`
  color: #000;
  margin-top: 10px;
  font-size: 15px;
  margin-left: 20px;
`;

export const HeaderLabel = styled.Text`
  font-size: 9px;
  font-family: 'PlusJakartaSans-Regular';
  color: grey;
  width: 100%;
  margin-left: 20px;
`;

export const HeaderContainer = styled.View`
  background-color: #bfbfbf;
  height: 40px;
  border-bottom-width: 1px;
`;

export const ItemList = styled.View`
  display: flex;
  width: ${Dimensions.get('screen').width / 4};

  flex-wrap: nowrap;
  margin: 8px 0px;
`;

export const Description = styled.View`
  display: flex;
  flex-direction: column;
  background-color: #fff;

  flex-wrap: wrap;
  justify-content: center;
  word-break: break-all;
`;

export const ImageTrack = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 8px;
`;

export const TitleTrack = styled.Text`
  font-size: 16px;
  color: #fff;
  width: 100%;
  margin-left: 10px;
`;
