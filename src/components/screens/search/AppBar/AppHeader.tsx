import React, {FC, useContext} from 'react';
import {HeaderContainer, HeaderText} from '../styled/styled';

type Props = {
  title: (key: string) => void;
};

const AppHeader: FC<Props> = ({title}) => {
  return (
    <HeaderContainer>
      <HeaderText>{title}</HeaderText>
    </HeaderContainer>
  );
};

export default AppHeader;
