import React, { Component } from 'react';
import styled from 'styled-components';
import VisibleTask from '../containers/VisibleTask';
import { color, fontSize } from '../components/DesignConfig';

const StyledFooter = styled.footer`
  text-align: left;
  font-size: ${fontSize.large};
  font-style: italic;
  color: ${color.gray};
  padding: 0.5rem 0;
`;

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
        <StyledFooter>{`${this.tasksLeft()} tasks left`}</StyledFooter>
      </div>
    );
  }
}

export default TodoList;
