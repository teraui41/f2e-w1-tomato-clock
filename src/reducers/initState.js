import { fromJS } from 'immutable';
import { Colors } from '../constants/colors.config';
import { INIT_DAY_TIME } from '../constants/common';

const MOCK_DATA = [
  {
    id:'1',
    doneDate: null,
    content: 'TEST TODO LIST A'
  },
  {
    id:'2',
    doneDate: null,
    content: 'TEST TODO LIST B'
  },
  {
    id:'3',
    doneDate: null,
    content: 'TEST TODO LIST C'
  },
  {
    id:'4',
    doneDate: null,
    content: 'TEST TODO LIST D'
  },
  {
    id:'5',
    doneDate: null,
    content: 'TEST TODO LIST E'
  },
  {
    id:'6',
    doneDate: null,
    content: 'TEST TODO LIST F'
  }
];

export const layoutState =fromJS({
  period: 'day',
  activeId: 'clock'
})

export const clockState = fromJS({
  isPlaying: false,
  countingTime: INIT_DAY_TIME,
})

export const reportState = fromJS({

})

export const todoListState = fromJS({
  todoList: [],
  doneList: MOCK_DATA,
  selectedToDoId: ''
});
