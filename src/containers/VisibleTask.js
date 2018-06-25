import { connect } from 'react-redux';
import Task from '../components/Task';
import { toggleComplete, toggleImportant, deleteTodo, updateTodo } from '../store/actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleComplete: () => dispatch(toggleComplete(ownProps.item.id)),
  toggleImportant: () => dispatch(toggleImportant(ownProps.item.id)),
  deleteTodo: () => dispatch(deleteTodo(ownProps.item.id)),
  updateTodo: item => dispatch(updateTodo(item)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Task);
