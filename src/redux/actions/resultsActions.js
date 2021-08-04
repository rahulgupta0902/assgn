import { ActionTypes } from "../constants/action-types";

export const setResults = (results) => {
  return {
    type: ActionTypes.SET_RESULTS,
    payload: results,
  };
};
