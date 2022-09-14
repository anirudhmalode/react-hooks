import React, { useReducer } from "react";

const initialState = 0;

const reducer = (preState, action) => {
  switch(action){
    case 'inc':
      return preState + 1;
    case 'dec':
      return preState - 1;
    case 'reset':
      return 0;
    default:
      return initialState;
  }
}

const UseReducer = () => {
  const [ count, dispatch ] = useReducer(reducer, initialState);

  return (
    <div className="hook__container">
      <h3>UseReducer Hook - State Management</h3>
      <h6> Count is - { count } </h6>
      <button onClick={() => dispatch("inc")}> Increment </button>
      <button onClick={() => dispatch("dec")}> Decrement </button>
      <button onClick={() => dispatch("reset")}> Reset </button>
    </div>
  );
};

export default UseReducer;
