import React, { Component } from 'react';
import Icon from './Icon';
import styled from 'styled-components';
class Status extends Component {
  render() {
    const { complete, hasComment, date } = this.props;
    console.log(date);
    return complete ? null : (
      <Wrapper>
        {date && (
          <Icon.status className="far fa-calendar-alt">
            <span>{date.format('MM/DD/YYYY')}</span>
          </Icon.status>
        )}

        {hasComment && <Icon.status className="far fa-comment-dots" />}
      </Wrapper>
    );
  }
}

export default Status;

const Wrapper = styled.div`
  margin-left: 4.5rem;
  text-align: left;
  margin-top: 0.5rem;
`;
