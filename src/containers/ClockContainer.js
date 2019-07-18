import { connect } from 'react-redux';
import Clock from '../screens/ClockScreen';
import { setPeriodAction } from '../actions/layoutActions';
import { deleteTodoAction, updateTodoAction } from '../actions/todoActions';
import { minusSecondAction, stopCountingAction, resetCountingAction } from '../actions/clockActions';

const mapStateToProps = ({ layout, clock, todoList }) => ({
  period: layout.get('period'),
  isPlaying: clock.get('isPlaying'),
  todoList: todoList.get('todoList'),
  selectedId: todoList.get('selectedId'),
  countingTime: clock.get('countingTime')
});

const mapDispatchToProps = dispatch => ({
  minusSecond: () => {
    dispatch(minusSecondAction());
  },
  deleteTodo: payload => {
    dispatch(deleteTodoAction(payload));
  },
  stopCounting: () => {
    dispatch(stopCountingAction());
  },
  resetCounting: payload => {
    dispatch(resetCountingAction(payload));
  },
  setPeriod: payload => {
    dispatch(setPeriodAction(payload))
  },
  updateTodo: payload => {
    dispatch(updateTodoAction(payload));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Clock)
