import React, { Component } from 'react';
import styled from 'styled-components';
import NewTask from '../containers/NewTask';
import { color, fontSize, fontWeight } from './DesignConfig';

const Wrapper = styled.div`
  margin: 1.5rem auto;
`;

const AddButton = styled.button`
  width: 100%;
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
  state = { showNewTask: false };
  clickHandler = () => {
    this.setState(({ showNewTask }) => ({ showNewTask: !showNewTask }));
  };
  render() {
    return (
      <Wrapper>
        {this.state.showNewTask ? (
          <NewTask cancelHandler={this.clickHandler} />
        ) : (
          <AddButton onClick={this.clickHandler}>+ Add Task</AddButton>
        )}
      </Wrapper>
    );
  }
}

export default TaskAdder;
