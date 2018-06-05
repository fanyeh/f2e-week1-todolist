import React, { Component } from 'react';
import styled from 'styled-components';
import TaskItemContainer from './TaskItemContainer';
import { color, fontSize } from '../../DesignConfig';
import { TaskContext } from '../TaskContext';
const StyledTextarea = styled.textarea`
  width: 100%;
  height: 7.5rem;
  box-sizing: border-box;
  font-size: ${fontSize.regular};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  resize: none;
  &::placeholder {
    color: ${color.gray};
  }
`;

const Wrapper = styled.div`
  padding-left: 1.5rem;
  margin-top: 0.5rem;
`;

class TaskItemComment extends Component {
  render() {
    return (
      <TaskItemContainer type="comment">
        <Wrapper>
          <TaskContext.Consumer>
            {value => (
              <StyledTextarea placeholder="Type your memo here..." innerRef={value.commentRef} />
            )}
          </TaskContext.Consumer>
        </Wrapper>
      </TaskItemContainer>
    );
  }
}

export default TaskItemComment;
