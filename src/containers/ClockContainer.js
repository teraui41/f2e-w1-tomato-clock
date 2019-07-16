import Clock from '../screens/ClockScreen';
import { connect } from 'react-redux';

const mapStateToProps = ({ layout }) => ({
  period: layout.get('period')
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Clock)
