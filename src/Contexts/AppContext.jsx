/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Context, React, useContext, useReducer, useState } from "react";
import { reducer } from "./Reducer";
const AppContext = React.createContext();

const initialState = {
  theme: "light",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <AppContext.Provider value={{ ...state, dispatch }}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { useAppContext, AppProvider };
