import React, { Component } from 'react';
import styled from 'styled-components';
import { color } from './components/DesignConfig';
import NavBar from './components/NavBar';
import TaskAdder from './components/TaskAdder';
import Task from './components/Task';
import './App.css';
import DataCenter from './components/DataCenter';

const AppWrapper = styled.div`
  /* height: 100vh; */
  background-color: ${color.silver};
  text-align: center;
`;

const StyledHeader = styled.header`
  background-color: ${color.blue};
`;

const Wrapper = styled.div`
  margin: 1.5rem auto;
`;

class App extends Component {
  state = { showNewTask: false };
  clickHandler = () => {
    this.setState(({ showNewTask }) => ({ showNewTask: !showNewTask }));
  };
  render() {
    return (
      <AppWrapper>
        <StyledHeader>
          <NavBar />
        </StyledHeader>

        <Wrapper>
          {this.state.showNewTask ? (
            <Task edit={true} cancelHandler={this.clickHandler} />
          ) : (
            <TaskAdder clickHandler={this.clickHandler} />
          )}
        </Wrapper>

        {DataCenter.listItems().map(item => <Task item={item} key={item.id} />)}
      </AppWrapper>
    );
  }
}

export default App;
