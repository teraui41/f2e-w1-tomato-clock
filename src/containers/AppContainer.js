import { connect } from 'react-redux';
import App from '../App';
import { SetActiveIdAction } from '../actions/layoutActions';

const mapStateToProps = ({ layout, clock, report, todoList }) => ({
  period: layout.get('period'),
  activeId: layout.get('activeId'),
  timeType: layout.get('timeType'),
  todoList: todoList.get('todoList'),
  selectedId: todoList.get('selectedId')
})

const mapDispatchToProps = dispatch => ({
  setActiveId: payload => {
    dispatch(SetActiveIdAction(payload));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
