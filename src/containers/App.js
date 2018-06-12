import React, { Component } from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import TaskAdder from '../components/TaskAdder';
import { color } from '../components/DesignConfig';
import VisibleTodoList from './VisibleTodoList';
import '../react-datepicker.css';

const AppWrapper = styled.div`
  background-color: ${color.silver};
  text-align: center;
`;

const StyledHeader = styled.header`
  background-color: ${color.blue};
`;

const Wrapper = styled.div`
  width: 38.75rem;
  margin: 0 auto;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <StyledHeader>
          <NavBar />
        </StyledHeader>
        <Wrapper>
          <TaskAdder />
          <VisibleTodoList />
        </Wrapper>
      </AppWrapper>
    );
  }
}

export default App;
