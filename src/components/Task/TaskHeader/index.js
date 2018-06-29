import React, { Component } from 'react';
import classNames from 'classnames';
import TextField from './TextField';
import Title from './Title';
import Icon from './Icon';
import Checkbox from './Checkbox';
import Wrapper from './Wrapper';
import Status from './Status';
class TaskHeader extends Component {
  titleRef = React.createRef();

  componentDidMount() {
    this.titleRef.current.focus();
  }

  render() {
    const {
      complete,
      important,
      deleteHandler,
      toggleComplete,
      toggleImportant,
      setTitle,
      title,
      toggleEdit,
      edit,
      isNew,
      hasComment,
      date,
    } = this.props;
    return (
      <Wrapper important={important}>
        <Title>
          <Checkbox checked={complete} handler={toggleComplete} id="complete-new" />
          <TextField
            placeholder="Type Something here..."
            type="text"
            onChange={setTitle}
            value={title}
            innerRef={this.titleRef}
            strike={complete}
            disabled={!edit}
          />
          <Icon.important
            className={classNames('fa-star', important ? 'fas' : 'far')}
            important={important}
            onClick={toggleImportant}
          />
          <Icon.edit className="fas fa-pencil-alt" edit={edit} onClick={toggleEdit} />
          {!isNew && <Icon.delete className="fas fa-trash-alt" onClick={deleteHandler} />}
        </Title>
        <Status hasComment={hasComment} date={date} complete={complete} />
      </Wrapper>
    );
  }
}

export default TaskHeader;
