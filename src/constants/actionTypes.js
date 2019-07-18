const createTypes = array =>
  array.reduce((currentTypes, nextType) => {
    return { ...currentTypes, [nextType]: nextType };
  }, {});

const actionTypes = createTypes([
  "SET_ACTIVE_ID",
  "SET_PERIOD",
  "ADD_TODO",
  "GET_TODO",
  "UPDATE_TODO",
  "DELETE_TODO",
  "ADD_DONE",
  "GET_DONE",
  "DELETE_DONE",
  "MINUS_SECOND",
  "STOP_COUNTING",
  "RESET_COUNTING",
  "ADD_TODO_TO_DOING",
  "RESET_TODO_TO_DOING"
]);

export default actionTypes;
