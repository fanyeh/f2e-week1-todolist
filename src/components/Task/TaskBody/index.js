import React, { Component } from 'react';
import styled from 'styled-components';
import ItemContainer from './ItemContainer';
import Wrapper from './Wrapper';
import Button from './Button';
import TextArea from './TextArea';
import TextField from './TextField';
import Flex from './Flex';
import FileLabel from './FileLabel';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FileInput = styled.input`
  display: none;
`;

class TaskBody extends Component {
  state = { fileName: '' };
  changeHandler = e => {
    this.setState({ fileName: e.target.value });
  };
  render() {
    const { handlers, date, time, comment, isNew } = this.props;
    const { clickHandler, cancelHandler, dateHandler, timeHandler, commentHandler } = handlers;
    return (
      <Wrapper>
        <ItemContainer name="deadline" icon="fa-calendar-alt">
          <Flex>
            <DatePicker selected={date} onChange={dateHandler} placeholderText="MM/DD/YYYY" />
            <TextField type="text" placeholder="hh:mm" value={time} onChange={timeHandler} />
          </Flex>
        </ItemContainer>

        {/* <ItemContainer name="file" icon="fa-file">
          <FileLabel htmlFor="file1">+</FileLabel>
          <label>{this.state.fileName.split(/.*[\/|\\]/)[1]}</label>
          <FileInput
            type="file"
            id="file1"
            value={this.state.fileName}
            onChange={this.changeHandler}
          />
        </ItemContainer> */}

        <ItemContainer name="comment" icon="fa-comment-dots">
          <TextArea
            placeholder="Type your memo here..."
            value={comment}
            onChange={commentHandler}
          />
        </ItemContainer>

        <Flex>
          <Button.Cancel onClick={cancelHandler}>
            <span>Cancel</span>
          </Button.Cancel>
          <Button.Add onClick={clickHandler}>
            <span>{isNew ? 'Add' : 'Update'}</span>
          </Button.Add>
        </Flex>
      </Wrapper>
    );
  }
}

export default TaskBody;
