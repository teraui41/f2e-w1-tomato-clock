import { connect } from 'react-redux'; 
import Menu from '../components/Menu';

const mapStateToProps = ({ layout, todoList }) => ({
  todoList: todoList.get('todoList')
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
