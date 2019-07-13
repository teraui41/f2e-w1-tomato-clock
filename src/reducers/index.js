import { combineReducers } from "redux";
import clock from "./clockReducer";
import layout from './layoutReducer';
import report from "./reportReducer";
import todoList from "./todoListReducer";

export default combineReducers({
  clock,
  report,
  layout,
  todoList
});
