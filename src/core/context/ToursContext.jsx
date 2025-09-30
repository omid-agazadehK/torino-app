"use client";
import { createContext} from "react";

export const ToursContext = createContext();

function ToursProvider({ tours, allToursPromise, children }) {
  return <ToursContext value={{ tours, allToursPromise }}>{children}</ToursContext>;
}

export default ToursProvider;
