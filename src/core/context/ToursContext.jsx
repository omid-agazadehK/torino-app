"use client";
import { createContext } from "react";

export const ToursContext = createContext();

function ToursProvider({ tours, children }) {
  return <ToursContext value={{ tours }}>{children}</ToursContext>;
}

export default ToursProvider;
