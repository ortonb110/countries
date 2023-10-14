/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useReducer, useState, useEffect } from "react";
import reducer from "./Reducer";

const AppContext = React.createContext();

const initialState = {
  theme: "",
};

//Support for Operating system Color Scheme
const darkModeSupport = () => {
  // if (
  //   localStorage.theme === "dark" ||
  //   (!("theme" in localStorage) &&
  //     window.matchMedia("(prefers-color-scheme: dark)").matches)
  // ) {
  //   document.documentElement.classList.add("dark");
  //   localStorage.setItem("theme", "dark");
  // } else {
  //   document.documentElement.classList.remove("dark");
  //   localStorage.setItem("theme", "light");
  // }
  // console.log(localStorage.theme);

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //Call Dark mode
  useEffect(() => {
    darkModeSupport();
    // if (
    //   localStorage.theme === "dark" ||
    //   (!("theme" in localStorage) &&
    //     window.matchMedia("(prefers-color-scheme: dark)").matches)
    // ) {
    //   document.documentElement.classList.add("dark");
    //   localStorage.theme = 'dark';
    // } else {
    //   document.documentElement.classList.remove("dark");
    //   localStorage.setItem("theme", "light");
    // }
  }, []);

  const toggleColorScheme = () => {
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      dispatch({ type: "DARK" });
    } else {
      localStorage.setItem("theme", "light");
      dispatch({ type: "LIGHT" });
    }
    console.log(state.theme);
  };

  return (
    <AppContext.Provider value={{ ...state, dispatch, toggleColorScheme }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { useAppContext, AppProvider };
