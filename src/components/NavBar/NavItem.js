import React, { Component } from 'react';
import styled from 'styled-components';
import { color } from '../DesignConfig';

const Wrapper = styled.div`
  position: relative;
  width: 13.75rem;
  line-height: 1.75rem;
  text-transform: capitalize;
  padding: 1.5rem 0;
  color: ${props => (props.isSelected ? color.white : color.black)};
  cursor: pointer;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 10rem;
    height: 0.31rem;
    background-color: ${color.darkBlue};
    left: calc(3.75rem / 2);
    opacity: ${props => (props.isSelected ? 1 : 0)};
  }
`;

class NavItem extends Component {
  render() {
    const { clickHandler, isSelected } = this.props;
    return (
      <Wrapper isSelected={isSelected} onClick={() => clickHandler(this.props.name)}>
        {this.props.name}
      </Wrapper>
    );
  }
}

export default NavItem;
