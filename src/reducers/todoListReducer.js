import types from '../constants/actionTypes';
import { todoListState } from './initState';

export default function reducer(todoList = todoListState, {type, payload}) {
  switch (type) {
    case types.ADD_TODO_TO_DOING:
      return todoList.merge({ selectedId: payload });
    default:
      return todoList
  }
}