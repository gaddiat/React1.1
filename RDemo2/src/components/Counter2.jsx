import React, { useReducer } from "react";
import { useState } from "react";

const Counter2 = () => {
  const [count, setCount] = useState(0);
  //const [state, dispatch] = useReducer(reducer,0);
  const [state, dispatch] = useReducer(reducer, { count: 0, incrementBy: 1 });
  function reducer(state, action) {
    // return action.type === "increment"
    //   ? state + action.payload
    //   : action.type === "decrement"
    //   ? state - action.payload
    //   : state;
    return action.type === "increment"
      ? { ...state, count: state.count + state.incrementBy }
      : action.type === "decrement"
      ? { ...state, count: state.count - state.incrementBy }
      : action.type === "setIncrementBy"
      ? { ...state, incrementBy: action.payload }
      : { ...state, count: state.count };
  }
  return (
    <div>
      {/* <div>
        {count}
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
      </div> */}
      <div>
        <input
          onChange={(e) =>
            dispatch({
              type: "setIncrementBy",
              payload: Number(e.target.value),
            })
          }
          value={state.incrementBy}
        />
        {state.count}
        <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement", payload: 2 })}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter2;
