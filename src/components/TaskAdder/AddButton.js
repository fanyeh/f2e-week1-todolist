import styled from 'styled-components';
import { color, fontSize, fontWeight } from '../DesignConfig';

export default styled.button`
  width: 100%;
  height: 4.06rem;
  background-color: ${color.white};
  font: ${fontWeight.light} ${fontSize.large} 'Roboto';
  text-indent: 2rem;
  border: 2px solid ${color.gray};
  border-radius: 5px;
  text-align: left;
  cursor: pointer;
  outline: none;
  color: ${color.gray};
`;
