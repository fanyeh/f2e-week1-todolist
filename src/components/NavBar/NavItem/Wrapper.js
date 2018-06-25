import styled from 'styled-components';
import { color } from '../../DesignConfig';

export default styled.div`
  position: relative;
  width: 13.75rem;
  line-height: 1.75rem;
  text-transform: capitalize;
  padding: 1.5rem 0;
  color: ${props => (props.selected ? color.white : color.black)};
  cursor: pointer;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 10rem;
    height: 0.31rem;
    background-color: ${color.darkBlue};
    left: calc(3.75rem / 2);
    opacity: ${props => (props.selected ? 1 : 0)};
  }
`;
