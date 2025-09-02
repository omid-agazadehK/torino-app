"use client";
import { SideBarContext } from "@/core/context/SideBarContext";
import { use } from "react";
import SideNavBar from "../molecules/SideNavBar";

function SideBar() {
  const { isSideBar } = use(SideBarContext);
  return (
    <div
      className={`${isSideBar ? "z-10 bg-black/40 backdrop-blur-xs" : "-z-10 bg-none backdrop-blur-none"} fixed top-0 right-0 h-lvh w-lvw transition-all duration-200`}
    >
      <SideNavBar />
    </div>
  );
}

export default SideBar;
