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
  SINGLE_SUCCESS,
} from "./Actions";
const AppContext = React.createContext();

const initialState = {
  theme: "",
  isLoading: false,
  countries: [],
  searchText: "",
  searchCountry: [],
  singleCountry: [],
  fetchError: '',
  loadFailed: false
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
    dispatch({ type: FETCH_BEGIN });
    try {
      const { data } = await axios.get(
        "https://restcountries.com/v2/all?fields=name;fields=currencies;fields=population;fields=flags;fields=region;fields=capital"
      );
      dispatch({ type: FETCH_SUCCESS, payload: { data } });
    } catch (error) {
      const errorMessage = error.message
      dispatch({type: FETCH_ERROR, payload: {errorMessage}})
    }
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

  const filterSearch = (filter) => {
    let searchResult;
    try {
      searchResult = state.countries.filter((country) => {
        return country.region.toLowerCase().includes(filter.toLowerCase());
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

  const handleChangeInput = (searchInput) => {
    searchCountries(searchInput);
  };

  const handleFilter = (filter) => {
    filterSearch(filter);
  };

  const getSingleCountry = async (name) => {
    dispatch({ type: FETCH_BEGIN });
    try {
      const { data } = await axios.get(
        `https://restcountries.com/v2/name/${name}?fields=name;fields=currencies;fields=population;fields=flags;fields=region;fields=capital;fields=nativeName;fields=topLevelDomain;fields=subregion;fields=borders`
      );
      dispatch({ type: SINGLE_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({ type: FETCH_ERROR });
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
        toggleColorScheme,
        getCountriesData,
        handleChangeInput,
        handleFilter,
        getSingleCountry,
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
