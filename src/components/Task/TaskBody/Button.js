import styled from 'styled-components';
import { fontSize, color } from '../../DesignConfig';

const Button = styled.button`
  font-size: ${fontSize.large};
  text-align: center;
  flex-grow: 1;
  border: none;
  height: 3.75rem;
  outline: none;
  color: ${color.white};
  cursor: pointer;
  & > span {
    padding: 0 0.5rem;
    font-size: 2rem;
  }
`;

const AddButton = Button.extend`
  background-color: ${color.blue};
`;

const CancelButton = Button.extend`
  color: ${color.red};
  background-color: ${color.white};
`;

Button.Add = AddButton;
Button.Cancel = CancelButton;

export default Button;
