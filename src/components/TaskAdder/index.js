import React, { Component } from 'react';
import NewTask from '../../containers/NewTask';
import AddButton from './AddButton';

class TaskAdder extends Component {
  state = { showNewTask: false };
  clickHandler = () => {
    this.setState(({ showNewTask }) => ({ showNewTask: !showNewTask }));
  };
  render() {
    return this.state.showNewTask ? (
      <NewTask cancelHandler={this.clickHandler} />
    ) : (
      <AddButton onClick={this.clickHandler}>+ Add Task</AddButton>
    );
  }
}

export default TaskAdder;
