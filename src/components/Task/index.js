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

  state = {
    important: this.props.item ? this.props.item.important : this.props.important,
    complete: this.props.item ? this.props.item.complete : this.props.complete,
    edit: this.props.edit,
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

  completeHandler = () => {
    this.setState(({ complete }) => ({ complete: !complete }), this.updateComplete);
  };
  importantHandler = () => {
    this.setState(({ important }) => ({ important: !important }), this.updateImportant);
  };

  addHandler = () => {
    this.toggleEdit();
    const newItem = this.createItem();
    DataCenter.addItem(newItem);
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
      important: this.state.important,
      complete: this.state.complete,
    };
  };

  updateComplete = () => {
    this.updateItem({ complete: this.state.complete });
  };

  updateImportant = () => {
    this.updateItem({ important: this.state.important });
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
      toggleEdit: this.props.new ? () => {} : this.toggleEdit,
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
