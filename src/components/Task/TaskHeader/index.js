import React, { Component } from 'react';
import classNames from 'classnames';
import TextField from './TextField';
import Title from './Title';
import Icon from './Icon';
import Checkbox from './Checkbox';
import Wrapper from './Wrapper';

class TaskHeader extends Component {
  titleRef = React.createRef();

  componentDidMount() {
    this.titleRef.current.focus();
  }

  render() {
    const {
      complete,
      important,
      toggleComplete,
      toggleImportant,
      setTitle,
      title,
      toggleEdit,
      edit,
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
          />
          <Icon.important
            className={classNames('fa-star', important ? 'fas' : 'far')}
            important={important}
            onClick={toggleImportant}
          />
          <Icon.edit className="fas fa-pencil-alt" edit={edit} onClick={toggleEdit} />
        </Title>
      </Wrapper>
    );
  }
}

export default TaskHeader;