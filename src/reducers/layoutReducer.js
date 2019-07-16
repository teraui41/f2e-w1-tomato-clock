import types from '../constants/actionTypes';
import { layoutState } from './initState';

export default function reducer(layout = layoutState, {type, payload}) {
  switch (type) {
    case types.SET_ACTIVE_ID:
      return layout.merge({ activeId: payload });
    default:
      return layout
  }
}