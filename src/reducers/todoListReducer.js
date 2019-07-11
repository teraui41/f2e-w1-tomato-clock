import { todoListState } from './initState';

export default function reducer(todoList = todoListState, {type, payload}) {
  switch (type) {
    default:
      return todoList
  }
}