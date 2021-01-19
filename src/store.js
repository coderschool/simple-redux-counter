import { createStore } from "redux";

const initialState = {
  todoCount: 0,
  otherThing: 0,
};

// Actions are always JavaScript objects
/*
 {
     type: "name of action",
     payload: "optional data"
 }
*/

const reducer = (state = initialState, action) => {
  console.log("Received action: ", action);
  console.log("State is ", state);
  if (action.type === "increment") {
    return {
      ...state,
      todoCount: state.todoCount + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      ...state,
      todoCount: state.todoCount - 1,
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
