import React, { Component } from 'react';
import styled from 'styled-components';
import Task from './Task';
import { color, fontSize, fontWeight } from './DesignConfig';

const AddButton = styled.button`
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

const Wrapper = styled.div`
  margin: 1.5rem auto;
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
          <Task
            edit={true}
            cancelHandler={this.clickHandler}
            refreshHandler={this.props.refreshHandler}
          />
        ) : (
          <AddButton onClick={this.clickHandler}>+ Add Task</AddButton>
        )}
      </Wrapper>
    );
  }
}

export default TaskAdder;
