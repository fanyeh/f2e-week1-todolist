import DataCenter from '../../components/DataCenter';

const todos = (state = DataCenter.listItems(), action) => {
  let newTodos = [];
  switch (action.type) {
    case 'ADD_TODO':
      newTodos = [...state, action.item];
      break;
    case 'DEL_TODO':
      newTodos = state.filter(todo => {
        return todo.id !== action.id;
      });
      break;
    case 'UPDATE_TODO':
      newTodos = state.map(todo => (todo.id === action.item.id ? action.item : todo));
      break;
    case 'TOGGLE_COMPLETE':
      newTodos = state.map(
        todo => (todo.id === action.id ? { ...todo, complete: !todo.complete } : todo),
      );
      break;
    case 'TOGGLE_IMPORTANT':
      newTodos = state.map(
        todo => (todo.id === action.id ? { ...todo, important: !todo.important } : todo),
      );
      break;
    default:
      return state;
  }
  DataCenter.setItems(newTodos);
  return newTodos;
};
export default todos;
