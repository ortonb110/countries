/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useReducer, useState, useEffect } from "react";
import reducer from "./Reducer";
import axios from "axios";
import { FETCH_BEGIN, FETCH_SUCCESS, FETCH_ERROR } from "./Actions";
const AppContext = React.createContext();

const initialState = {
  theme: "",
  isLoading: false,
  countries: [],
};

//Support for Operating system Color Scheme
const darkModeSupport = () => {
  
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

  const getCountriesData = async () => {
    dispatch({type: FETCH_BEGIN});
    try {
      const {data} = await axios.get('https://restcountries.com/v3.1/independent?status=true');
      dispatch({type: FETCH_SUCCESS, payload: data})
      console.log(data);
    } catch (error) {
      dispatch({type: FETCH_ERROR})
      console.log(error);
    }
  }

  //Call Dark mode
  useEffect(() => {
    darkModeSupport();
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
    <AppContext.Provider value={{ ...state, dispatch, toggleColorScheme, getCountriesData }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { useAppContext, AppProvider };
