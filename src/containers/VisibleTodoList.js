import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { VisibilityFilters } from '../store/actions';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.complete);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.complete);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

export default connect(mapStateToProps)(TodoList);
