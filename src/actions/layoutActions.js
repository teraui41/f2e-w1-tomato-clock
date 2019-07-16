import types from '../constants/actionTypes'

export const SetActiveIdAction = payload => ({
  type: types.SET_ACTIVE_ID,
  payload
});

export const addTodoToDoingAction = payload => ({
  type: types.ADD_TODO_TO_DOING,
  payload
});

export const resetTodoToDoingAction = payload => ({
  type: types.RESET_TODO_TO_DOING,
  payload
});

export const setPeriodAction = payload => ({
  type: types.SET_PERIOD,
  payload
})
