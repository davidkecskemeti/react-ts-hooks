import { useReducer } from "react";

const initialState = {
  counter: 100,
};

enum TYPES {
  INCREMENT = "increment",
  DECREMENT = "decrement",
}

type ACTIONTYPES =
  | { type: TYPES.INCREMENT; payload: number }
  | { type: TYPES.DECREMENT; payload: number };

function counterRecuder(state: typeof initialState, action: ACTIONTYPES) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return {
        ...state,
        counter: state.counter + action.payload,
      };

    case TYPES.DECREMENT:
      return {
        ...state,
        counter: state.counter - action.payload,
      };

    default:
      throw new Error("Bad action");
  }
}

function useReducerComponent() {
  const [state, dispatch] = useReducer(counterRecuder, initialState);

  return (
    <div>
      <div>{state.counter}</div>
      <div>
        <button
          onClick={() =>
            dispatch({
              type: TYPES.INCREMENT,
              payload: 10,
            })
          }
        >
          Increment
        </button>
        <button
          onClick={() =>
            dispatch({
              type: TYPES.DECREMENT,
              payload: 5,
            })
          }
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default useReducerComponent;
