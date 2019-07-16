import { connect } from 'react-redux';
import App from '../App';
import { SetActiveIdAction, addTodoToDoingAction } from '../actions/layoutActions';

const mapStateToProps = ({ layout, clock, report, todoList }) => ({
  period: layout.get('period'),
  isPlaying: clock.get('isPlaying'),
  activeId: layout.get('activeId'),
  timeType: layout.get('timeType'),
  todoList: todoList.get('todoList'),
  selectedId: todoList.get('selectedId')
})

const mapDispatchToProps = dispatch => ({
  setActiveId: payload => {
    dispatch(SetActiveIdAction(payload));
  },
  addToDoToDoing: payload => {
    dispatch(addTodoToDoingAction(payload));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
