import React, { Component } from 'react';
import styled from 'styled-components';
import { color, fontSize } from '../DesignConfig';
import classNames from 'classnames';

const Wrapper = styled.div`
  height: 4.75rem;
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

const StyledTextfield = styled.input`
  display: inline-block;
  user-select: none;
  margin-left: 1rem;
  font-size: ${fontSize.large};
  flex-grow: 1;
  text-align: left;
  font-family: 'Roboto';
  border: none;
  background: none;
  outline: none;
  &::placeholder {
    color: ${color.darkGray};
  }
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
  cursor: pointer;
  color: ${props => (props.important ? color.orange : color.black)};
`;

class TaskHeader extends Component {
  render() {
    const { refs, complete, important, toggleComplete, toggleImportant } = this.props;
    return (
      <Wrapper important={important}>
        <Header>
          <StyledCheckbox
            innerRef={refs.complete}
            type="checkbox"
            checked={complete}
            onChange={toggleComplete}
            id="complete-new"
          />
          <StyledCheckmark htmlFor="complete-new" />

          <StyledTextfield placeholder="Type Something here..." innerRef={refs.title} type="text" />

          <ImportantIcon
            className={classNames('fa-star', important ? 'fas' : 'far')}
            important={important}
            innerRef={refs.important}
            onClick={toggleImportant}
          />
          <EditIcon className="fas fa-pencil-alt" edit={true} />
        </Header>
      </Wrapper>
    );
  }
}

export default TaskHeader;
