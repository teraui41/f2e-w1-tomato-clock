import { fromJS } from 'immutable';
import { INIT_DAY_TIME } from '../constants/common';
import { getDoneList, getTodoList } from '../utils/localStorage';

export const layoutState =fromJS({
  period: 'night',
  activeId: 'clock'
})

export const clockState = fromJS({
  isPlaying: false,
  countingTime: INIT_DAY_TIME,
})

export const reportState = fromJS({

})

export const todoListState = fromJS({
  todoList: getTodoList(),
  doneList: getDoneList(),
  selectedToDoId: ''
});
