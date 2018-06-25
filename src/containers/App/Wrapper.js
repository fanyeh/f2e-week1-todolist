import styled from 'styled-components';
import { color } from '../../components/DesignConfig';

const Wrapper = styled.div`
  background-color: ${color.silver};
  text-align: center;
`;

const Header = styled.header`
  background-color: ${color.blue};
`;

const Section = styled.section`
  width: 38.75rem;
  padding-top: 1.5rem;
  padding-bottom: 0.5rem;
  margin: 0 auto;
`;

Wrapper.Header = Header;
Wrapper.Section = Section;

export default Wrapper;
