import React from 'react';
import Wrapper from './Wrapper';

const NavItem = ({ onClick, selected, children }) => {
  return (
    <Wrapper selected={selected} onClick={onClick}>
      {children}
    </Wrapper>
  );
};

export default NavItem;
