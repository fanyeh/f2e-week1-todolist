import React, { Component } from 'react';
import styled from 'styled-components';
import { color } from '../DesignConfig';

const Wrapper = styled.div`
  position: relative;
  width: 13.75rem;
  line-height: 1.75rem;
  text-transform: capitalize;
  padding: 1.5rem 0;
  color: ${props => (props.selected ? color.white : color.black)};
  cursor: pointer;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 10rem;
    height: 0.31rem;
    background-color: ${color.darkBlue};
    left: calc(3.75rem / 2);
    opacity: ${props => (props.selected ? 1 : 0)};
  }
`;

class NavItem extends Component {
  render() {
    const { onClick, selected, children } = this.props;
    return (
      <Wrapper selected={selected} onClick={onClick}>
        {children}
      </Wrapper>
    );
  }
}

export default NavItem;
