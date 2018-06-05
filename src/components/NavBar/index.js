import React, { Component } from 'react';
import styled from 'styled-components';
import NavItem from './NavItem';
import { fontSize, fontWeight } from '../DesignConfig';

const items = ['my tasks', 'in progress', 'completed'];

const StyledNav = styled.nav`
  font-size: ${fontSize.large};
  font-weight: ${fontWeight.medium};
  text-align: center;
  display: inline-flex;
`;

class NavBar extends Component {
  state = { selectedItem: items[0] };

  clickHandler = item => {
    this.setState({ selectedItem: item });
  };
  render() {
    return (
      <StyledNav>
        {items.map(item => (
          <NavItem
            name={item}
            key={item}
            clickHandler={this.clickHandler}
            isSelected={this.state.selectedItem === item}
          />
        ))}
      </StyledNav>
    );
  }
}

export default NavBar;
