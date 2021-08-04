import { ActionTypes } from "../constants/action-types";
const intialState = {
  results: [],
};

export const resultsReducer = (state = intialState, { type, payload }) => {
    switch (type) {
      case ActionTypes.SET_RESULTS:
        return { ...state, results: payload };
      default:
        return state;
    }
  };