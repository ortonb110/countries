/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useReducer, useState, useEffect } from "react";
import reducer from "./Reducer";
import axios from "axios";
import {
  FETCH_BEGIN,
  FETCH_SUCCESS,
  FETCH_ERROR,
  HANDLE_INPUT,
  SEARCH_SUCCESS,
  SEARCH_FAILED,
} from "./Actions";
const AppContext = React.createContext();

const initialState = {
  theme: "",
  isLoading: false,
  countries: [],
  searchText: "",
  searchCountry: [],
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
    // dispatch({ type: FETCH_BEGIN });
    // try {
    //   const { data } = await axios.get(
    //     "https://restcountries.com/v2/all?fields=name;fields=currencies;fields=population;fields=flags;fields=region;fields=capital"
    //   );
    //   dispatch({ type: FETCH_SUCCESS, payload: { data } });
    // } catch (error) {
    //   dispatch({ type: FETCH_ERROR });
    //   console.log(error);
    // }
  };

  const searchCountries = (search) => {
    
    let searchResult;
    try {
      searchResult = state.countries.filter((country) => {
        return country.name.toLowerCase().includes(search.toLowerCase());
      });
    } catch (error) {
      console.log(error);
    }

    if (searchResult) {
      dispatch({ type: SEARCH_SUCCESS, payload: { searchResult } });
    } else {
      searchResult = state.countries;
      dispatch({ type: SEARCH_FAILED, payload: searchResult });
    }
  };

  //Call Dark mode and get countries from initial render
  useEffect(() => {
    darkModeSupport();
    getCountriesData();
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
  };

  const handleChangeInput = (searchInput) => {
    searchCountries(searchInput);
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
        toggleColorScheme,
        getCountriesData,
        handleChangeInput,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { useAppContext, AppProvider };
