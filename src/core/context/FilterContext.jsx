"use client";
import { createContext, useReducer } from "react";
export const FilterContext = createContext();
const initialState = {
  query: { origin: "", destination: "", startAt: "", endThis: "" },
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
        ...state,
        query: { ...state.query, [action.payload.name]: action.payload.value },
      };
  }
};

function FilterProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return <FilterContext value={{ state, dispatch }}>{children}</FilterContext>;
}

export default FilterProvider;
