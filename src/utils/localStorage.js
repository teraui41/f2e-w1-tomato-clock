import isEmpty from 'lodash/isEmpty';

const TODO_LIST_KEY = 'TODO_LIST';
const DONE_LIST_KEY = 'DONE_LIST';

export const getTodoList = () => {
  const todoListStr = localStorage.getItem(TODO_LIST_KEY);

  if(isEmpty(todoListStr)) return [];
  return JSON.parse(todoListStr);
}

export const getDoneList = () => {
  const doneListStr = localStorage.getItem(DONE_LIST_KEY);

  if(isEmpty(doneListStr)) return [];
  return JSON.parse(doneListStr);
}

export const saveTodoList = (todoList) => {
  localStorage.setItem(TODO_LIST_KEY, JSON.stringify(todoList));
}

export const saveDoneList = (doneList) => {
  localStorage.setItem(DONE_LIST_KEY, JSON.stringify(doneList));
}

export const deleteTodoList = () => localStorage.removeItem(TODO_LIST_KEY);
export const deleteDoneList = () => localStorage.removeItem(DONE_LIST_KEY);
