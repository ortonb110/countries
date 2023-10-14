/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { DARK, LIGHT, FETCH_BEGIN, FETCH_SUCCESS, FETCH_ERROR } from "./Actions";

const reducer = (state, action) => {
  if (action.type === DARK) {
    return {
      ...state,
      theme: "dark",
    };
  }
  if (action.type === LIGHT) {
    return {
      ...state,
      theme: "LIGHT",
    };
  }
  if (action.type === FETCH_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === FETCH_SUCCESS) {
    return {
      ...state,
      isLoading: false,
    };
  }
  if (action.type === FETCH_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }
};

export default reducer;
