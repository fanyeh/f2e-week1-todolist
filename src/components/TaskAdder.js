import React, { Component } from 'react';
import styled from 'styled-components';
import { color, fontSize, fontWeight } from './DesignConfig';

const StyledButton = styled.button`
  width: 38.75rem;
  height: 4.06rem;
  background-color: ${color.white};
  font: ${fontWeight.light} ${fontSize.large} 'Roboto';
  text-indent: 2rem;
  border: 2px solid ${color.gray};
  border-radius: 5px;
  text-align: left;
  cursor: pointer;
  outline: none;
  color: ${color.gray};
`;

class TaskAdder extends Component {
  render() {
    return <StyledButton onClick={this.props.clickHandler}>+ Add Task</StyledButton>;
  }
}

export default TaskAdder;
