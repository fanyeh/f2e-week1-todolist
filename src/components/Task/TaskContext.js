import React from 'react';

export const TaskContext = React.createContext();

class TaskProvider extends React.Component {
  render() {
    return (
      <TaskContext.Provider value={this.props.value}>{this.props.children}</TaskContext.Provider>
    );
  }
}
export default TaskProvider;
