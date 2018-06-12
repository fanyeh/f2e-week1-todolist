import React, { Component } from 'react';
import styled from 'styled-components';
import { fontSize, fontWeight } from '../DesignConfig';
import FilterItem from '../../containers/FilterItem';
import { VisibilityFilters } from '../../actions';

const items = [
  { type: VisibilityFilters.SHOW_ALL, name: 'my tasks' },
  { type: VisibilityFilters.SHOW_ACTIVE, name: 'in progress' },
  { type: VisibilityFilters.SHOW_COMPLETED, name: 'completed' },
];

const StyledNav = styled.nav`
  font-size: ${fontSize.large};
  font-weight: ${fontWeight.medium};
  text-align: center;
  display: inline-flex;
`;

class NavBar extends Component {
  render() {
    return (
      <StyledNav>
        {items.map(item => (
          <FilterItem key={item.type} filter={item.type}>
            {item.name}
          </FilterItem>
        ))}
      </StyledNav>
    );
  }
}

export default NavBar;
