import moment from "moment";
import { fromJS, updateIn } from "immutable";
import types from "../constants/actionTypes";
import { todoListState } from "./initState";
import { saveTodoList, saveDoneList } from "../utils/localStorage";

const addTodo = (todo, payload) => {
  const list = todo.get("todoList");
  const updatedList = list.insert(0, fromJS(payload));

  saveTodoList(updatedList.toJS());

  return todo.merge(fromJS({ todoList: updatedList }));
};

const addDone = (todo, payload) => {
  const list = todo.get("doneList");
  const updatedList = list.insert(
    0,
    fromJS({ ...payload, doneDate: moment() })
  );

  saveTodoList(updatedList.toJS());

  return todo.merge(fromJS({ todoList: updatedList }));
};

const removeTodo = (todo, payload) => {
  const todoList = todo.get("todoList");
  const doneList = todo.get("doneList");
  const updatedTodoList = todoList.delete(payload.index);

  const updatedDoneList = doneList.insert(0, fromJS(payload));

  saveTodoList(updatedTodoList.toJS());
  saveDoneList(updatedDoneList.toJS());

  return todo.merge(fromJS({ todoList: updatedTodoList, doneList: updatedDoneList }));
};

const updateTodo = (todo, { index, ...payload}) => {
  console.log("TCL: updateTodo -> payload", payload)
  const updatedList = updateIn(todo, ['todoList', index], item => fromJS({ ...item.toJS(), ...payload }));

  saveTodoList(updatedList.getIn(['todoList']).toJS());
  return updatedList;
}

export default function reducer(todo = todoListState, { type, payload }) {
  switch (type) {
    case types.ADD_TODO_TO_DOING:
      return todo.merge({ selectedId: payload });
    case types.ADD_TODO:
      return addTodo(todo, payload);
    case types.DELETE_TODO:
      return removeTodo(todo, payload);
    case types.ADD_DONE:
      return addDone(todo, payload);
    case types.UPDATE_TODO:
      return updateTodo(todo, payload);
    case types.GET_TODO:
    case types.GET_DONE:
    case types.DELETE_DONE:
    default:
      return todo;
  }
}
