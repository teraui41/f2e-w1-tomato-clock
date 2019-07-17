import { fromJS } from 'immutable';
import types from "../constants/actionTypes";
import { todoListState } from "./initState";

const addTodo = (todoList, payload) => {
  const list = todoList.get('todoList');
  const updatedList = list.insert( 0, fromJS(payload));
  return todoList.merge(fromJS({ todoList: updatedList}));
};

export default function reducer(todoList = todoListState, { type, payload }) {
  switch (type) {
    case types.ADD_TODO_TO_DOING:
      return todoList.merge({ selectedId: payload });
    case types.ADD_TODO:
      return addTodo(todoList, payload);
    case types.GET_TODO:
    case types.DELETE_TODO:
    case types.ADD_DONE:
    case types.GET_DONE:
    case types.DELETE_DONE:
    case types.ADD_TODO_TO_DOING:
    case types.ADD_TODO_TO_DOING:
    default:
      return todoList;
  }
}
