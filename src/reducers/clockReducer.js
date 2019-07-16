import types from '../constants/actionTypes';
import { clockState } from './initState';

const minusSecond = (clock) => {
  const currentSecond = clock.get('countingTime');
  return clock.merge({ countingTime: currentSecond - 1000, isPlaying: true });
}

const resetCounting = (clock, payload) => {
  return clock.merge({ countingTime: payload})
}

export default function reducer(clock = clockState, {type, payload}) {
  switch (type) {
    case types.STOP_COUNTING:
      return clock.merge({ isPlaying: false });
    case types.RESET_COUNTING:
      return resetCounting(clock, payload)
    case types.MINUS_SECOND:
      return minusSecond(clock)
    default:
      return clock
  }
}