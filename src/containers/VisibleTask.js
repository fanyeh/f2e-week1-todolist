import { connect } from 'react-redux';
import { updateTodo } from '../actions';
import Task from '../components/Task';

const mapDispatchToProps = dispatch => ({
  updateTodo: item => dispatch(updateTodo(item)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Task);
