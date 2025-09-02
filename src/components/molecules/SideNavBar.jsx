import { routes } from "@/core/constants/constans";
import { SideBarContext } from "@/core/context/SideBarContext";
import useClickOutside from "@/core/hooks/useClickOutSide";
import { use, useRef } from "react";
import SideNavlink from "../atoms/SideNavlink";

function SideNavBar() {
  const { isSideBar, setIsSideBar } = use(SideBarContext);

  const ref = useRef();
  useClickOutside(ref, () => setIsSideBar(false));

  return (
    <nav
      ref={ref}
      className={`transition-right bg-background fixed top-0 h-lvh w-50 rounded-l-xl px-3 py-8 duration-200 sm:w-60 ${
        isSideBar ? "right-0" : "-right-full"
      }`}
    >
      <ul className="text-dark flex flex-col gap-y-5.5">
        {routes?.map((route, index) => (
          <SideNavlink key={index} route={route} />
        ))}
      </ul>
    </nav>
  );
}

export default SideNavBar;
