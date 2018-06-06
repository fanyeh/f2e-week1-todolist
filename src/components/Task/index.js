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
  state = {
    edit: this.props.item ? false : true,
  };

  elementRefs = {
    titleRef: React.createRef(),
    dateRef: React.createRef(),
    timeRef: React.createRef(),
    commentRef: React.createRef(),
  };

  /**
   * Handlers
   */

  completeHandler = value => {
    if (this.props.item) {
      this.updateItem({ complete: value });
    } else {
      this.complete = value;
    }
  };
  importantHandler = value => {
    if (this.props.item) {
      this.updateItem({ important: value });
    } else {
      this.important = value;
    }
  };

  addHandler = () => {
    const newItem = this.createItem();
    DataCenter.addItem(newItem);
    this.props.cancelHandler();
    this.props.refreshHandler();
  };

  updateHandler = () => {
    this.updateItem(this.createItem());
    this.toggleEdit();
  };

  toggleEdit = () => {
    this.setState(({ edit }) => ({ edit: !edit }));
  };

  /**
   * Utils
   */

  createItem = () => {
    const { commentRef, timeRef, dateRef, titleRef } = this.elementRefs;
    return {
      title: titleRef.current.value,
      date: dateRef.current.value,
      time: timeRef.current.value,
      comment: commentRef.current.value,
      important: this.important,
      complete: this.complete,
    };
  };

  updateItem = item => {
    const updatedItem = Object.assign(this.props.item, item);
    DataCenter.updateItem(updatedItem);
  };

  /**
   * Child Props
   */

  headerProps = () => {
    return {
      ...this.state,
      item: this.props.item ? this.props.item : null,
      completeHandler: this.completeHandler,
      importantHandler: this.importantHandler,
      toggleEdit: this.props.item ? this.toggleEdit : () => {},
    };
  };

  detailProps = () => {
    return {
      item: this.props.item ? this.props.item : null,
      isUpdate: this.props.item ? true : false,
      addHandler: this.addHandler,
      updateHandler: this.updateHandler,
      cancelHandler: this.props.cancelHandler,
    };
  };

  render() {
    return (
      <Wrapper>
        <TaskProvider value={this.elementRefs}>
          <TaskHeader {...this.headerProps()} />
          {this.state.edit && <TaskDetail {...this.detailProps()} />}
        </TaskProvider>
      </Wrapper>
    );
  }
}

export default Task;
