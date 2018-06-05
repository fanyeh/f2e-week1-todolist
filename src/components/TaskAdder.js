import React, { Component } from 'react';
import styled from 'styled-components';
import { color, fontSize, fontWeight } from './DesignConfig';

const inputFont = () => {
  return `${fontWeight.light} ${fontSize.large} Roboto`;
};

const StyledButton = styled.button`
  width: 38.75rem;
  height: 4.06rem;
  background-color: ${color.white};
  margin: 1.5rem auto;
  font: ${inputFont()};
  text-indent: 2rem;
  border: 2px solid ${color.gray};
  border-radius: 5px;
  text-align: left;
  cursor: pointer;
  color: ${color.gray};
`;

class TaskAdder extends Component {
  render() {
    return <StyledButton>+ Add Task</StyledButton>;
  }
}

export default TaskAdder;
