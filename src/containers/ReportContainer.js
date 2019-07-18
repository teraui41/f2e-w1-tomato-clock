import Report from '../screens/ReportScreen';
import moment from 'moment';
import { connect } from 'react-redux';

const getWeekTodoes = ( todoList) => {
  const currentWeekNumber = moment().week();
  const list = todoList.get('doneList');

  return list.reduce((sum, todo) => {
    const weekNumber = moment(todo.get('doneDate')).week();
    return weekNumber === currentWeekNumber
      ? sum + todo.get('tomatoes').size
      : sum;
  }, 0);
}

const getTodayTomatpes = (todoList) => {
  const TodayStr = moment().format('YYYY-MM-DD');
  const list = todoList.get('doneList');

  return list.reduce((sum, todo) => {
    const doneDayStr = moment(todo.get('doneDate')).format('YYYY-MM-DD');
    return TodayStr === doneDayStr
      ? sum + todo.get('tomatoes').size
      : sum;
  }, 0);
}

const mapStateToProps = ({todoList, layout }) => ({
  weekTodoes: getWeekTodoes(todoList),
  todayTomatoes: getTodayTomatpes(todoList),
  todayDoneNumber:  todoList.get('doneList').size,
  todayTodoNumber:  todoList.get('todoList').size,
  period: layout.get('period')
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Report)
