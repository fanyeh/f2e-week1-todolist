import React, { Component } from 'react';
import styled from 'styled-components';
import TaskItemContainer from './TaskItemContainer';
import { color, fontSize } from '../../DesignConfig';
import { TaskContext } from '../TaskContext';

const StyledInput = styled.input`
  width: 10.13rem;
  height: 2.19rem;
  margin-left: 1.5rem;
  margin-top: 0.5rem;
  font-size: ${fontSize.regular};
  padding-left: 1rem;
  border: none;
  border-radius: 4px;
  &::placeholder {
    color: ${color.gray};
  }
  &:last-of-type {
    margin-left: 0.5rem;
  }
`;

class TaskItemDeadLine extends Component {
  render() {
    return (
      <TaskItemContainer type="deadline">
        <TaskContext.Consumer>
          {value => [
            <StyledInput
              type="text"
              placeholder="yyyy/mm/dd"
              innerRef={value.dateRef}
              key="taskDate"
            />,
            <StyledInput type="text" placeholder="hh:mm" innerRef={value.timeRef} key="taskTime" />,
          ]}
        </TaskContext.Consumer>
      </TaskItemContainer>
    );
  }
}

export default TaskItemDeadLine;
