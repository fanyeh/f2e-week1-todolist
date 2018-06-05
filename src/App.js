import React, { Component } from 'react';
import styled from 'styled-components';
import { color } from './components/DesignConfig';
import NavBar from './components/NavBar';
import TaskAdder from './components/TaskAdder';
import Task from './components/Task';
import './App.css';

const AppWrapper = styled.div`
  /* height: 100vh; */
  background-color: ${color.silver};
  text-align: center;
`;

const StyledHeader = styled.header`
  background-color: ${color.blue};
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <StyledHeader>
          <NavBar />
        </StyledHeader>
        <TaskAdder />
        <Task />
        <Task />
      </AppWrapper>
    );
  }
}

export default App;
