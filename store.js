import redux, { createStore } from "redux";
const initialState = {
  events: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA":
      return { fetch: action.data };
    default:
      return state;
  }
};

const store = createStore(reducer);
