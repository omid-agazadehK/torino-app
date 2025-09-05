"use client";
import { createContext } from "react";

export const ToursContext = createContext();

function ToursProvider({ tours, allTours, children }) {
  return <ToursContext value={{ tours, allTours }}>{children}</ToursContext>;
}

export default ToursProvider;
