import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import TaskAdder from '../../components/TaskAdder';
import VisibleTodoList from '../VisibleTodoList';
import '../../react-datepicker.css';
import Wrapper from './Wrapper';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Wrapper.Header>
          <NavBar />
        </Wrapper.Header>
        <Wrapper.Section>
          <TaskAdder />
          <VisibleTodoList />
        </Wrapper.Section>
      </Wrapper>
    );
  }
}

export default App;
