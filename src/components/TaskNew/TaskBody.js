import React, { Component } from 'react';
import styled from 'styled-components';
import { color, fontSize } from '../DesignConfig';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import classNames from 'classnames';

const StyledInput = styled.input`
  width: 10.13rem;
  height: 2.19rem;
  margin-left: 1.5rem;
  margin-top: 0.5rem;
  font-size: ${fontSize.regular};
  padding-left: 1rem;
  border: none;
  border-radius: 4px;
  &::placeholder {
    color: ${color.gray};
  }
`;
const Wrapper = styled.div`
  height: 27.69rem;
  background-color: ${color.lightGray};
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
`;

const ButtonGroup = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const StyledButton = styled.button`
  font-size: ${fontSize.large};
  text-align: center;
  flex-grow: 1;
  border: none;
  height: 3.75rem;
  outline: none;
  cursor: pointer;
  & > span {
    padding: 0 0.5rem;
    font-size: 2rem;
  }
`;

const AddButton = StyledButton.extend`
  color: ${color.white};
  background-color: ${color.blue};
`;

const CancelButton = StyledButton.extend`
  color: ${color.red};
  background-color: ${color.white};
`;

const ItemContainer = styled.div`
  margin: 1.5rem 4.5rem 0 4.5rem;
  text-align: left;
`;

const ItemWrapper = styled.div`
  display: flex;
`;

const FileButton = styled.button`
  background-color: ${color.gray};
  width: 2rem;
  height: 2rem;
  margin-top: 0.5rem;
  margin-left: 1.5rem;
  border: none;
  border-radius: 2px;
  color: white;
  font-size: ${fontSize.large};
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 7.5rem;
  box-sizing: border-box;
  font-size: ${fontSize.regular};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  resize: none;
  margin-left: 1.5rem;
  margin-top: 0.5rem;
  &::placeholder {
    color: ${color.gray};
  }
`;

const ItemHeader = ({ name, icon }) => {
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

  return (
    <div>
      <StyledIcon className={classNames('far', icon)} />
      <TaskItemName>{name}</TaskItemName>
    </div>
  );
};

class TaskBody extends Component {
  render() {
    const { cancelHandler, clickHandler, refs, date, setDeadline } = this.props;
    return (
      <Wrapper>
        <ItemContainer>
          <ItemHeader name="deadline" icon="fa-calendar-alt" />
          <ItemWrapper>
            <DatePicker selected={date} onChange={setDeadline} />
            <StyledInput type="text" placeholder="hh:mm" key="taskTime" innerRef={refs.time} />
          </ItemWrapper>
        </ItemContainer>

        <ItemContainer>
          <ItemHeader name="file" icon="fa-file" />
          <FileButton>+</FileButton>
        </ItemContainer>

        <ItemContainer>
          <ItemHeader name="comment" icon="fa-comment-dots" />
          <StyledTextarea placeholder="Type your memo here..." innerRef={refs.comment} />
        </ItemContainer>

        <ButtonGroup>
          <CancelButton onClick={cancelHandler}>
            <span>x</span> Cancel
          </CancelButton>
          <AddButton onClick={clickHandler}>
            <span>+</span> Add Task
          </AddButton>
        </ButtonGroup>
      </Wrapper>
    );
  }
}

export default TaskBody;
