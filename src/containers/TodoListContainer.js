import ToDoList from '../screens/ToDoListScreen';
import { connect } from 'react-redux';

const mapStateToProps = ({ todoList }) => ({
  todoList: todoList.get('todoList'),
  doneList: todoList.get('doneList'),
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)
