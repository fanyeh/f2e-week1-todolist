import styled from 'styled-components';
import { color, fontSize } from '../../DesignConfig';

const Icon = styled.i`
  font-size: ${fontSize.large};
  cursor: pointer;
  margin-right: 2rem;
  color: ${color.black};
  & > span {
    padding-left: 0.5rem;
  }
`;

const Edit = Icon.extend`
  color: ${({ edit }) => edit && color.blue};
`;
const Important = Icon.extend`
  color: ${({ important }) => important && color.orange};
`;
const Delete = Icon.extend`
  &:hover {
    color: ${color.red};
  }
`;
const Status = Icon.extend`
  font-size: ${fontSize.regular};
  margin-right: 1rem;
  color: ${color.darkGray};
`;
Icon.edit = Edit;
Icon.important = Important;
Icon.delete = Delete;
Icon.status = Status;

export default Icon;
