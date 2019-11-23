var initialState = { day: [] };
var ar = [];
const RootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_DAY":
      ar = state.day;
      if (ar.length < 7) ar.push(payload);
      return { day: ar };
    case "REMOVE_DAY":
      ar = state.day;
      ar.pop();
      return { day: ar };
    default:
      return state;
  }
};

export default RootReducer;
