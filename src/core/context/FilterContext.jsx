"use client";
import { createContext, useEffect, useReducer } from "react";
import { shamsiToGregorian } from "../utils/date";
export const FilterContext = createContext();
const initialState = {
  query: { originId: "", destinationId: "", startDate: "", endDate: "" },
  dropDown: { origin: false, destination: false },
};
const reducer = (state, action) => {
  switch (action.type) {
    case "DESTINATION":
      return {
        ...state,
        dropDown: { origin: false, destination: !state.dropDown.destination },
      };
    case "ORIGIN":
      return {
        ...state,
        dropDown: { destination: false, origin: !state.dropDown.origin },
      };
    case "CLOSE_ALL":
      return {
        ...state,
        dropDown: { origin: false, destination: false },
      };
    case "ADD_QUERY":
      return {
        dropDown: { origin: false, destination: false },
        query: {
          ...state.query,
          [action.payload.name + "Id"]: action.payload.value,
        },
      };
    case "SET_DATE":
      const startDate = shamsiToGregorian(action.payload.startDate);
      const endDate = shamsiToGregorian(action.payload.endDate);
      return {
        ...state,
        query: {
          ...state.query,
          startDate,
          endDate,
        },
      };
    case "INITIAL_QUERY":
      return { ...state, query: action.payload };
  }
};

function FilterProvider({ children, searchParams }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (!searchParams) return;
    dispatch({ type: "INITIAL_QUERY", payload: searchParams });
  }, [searchParams]);
  return <FilterContext value={{ state, dispatch }}>{children}</FilterContext>;
}

export default FilterProvider;
