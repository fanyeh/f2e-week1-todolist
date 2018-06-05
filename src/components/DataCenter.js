const todoItemsKey = 'f2e-todoItems';

const getCurrentItems = () => {
  return JSON.parse(localStorage.getItem(todoItemsKey)) || {};
};

const createItemID = () => {
  return Date.now();
};

const addTodoItem = newItem => {
  let currentItems = getCurrentItems();
  const itemID = createItemID();
  currentItems[itemID] = newItem;
  localStorage.setItem(todoItemsKey, JSON.stringify(currentItems));
};

export default {
  addTodoItem,
};
