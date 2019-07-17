import { connect } from "react-redux";
import App from "../App";
import { resetCountingAction } from "../actions/clockActions";
import {
  addDoneAction,
  addTodoAction,
  deleteTodoAction,
  addTodoToDoingAction
} from "../actions/todoActions";
import { setActiveIdAction, setPeriodAction } from "../actions/layoutActions";

const mapStateToProps = ({ layout, clock, report, todoList }) => ({
  period: layout.get("period"),
  isPlaying: clock.get("isPlaying"),
  activeId: layout.get("activeId"),
  timeType: layout.get("timeType"),
  todoList: todoList.get("todoList"),
  selectedId: todoList.get("selectedId")
});

const mapDispatchToProps = dispatch => ({
  setActiveId: payload => {
    dispatch(setActiveIdAction(payload));
  },
  addTodo: payload => {
    dispatch(addTodoAction(payload));
  },
  addDone: payload => {
    dispatch(deleteTodoAction(payload));
  },
  deleteTodo: payload => {
    dispatch(addDoneAction(payload));
  },
  addToDoToDoing: payload => {
    dispatch(addTodoToDoingAction(payload));
  },
  resetCounting: payload => {
    dispatch(resetCountingAction(payload));
  },
  setPeriod: payload => {
    dispatch(setPeriodAction(payload));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
