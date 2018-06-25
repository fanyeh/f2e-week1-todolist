import React, { Component } from 'react';
import TaskBody from './TaskBody';
import TaskHeader from './TaskHeader';
import moment from 'moment';

class TaskNew extends Component {
  constructor(props) {
    super(props);

    const { item } = props;
    this.state = {
      important: item ? item.important : false,
      complete: item ? item.complete : false,
      date: item ? moment(item.date) : moment(),
      title: item ? item.title : '',
      comment: item ? item.comment : '',
      time: item ? item.time : '',
      edit: this.props.item ? false : true,
    };
  }

  /**
   * Handlers
   */
  addHandler = () => {
    const { addTodo, cancelHandler } = this.props;
    addTodo(this.createItem());
    cancelHandler();
  };

  updateHandler = () => {
    const { item, updateTodo } = this.props;
    const updatedItem = Object.assign(item, this.createItem());
    updateTodo(updatedItem);
    this.toggleEdit();
  };

  toggleEdit = () => {
    this.setState(
      ({ edit }) => ({ edit: !edit }),
      () => {
        if (this.state.edit) {
          this.titleRef.current.focus();
        }
      },
    );
  };

  setTitle = e => {
    this.setState({ title: e.target.value });
  };

  setDate = date => {
    this.setState({ date: date });
  };
  setTime = e => {
    this.setState({ time: e.target.value });
  };

  setComment = e => {
    this.setState({ comment: e.target.value });
  };

  toggleImportant = () => {
    this.props.item
      ? this.props.item.toggleImportant()
      : this.setState(({ important }) => ({ important: !important }));
  };

  toggleComplete = () => {
    this.props.item
      ? this.props.item.toggleComplete()
      : this.setState(({ complete }) => ({ complete: !complete }));
  };

  /**
   * Utils
   */

  createItem = () => {
    const { date, ...states } = this.state;
    return {
      ...states,
      id: Date.now(),
      date: date.unix(),
    };
  };

  /**
   * Child Props
   */

  headerProps = () => {
    const { date, comment, time, ...states } = this.state;
    const { item } = this.props;
    return {
      ...states,
      toggleComplete: this.toggleComplete,
      toggleImportant: this.toggleImportant,
      setTitle: this.setTitle,
      toggleEdit: item ? this.toggleEdit : () => {},
    };
  };

  bodyProps = () => {
    const { important, complete, title, ...states } = this.state;
    const { item, cancelHandler } = this.props;
    return {
      ...states,
      handlers: {
        clickHandler: item ? this.updateHandler : this.addHandler,
        cancelHandler: item ? this.toggleEdit : cancelHandler,
        dateHandler: this.setDate,
        timeHandler: this.setTime,
        commentHandler: this.setComment,
      },
    };
  };

  render() {
    return (
      <div>
        <TaskHeader {...this.headerProps()} />
        {this.state.edit && <TaskBody {...this.bodyProps()} />}
      </div>
    );
  }
}

export default TaskNew;
