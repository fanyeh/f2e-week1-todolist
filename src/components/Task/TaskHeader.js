import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { color, fontSize } from '../DesignConfig';
import classNames from 'classnames';
import { TaskContext } from './TaskContext';

const Wrapper = styled.div`
  width: 100%;
  height: ${props => (props.complete ? '4.75rem' : '6.38rem')};
  background-color: ${props => (props.important ? color.paleOrange : color.lightGray)};
  margin-bottom: 0.19rem;
`;

const Header = styled.div`
  display: flex;
  padding-top: 1.5rem;
  padding-bottom: 0.94rem;
  position: relative;
  align-items: center;
`;

const TitleStyle = css`
  display: inline-block;
  user-select: none;
  margin-left: 1rem;
  font-size: ${fontSize.large};
  flex-grow: 1;
  text-align: left;
  color: ${props => (props.checked ? color.darkGray : color.black)};
`;

const StyledTextfield = styled.input`
  border: none;
  background: none;
  outline: none;
  ${TitleStyle};
`;

const StyledLabel = styled.label`
  text-decoration: ${props => (props.checked ? 'line-through' : '')};
  ${TitleStyle};
`;

const StyledCheckmark = styled.label`
  position: relative;
  height: 1.5rem;
  width: 1.5rem;
  background-color: ${color.white};
  border-radius: 3px;
  margin-left: 2rem;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    display: none;
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;
const StyledCheckbox = styled.input`
  position: absolute;
  display: none;
  cursor: pointer;
  margin-left: 2rem;
  margin-top: 1.5rem;

  &:checked ~ ${StyledCheckmark} {
    background-color: ${color.blue};
  }
  &:checked ~ ${StyledCheckmark}:after {
    display: block;
  }
`;

const StyledIcon = styled.i`
  font-size: ${props => (props.status ? fontSize.regular : fontSize.large)};
  margin-right: 2rem;
`;

const EditIcon = StyledIcon.extend`
  color: ${props => (props.edit ? color.blue : color.black)};
`;
const ImportantIcon = StyledIcon.extend`
  color: ${props => (props.important ? color.orange : color.black)};
`;

const StatusIcon = StyledIcon.extend`
  margin-right: 1rem;
  color: ${props => (props.status ? color.darkGray : color.black)};
`;

const Status = styled.div`
  margin-left: 4.5rem;
  text-align: left;
`;

class TaskHeader extends Component {
  render() {
    const { completeHandler, importantHandler, toggleEdit, important, complete, edit } = this.props;
    return (
      <Wrapper important={important} complete={complete}>
        <Header>
          <StyledCheckbox
            type="checkbox"
            checked={complete}
            onChange={completeHandler}
            id="complete"
          />
          <StyledCheckmark htmlFor="complete" />
          {edit ? (
            <TaskContext.Consumer>
              {value => (
                <StyledTextfield
                  checked={complete}
                  placeholder="Type Something here..."
                  innerRef={value.titleRef}
                />
              )}
            </TaskContext.Consumer>
          ) : (
            <StyledLabel checked={complete}>Type Something here...</StyledLabel>
          )}

          <ImportantIcon
            className={classNames('fa-star', important ? 'fas' : 'far')}
            important={important}
            onClick={importantHandler}
          />
          <EditIcon className="fas fa-pencil-alt" edit={edit} onClick={toggleEdit} />
        </Header>

        {!complete && (
          <Status>
            <StatusIcon className="far fa-calendar-alt" status />
            <StatusIcon className="far fa-comment-dots" status />
            <StatusIcon className="far fa-file" status />
          </Status>
        )}
      </Wrapper>
    );
  }
}

export default TaskHeader;
