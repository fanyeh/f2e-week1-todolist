const todoItemsKey = 'f2e-todoItems';

const getCurrentItems = () => {
  return JSON.parse(localStorage.getItem(todoItemsKey)) || {};
};

const createItemID = () => {
  return Date.now();
};

const addItem = newItem => {
  let currentItems = getCurrentItems();
  const itemID = createItemID();

  currentItems[itemID] = { id: itemID, ...newItem };
  setItems(currentItems);
};

const updateItem = item => {
  let currentItems = getCurrentItems();
  currentItems[item.id] = item;
  setItems(currentItems);
};

const setItems = items => {
  console.log(items);
  localStorage.setItem(todoItemsKey, JSON.stringify(items));
};

const listItems = () => {
  return Object.values(getCurrentItems());
};

export default {
  addItem,
  updateItem,
  listItems,
  setItems,
};
