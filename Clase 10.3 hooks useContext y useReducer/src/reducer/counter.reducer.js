import { INCREMENT, DECREMENT, INCREMENT5, DECREMENT5 } from "./counter.action";

export const initState = {
  count: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    case INCREMENT5:
      return { count: state.count + action.payload };
    case DECREMENT5:
      return { count: state.count - 5 };
    default:
      return state;
  }
};
