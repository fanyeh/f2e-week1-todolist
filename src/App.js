import React, { Component } from 'react';
import { color } from './components/DesignConfig';
import styled from 'styled-components';
import NavBar from './components/NavBar';
import TaskAdder from './components/TaskAdder';
import Task from './components/Task';
import DataCenter from './components/DataCenter';
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
  state = { items: DataCenter.listItems() };

  refreshHandler = item => {
    this.setState({ items: DataCenter.listItems() });
  };

  render() {
    return (
      <AppWrapper>
        <StyledHeader>
          <NavBar />
        </StyledHeader>
        <TaskAdder clickHandler={this.clickHandler} refreshHandler={this.refreshHandler} />
        {this.state.items.map(item => <Task item={item} key={item.id} />)}
      </AppWrapper>
    );
  }
}

export default App;
