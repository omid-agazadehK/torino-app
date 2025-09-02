"use client";
import TenStackReactQuery from "./TenStackReactQuery";
import ModalProvider from "../context/ModalContext";
import { ToastContainer } from "react-toastify";
import SideBarProvider from "../context/SideBarContext";

function Provider({ children }) {
  return (
    <TenStackReactQuery>
      <SideBarProvider>
        <ModalProvider>{children}</ModalProvider>
      </SideBarProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        pauseOnHover={true}
        draggable={true}
      />
    </TenStackReactQuery>
  );
}

export default Provider;
