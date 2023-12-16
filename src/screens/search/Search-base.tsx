import React, {useContext} from 'react';
import styled from '@emotion/native';
import AppHeader from '../../../src/components/screens/search/AppBar/AppHeader';

import {NavigationContext} from '@react-navigation/native';

const SearchInput = styled.View`
  background-color: #fff;
  border-radius: 8px;
  color: #000;
`;

const PlaceHolder = styled.Text`
  color: #888;
`;

export const InputContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-width: 1.5px;
  height: 40px;
  margin-top: 80%;
  border-radius: 1px;
  width: 80%;
  left: 10%;
  algin-self: center;
  border-color: #e5e5e5;
  background-color: '#fff';
`;
const SafeArea = styled.SafeAreaView`
  background-color: #fff;
  height: 100%;
`;

const AppBar = styled.View`
  background-color: #fff;
`;

export const SearchIcon = styled.Image`
  width: 20px;
  left: 250%;
  height: 25px;
`;

const Search = () => {
  const navigation = useContext(NavigationContext);

  return (
    <SafeArea>
      <AppBar>
        <AppHeader title={'Spotify Artist Search'} />
        <InputContainer onPress={() => navigation?.navigate('Searching')}>
          <SearchInput>
            <PlaceHolder>Search</PlaceHolder>
          </SearchInput>
          <SearchIcon source={require('../../assets/images/search-icon.png')} />
        </InputContainer>
      </AppBar>
    </SafeArea>
  );
};

export default Search;
