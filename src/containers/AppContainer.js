import { connect } from 'react-redux';
import App from '../App';
import { SetActiveIdAction } from '../actions/layoutActions';

const mapStateToProps = ({ layout, clock, report, todoList }) => ({
  activeId: layout.activeId
})

const mapDispatchToProps = dispatch => ({
  setActiveId: payload => {
    dispatch(SetActiveIdAction(payload));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
