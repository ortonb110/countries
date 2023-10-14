/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { DARK, LIGHT } from "./Actions";

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
};

export default reducer;
