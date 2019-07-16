import types from "../constants/actionTypes";
import { layoutState } from "./initState";

export default function reducer(layout = layoutState, { type, payload }) {
  switch (type) {
    case types.SET_ACTIVE_ID:
      return layout.merge({ activeId: payload });
    case types.SET_PERIOD:
      return layout.merge({ period: payload });
    default:
      return layout;
  }
}
