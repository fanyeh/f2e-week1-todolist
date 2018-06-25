import styled from 'styled-components';
import { fontSize, color } from '../../DesignConfig';

export default styled.input`
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
