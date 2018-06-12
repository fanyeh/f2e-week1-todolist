import React, { Component } from 'react';
import styled from 'styled-components';
import TaskBody from './TaskBody';
import TaskHeader from './TaskHeader';
import moment from 'moment';
const Wrapper = styled.div`
  margin-bottom: 0.5rem;
`;

class TaskNew extends Component {
  titleRef = React.createRef();
  timeRef = React.createRef();
  commentRef = React.createRef();
  deadLine = null;

  state = {
    important: false,
    complete: false,
    date: moment(),
  };

  /**
   * Handlers
   */

  addHandler = () => {
    this.props.addTodo(this.createItem());
    this.props.cancelHandler();
  };

  setDeadline = date => {
    console.log('date: ', date.unix());

    this.setState({ date: date });
  };

  toggleImportant = () => {
    this.setState(({ important }) => ({ important: !important }));
  };

  toggleComplete = () => {
    this.setState(({ complete }) => ({ complete: !complete }));
  };
  /**
   * Lifecycles
   */

  componentDidMount() {
    this.titleRef.current.focus();
  }

  /**
   * Utils
   */

  createItem = () => {
    return {
      id: Date.now(),
      title: this.getRefValue(this.titleRef),
      time: this.getRefValue(this.timeRef),
      comment: this.getRefValue(this.commentRef),
      date: this.state.date.unix(),
      important: this.state.important,
      complete: this.state.important,
    };
  };

  getRefValue = ref => {
    return ref.current.value;
  };

  /**
   * Child Props
   */

  headerProps = () => {
    return {
      ...this.state,
      toggleComplete: this.toggleComplete,
      toggleImportant: this.toggleImportant,
      refs: { title: this.titleRef },
    };
  };

  detailProps = () => {
    return {
      clickHandler: this.addHandler,
      cancelHandler: this.props.cancelHandler,
      refs: {
        time: this.timeRef,
        comment: this.commentRef,
      },
      setDeadline: this.setDeadline,
      date: this.state.date,
    };
  };

  render() {
    return (
      <Wrapper>
        <TaskHeader {...this.headerProps()} />
        <TaskBody {...this.detailProps()} />
      </Wrapper>
    );
  }
}

export default TaskNew;
