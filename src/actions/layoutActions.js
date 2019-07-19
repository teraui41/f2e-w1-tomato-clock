import types from '../constants/actionTypes'

export const setActiveIdAction = payload => ({
  type: types.SET_ACTIVE_ID,
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

export const initSelectedIdAction = () => ({
  type: types.INIT_SELECTED_ID
})
