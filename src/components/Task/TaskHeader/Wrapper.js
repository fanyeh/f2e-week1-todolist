import styled from 'styled-components';
import { color } from '../../DesignConfig';
export default styled.div`
  background-color: ${props => (props.important ? color.paleOrange : color.lightGray)};
  margin-bottom: 0.19rem;
  margin-top: 1.5rem;
`;
