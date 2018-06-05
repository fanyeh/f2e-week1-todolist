import React, { Component } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { fontSize } from '../../DesignConfig';

const TaskTypes = {
  deadline: { name: 'deadline', icon: 'fa-calendar-alt' },
  file: { name: 'file', icon: 'fa-file' },
  comment: { name: 'comment', icon: 'fa-comment-dots' },
};

const Container = styled.div`
  margin: 1.5rem 4.5rem 0 4.5rem;
  text-align: left;
`;

const StyledIcon = styled.i`
  width: 1rem;
  vertical-align: middle;
  height: ${fontSize.large};
`;

const TaskItemName = styled.span`
  margin-left: 0.5rem;
  font-size: ${fontSize.medium};
  text-transform: capitalize;
`;

class TaskItemContainer extends Component {
  render() {
    const taskType = TaskTypes[this.props.type];
    return (
      <Container>
        <div>
          <StyledIcon className={classNames('far', taskType.icon)} />
          <TaskItemName>{taskType.name}</TaskItemName>
        </div>
        {this.props.children}
      </Container>
    );
  }
}

export default TaskItemContainer;
