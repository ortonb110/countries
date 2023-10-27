/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import {
  DARK,
  LIGHT,
  FETCH_BEGIN,
  FETCH_SUCCESS,
  FETCH_ERROR,
  HANDLE_INPUT,
  SEARCH_SUCCESS,
  SEARCH_FAILED,
  SINGLE_SUCCESS,
} from "./Actions";

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
      theme: "light",
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
      countries: action.payload.data,
    };
  }
  if (action.type === FETCH_ERROR) {
    return {
      ...state,
      isLoading: false,
      fetchError: action.payload.errorMessage,
      loadFailed: true
    };
  }
  if (action.type === HANDLE_INPUT) {
    return {
      ...state,
      searchText: action.payload.searchInput,
    };
  }
  if (action.type === SEARCH_SUCCESS) {
    return {
      ...state,
      searchCountry: action.payload.searchResult,
    };
  }
  if (action.type === SEARCH_FAILED) {
    return {
      ...state,
      countries: action.payload.searchResult,
    };
  }
  if (action.type === SINGLE_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      singleCountry: action.payload.data,
    };
  }
};

export default reducer;
