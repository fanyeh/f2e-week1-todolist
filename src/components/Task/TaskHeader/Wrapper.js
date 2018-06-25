import styled from 'styled-components';
import { color } from '../../DesignConfig';
export default styled.div`
  /* height: ${props => (props.complete ? '4.75rem' : '6.38rem')}; */
  background-color: ${props => (props.important ? color.paleOrange : color.lightGray)};
  margin-bottom: 0.19rem;
`;
