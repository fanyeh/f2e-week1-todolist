import React, { Component } from 'react';
import styled from 'styled-components';
import TaskBody from './TaskBody';
import VisibleTaskHeader from '../../containers/VisibleTaskHeader';

const Wrapper = styled.div`
  margin-bottom: 0.5rem;
`;

class Task extends Component {
  state = {
    edit: this.props.item ? false : true,
  };

  titleRef = React.createRef();
  dateRef = React.createRef();
  timeRef = React.createRef();
  commentRef = React.createRef();

  /**
   * Handlers
   */

  updateHandler = () => {
    const updatedItem = Object.assign(this.props.item, this.createItem());
    this.props.updateTodo(updatedItem);
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

  /**
   * Lifecycles
   */

  componentDidMount() {
    if (this.state.edit) {
      this.titleRef.current.focus();
    }
  }

  /**
   * Utils
   */

  createItem = () => {
    return {
      title: this.getRefValue(this.titleRef),
      date: this.getRefValue(this.dateRef),
      time: this.getRefValue(this.timeRef),
      comment: this.getRefValue(this.commentRef),
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
      item: this.props.item,
      toggleEdit: this.toggleEdit,
      refs: { title: this.titleRef },
    };
  };

  detailProps = () => {
    return {
      item: this.props.item,
      clickHandler: this.updateHandler,
      cancelHandler: this.toggleEdit,
      refs: {
        date: this.dateRef,
        time: this.timeRef,
        comment: this.commentRef,
      },
    };
  };

  render() {
    return (
      <Wrapper>
        <VisibleTaskHeader {...this.headerProps()} />
        {this.state.edit && <TaskBody {...this.detailProps()} />}
      </Wrapper>
    );
  }
}

export default Task;
