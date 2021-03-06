import types from '../constants/actionTypes'

export const addTodoToDoingAction = payload => ({
  type: types.ADD_TODO_TO_DOING,
  payload
});

export const addTodoAction = payload => ({
  type: types.ADD_TODO,
  payload
});

export const updateTodoAction = payload => ({
  type: types.UPDATE_TODO,
  payload
});

export const getTodoAction = payload => ({
  type: types.GET_TODO,
  payload
});

export const deleteTodoAction = payload => ({
  type: types.DELETE_TODO,
  payload
});

export const addDoneAction = payload => ({
  type: types.ADD_DONE,
  payload
});

export const getDoneAction = payload => ({
  type: types.GET_DONE,
  payload
});

export const deleteDoneAction = payload => ({
  type: types.DELETE_DONE,
  payload
});
