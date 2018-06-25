import { connect } from 'react-redux';
import { addTodo } from '../store/actions';
import TaskNew from '../components/Task';

const mapDispatchToProps = dispatch => ({
  addTodo: item => dispatch(addTodo(item)),
});

export default connect(
  null,
  mapDispatchToProps,
)(TaskNew);
