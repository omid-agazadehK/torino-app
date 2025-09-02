import { use } from "react";
import Icon from "./Icon";
import { ModalContext } from "@/core/context/ModalContext";

function AuthButton({ setIsModal }) {
  const { setStep } = use(ModalContext);

  return (
    <button
      onClick={() => {
        setIsModal(true);
        setStep(1);
      }}
      className="font-dana-medium border-primary text-primary hover:bg-primary flex items-center gap-x-1 rounded-xl border-2 p-2 text-lg transition-colors duration-300 ease-out hover:text-white md:px-4 md:py-1.5"
    >
      <Icon name="profile" className="hidden size-6 md:block" />
      <Icon name="logout" className="block size-6 md:hidden" />
      <span className="hidden md:block">ورود | خروج</span>
    </button>
  );
}

export default AuthButton;
