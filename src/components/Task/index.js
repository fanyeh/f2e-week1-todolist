import React, { Component } from 'react';
import styled from 'styled-components';
import TaskHeader from './TaskHeader';
import TaskDetail from './TaskDetail';
import DataCenter from '../DataCenter';
import TaskProvider from './TaskContext';
const Wrapper = styled.div`
  width: 38.75rem;
  margin: 0 auto 0.5rem auto;
`;

class Task extends Component {
  static defaultProps = { important: false, complete: false, edit: false };

  state = { important: this.props.important, complete: this.props.complete, edit: this.props.edit };

  elementRefs = {
    titleRef: React.createRef(),
    dateRef: React.createRef(),
    timeRef: React.createRef(),
    commentRef: React.createRef(),
  };

  completeHandler = () => {
    this.setState(({ complete }) => ({ complete: !complete }));
  };
  importantHandler = () => {
    this.setState(({ important }) => ({ important: !important }));
  };

  addHandler = () => {
    const { commentRef, timeRef, dateRef, titleRef } = this.elementRefs;
    DataCenter.addTodoItem({
      title: titleRef.current.value,
      date: dateRef.current.value,
      time: timeRef.current.value,
      comment: commentRef.current.value,
    });
  };

  headerProps = () => {
    return {
      ...this.state,
      completeHandler: this.completeHandler,
      importantHandler: this.importantHandler,
      toggleEdit: this.toggleEdit,
    };
  };
  toggleEdit = () => {
    this.setState(({ edit }) => ({ edit: !edit }));
  };

  render() {
    return (
      <Wrapper>
        <TaskProvider value={this.elementRefs}>
          <TaskHeader {...this.headerProps()} />

          {(this.state.edit || this.props.new) && <TaskDetail addHandler={this.addHandler} />}
        </TaskProvider>
      </Wrapper>
    );
  }
}

export default Task;
