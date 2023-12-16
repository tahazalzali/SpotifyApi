import React, {FC} from 'react';
import {HeaderBar, Input, InputContainer, SearchIcon} from '../styled/styled';

type Props = {
  handleSearch: (key: string) => void;
};

const AppBar: FC<Props> = ({handleSearch}) => {
  return (
    <HeaderBar>
      <InputContainer>
        <Input
          autoFocus={true}
          placeholder="Search for an artist..."
          placeholderTextColor="#000"
          onChangeText={handleSearch}
        />
        <SearchIcon
          source={require('../../../../assets/images/search-icon.png')}
        />
      </InputContainer>
    </HeaderBar>
  );
};

export default AppBar;
