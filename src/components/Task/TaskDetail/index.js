import React, { Component } from 'react';
import styled from 'styled-components';
import { color, fontSize } from '../../DesignConfig';
import TaskItemDeadline from './TaskItemDeadline';
import TaskItemComment from './TaskItemComment';
import TaskItemFile from './TaskItemFile';

const Wrapper = styled.div`
  width: 100%;
  height: 27.69rem;
  background-color: ${color.lightGray};
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
`;

const ButtonGroup = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const StyledButton = styled.button`
  background-color: ${props => (props.add ? color.blue : color.white)};
  color: ${props => (props.add ? color.white : color.red)};
  font-size: ${fontSize.large};
  text-align: center;
  flex-grow: 1;
  border: none;
  height: 3.75rem;
  outline: none;
  cursor: pointer;
  & > span {
    padding: 0 0.5rem;
    font-size: 2rem;
  }
`;

class TaskDetail extends Component {
  clickHandler = () => {
    const { updateHandler, addHandler, isUpdate } = this.props;
    if (isUpdate) {
      updateHandler();
    } else {
      addHandler();
    }
  };
  render() {
    return (
      <Wrapper>
        <TaskItemDeadline />
        <TaskItemFile />
        <TaskItemComment />
        <ButtonGroup>
          <StyledButton onClick={this.props.cancelHandler}>
            <span>x</span> Cancel
          </StyledButton>
          <StyledButton add onClick={this.clickHandler}>
            <span>+</span> {this.props.isUpdate ? 'Save' : 'Add Task'}
          </StyledButton>
        </ButtonGroup>
      </Wrapper>
    );
  }
}

export default TaskDetail;
