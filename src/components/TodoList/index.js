import React, { Component } from 'react';
import VisibleTask from '../../containers/VisibleTask';
import Footer from './Footer';

class TodoList extends Component {
  tasksLeft = () => {
    return this.props.todos.filter(item => {
      return !item.complete;
    }).length;
  };

  render() {
    const { todos } = this.props;
    return (
      <div>
        {todos.map(todo => <VisibleTask item={todo} key={todo.id} />)}
        <Footer>{`${this.tasksLeft()} tasks left`}</Footer>
      </div>
    );
  }
}

export default TodoList;
