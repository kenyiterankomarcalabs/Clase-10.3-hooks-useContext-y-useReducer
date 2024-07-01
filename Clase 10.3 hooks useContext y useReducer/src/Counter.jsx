import { useReducer } from "react";
import { initState, reducer } from "./reducer/counter.reducer";
import {
  DECREMENT,
  DECREMENT5,
  INCREMENT,
  INCREMENT5,
} from "./reducer/counter.action";

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: INCREMENT })}>Increment</button>
      <button onClick={() => dispatch({ type: DECREMENT })}>Decrement</button>
      <button onClick={() => dispatch({ type: INCREMENT5, payload: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: DECREMENT5 })}>
        Decrement 5
      </button>
    </div>
  );
};

export default Counter;
