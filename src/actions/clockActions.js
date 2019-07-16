import types from '../constants/actionTypes'

export const minusSecondAction = payload => ({
  type: types.MINUS_SECOND,
  payload
});

export const stopCountingAction = payload => ({
  type: types.STOP_COUNTING,
  payload
});

export const resetCountingAction = payload => ({
  type: types.RESET_COUNTING,
  payload
});

