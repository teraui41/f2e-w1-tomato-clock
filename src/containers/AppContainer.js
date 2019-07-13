import { connect } from 'react-redux';
import App from '../App';

const mapStateToProps = ({ layout, clock, report, todoList }) => ({
  activeId: layout.activeId
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
