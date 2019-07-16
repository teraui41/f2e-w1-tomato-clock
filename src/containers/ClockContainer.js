import { connect } from 'react-redux';
import Clock from '../screens/ClockScreen';
import { setPeriodAction } from '../actions/layoutActions';
import { minusSecondAction, stopCountingAction, resetCountingAction } from '../actions/clockActions';

const mapStateToProps = ({ layout, clock }) => ({
  period: layout.get('period'),
  countingTime: clock.get('countingTime'),
  isPlaying: clock.get('isPlaying')
});

const mapDispatchToProps = dispatch => ({
  minusSecond: () => {
    dispatch(minusSecondAction());
  },
  stopCounting: () => {
    dispatch(stopCountingAction());
  },
  resetCounting: payload => {
    dispatch(resetCountingAction(payload));
  },
  setPeriod: payload => {
    dispatch(setPeriodAction(payload))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Clock)
