"use client";
import { createContext, useState } from "react";

export const ModalContext = createContext();

function ModalProvider({ children }) {
  const [isModal, setIsModal] = useState(false);
  const [step, setStep] = useState(1);
  return (
    <ModalContext value={{ isModal, setIsModal, step, setStep }}>
      {children}
    </ModalContext>
  );
}

export default ModalProvider;
