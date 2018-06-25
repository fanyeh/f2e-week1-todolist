import styled from 'styled-components';
import { fontSize, color } from '../../DesignConfig';

export default styled.label`
  display: block;
  text-align: center;
  color: white;
  line-height: 2rem;
  background-color: ${color.gray};
  font-size: ${fontSize.large};
  width: 2rem;
  height: 2rem;
  margin-top: 0.5rem;
  margin-left: 1.5rem;
  border-radius: 2px;
`;
