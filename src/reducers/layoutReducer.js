import { layoutState } from './initState';

export default function reducer(layout = layoutState, {type, payload}) {
  switch (type) {
    case 'SET_ACTIVE_ID':
      const activeId = payload;
      return { ...layout ,activeId };
    default:
      return layout
  }
}