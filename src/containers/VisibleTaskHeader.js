import { connect } from 'react-redux';
import { toggleComplete, toggleImportant, deleteTodo } from '../actions';
import TaskHeader from '../components/Task/TaskHeader';

const mapStateToProps = (state, ownProps) => ({
  complete: ownProps.item ? ownProps.item.complete : false,
  important: ownProps.item ? ownProps.item.important : false,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleComplete: () => dispatch(toggleComplete(ownProps.item.id)),
  toggleImportant: () => dispatch(toggleImportant(ownProps.item.id)),
  deleteTodo: () => dispatch(deleteTodo(ownProps.item.id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskHeader);
