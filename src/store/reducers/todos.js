const todoItemsKey = 'f2e-todoItems';

const getCurrentItems = () => {
  return JSON.parse(localStorage.getItem(todoItemsKey)) || {};
};

const setItems = items => {
  localStorage.setItem(todoItemsKey, JSON.stringify(items));
};

const listItems = () => {
  return Object.values(getCurrentItems());
};

const todos = (state = listItems(), action) => {
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
  setItems(newTodos);
  return newTodos;
};
export default todos;
