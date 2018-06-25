import React from 'react';
import Wrapper from './Wrapper';
import Icon from './Icon';
import Title from './Title';
import classNames from 'classnames';

const ItemContainer = ({ name, icon, children }) => {
  return (
    <Wrapper>
      <Icon className={classNames('far', icon)} />
      <Title>{name}</Title>
      {children}
    </Wrapper>
  );
};

export default ItemContainer;
