import styled from 'styled-components';
import { color, fontSize } from '../../DesignConfig';
const TextField = styled.input`
  display: inline-block;
  user-select: none;
  margin-left: 1rem;
  font-size: ${fontSize.large};
  flex-grow: 1;
  text-align: left;
  font-family: 'Robot';
  border: none;
  background: none;
  outline: none;
  user-select: none;
  text-decoration: ${({ strike }) => (strike ? 'line-through' : '')};
  &::placeholder {
    color: ${color.darkGray};
  }
`;

export default TextField;
