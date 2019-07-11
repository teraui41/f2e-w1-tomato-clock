import { combineReducers } from "redux";
import clock from "./clockReducer";
import report from "./reportReducer";
import todoList from "./todoListReducer";

export default combineReducers({
  clock,
  report,
  todoList
});
