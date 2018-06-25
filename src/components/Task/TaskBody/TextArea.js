import styled from 'styled-components';
import { fontSize, color } from '../../DesignConfig';
export default styled.textarea`
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
