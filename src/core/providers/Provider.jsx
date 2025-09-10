"use client";
import TenStackReactQuery from "./TenStackReactQuery";
import ModalProvider from "../context/ModalContext";
import { ToastContainer } from "react-toastify";
import SideBarProvider from "../context/SideBarContext";
import AuthProvider from "../context/AuthContext";

function Provider({ children }) {
  return (
    <TenStackReactQuery>
      <AuthProvider>
        <SideBarProvider>
          <ModalProvider>{children}</ModalProvider>
        </SideBarProvider>
      </AuthProvider>
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
