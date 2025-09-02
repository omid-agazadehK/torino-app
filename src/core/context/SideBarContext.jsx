"use client";
import { createContext, useState } from "react";

export const SideBarContext = createContext();

function SideBarProvider({ children }) {
  const [isSideBar, setIsSideBar] = useState(false);
  return (
    <SideBarContext value={{ setIsSideBar, isSideBar }}>
      {children}
    </SideBarContext>
  );
}

export default SideBarProvider;
