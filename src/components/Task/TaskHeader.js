import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { color, fontSize } from '../DesignConfig';
import classNames from 'classnames';

const Wrapper = styled.div`
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
  font-family: 'Robot';
`;

const StyledTextfield = styled.input`
  border: none;
  background: none;
  outline: none;
  &::placeholder {
    color: ${color.darkGray};
  }
  ${TitleStyle};
`;

const StyledLabel = styled.label`
  text-decoration: ${props => (props.checked ? 'line-through' : '')};
  color: ${props => (props.checked ? color.darkGray : color.black)};
  line-height: 35px;
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
  cursor: pointer;
`;
const ImportantIcon = StyledIcon.extend`
  cursor: pointer;
  color: ${props => (props.important ? color.orange : color.black)};
`;
const DeleteIcon = StyledIcon.extend`
  cursor: pointer;
  color: ${color.black};
  &:hover {
    color: ${color.red};
  }
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
  state = { ...this.props.item };

  changeHandler = e => {
    this.setState({ title: e.target.value });
  };

  render() {
    const {
      toggleEdit,
      edit,
      item,
      toggleImportant,
      toggleComplete,
      deleteTodo,
      complete,
      important,
      refs,
    } = this.props;
    const { title } = this.state;
    const checkboxID = item ? item.id : 'complete-new';
    return (
      <Wrapper important={important} complete={complete}>
        <Header>
          <StyledCheckbox
            type="checkbox"
            checked={complete}
            onChange={toggleComplete}
            id={checkboxID}
          />
          <StyledCheckmark htmlFor={checkboxID} />
          {edit ? (
            <StyledTextfield
              placeholder={this.props.item ? '' : 'Type Something here...'}
              innerRef={refs.title}
              value={title}
              type="text"
              onChange={this.changeHandler}
            />
          ) : (
            <StyledLabel checked={complete}>{title}</StyledLabel>
          )}

          <ImportantIcon
            className={classNames('fa-star', important ? 'fas' : 'far')}
            important={important}
            onClick={toggleImportant}
          />
          <EditIcon className="fas fa-pencil-alt" edit={edit} onClick={toggleEdit} />
          <DeleteIcon className="far fa-trash-alt" onClick={deleteTodo} />
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
