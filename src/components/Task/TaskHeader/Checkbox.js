import React, { Component } from 'react';
import styled from 'styled-components';
import { color } from '../../DesignConfig';
class Checkbox extends Component {
  render() {
    const { id, handler, checked } = this.props;
    return (
      <React.Fragment>
        <StyledCheckbox type="checkbox" checked={checked} onChange={handler} id={id} />
        <StyledCheckmark htmlFor={id} />
      </React.Fragment>
    );
  }
}

export default Checkbox;

const StyledCheckmark = styled.label`
  position: relative;
  height: 1.5rem;
  width: 1.5rem;
  background-color: ${color.white};
  border-radius: 3px;
  margin-left: 2rem;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    display: none;
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;
const StyledCheckbox = styled.input`
  position: absolute;
  display: none;
  cursor: pointer;
  margin-left: 2rem;
  margin-top: 1.5rem;

  &:checked ~ ${StyledCheckmark} {
    background-color: ${color.blue};
  }
  &:checked ~ ${StyledCheckmark}:after {
    display: block;
  }
`;
