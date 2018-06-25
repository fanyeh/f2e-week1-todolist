import React from 'react';
import Wrapper from './Wrapper';
import FilterItem from '../../containers/FilterItem';
import { VisibilityFilters } from '../../store/actions';

const items = [
  { type: VisibilityFilters.SHOW_ALL, name: 'my tasks' },
  { type: VisibilityFilters.SHOW_ACTIVE, name: 'in progress' },
  { type: VisibilityFilters.SHOW_COMPLETED, name: 'completed' },
];

const NavBar = () => {
  return (
    <Wrapper>
      {items.map(item => (
        <FilterItem key={item.type} filter={item.type}>
          {item.name}
        </FilterItem>
      ))}
    </Wrapper>
  );
};

export default NavBar;
