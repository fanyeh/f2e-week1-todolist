import React, { Component } from 'react';
import Icon from './Icon';
import styled from 'styled-components';
class Status extends Component {
  render() {
    const { complete } = this.props;

    return complete ? (
      <Wrapper>
        <Icon.status className="far fa-calendar-alt" />
        <Icon.status className="far fa-comment-dots" />
        <Icon.status className="far fa-file" />
      </Wrapper>
    ) : null;
  }
}

export default Status;

const Wrapper = styled.div`
  margin-left: 4.5rem;
  text-align: left;
`;
