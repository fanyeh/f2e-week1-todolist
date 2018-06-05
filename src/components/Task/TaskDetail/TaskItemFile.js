import React, { Component } from 'react';
import styled from 'styled-components';
import TaskItemContainer from './TaskItemContainer';
import { color, fontSize } from '../../DesignConfig';

const StyledButton = styled.button`
  background-color: ${color.gray};
  width: 2rem;
  height: 2rem;
  margin-top: 0.5rem;
  margin-left: 1.5rem;
  border: none;
  border-radius: 2px;
  color: white;
  font-size: ${fontSize.large};
`;

class TaskItemFile extends Component {
  render() {
    return (
      <TaskItemContainer type="file">
        <StyledButton>+</StyledButton>
      </TaskItemContainer>
    );
  }
}

export default TaskItemFile;
