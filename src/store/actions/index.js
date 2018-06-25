let nextTodoId = 0;
export const addTodo = item => ({
  type: 'ADD_TODO',
  item,
});
export const deleteTodo = id => ({
  type: 'DEL_TODO',
  id,
});
export const updateTodo = item => ({
  type: 'UPDATE_TODO',
  item,
});
export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});
export const toggleComplete = id => ({
  type: 'TOGGLE_COMPLETE',
  id,
});
export const toggleImportant = id => ({
  type: 'TOGGLE_IMPORTANT',
  id,
});
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};
