import { useEffect } from "react";

function ModalContainer({ children, onClose, isModal }) {
  useEffect(() => {
    if (isModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModal]);
  if (!isModal) return null;

  return (
    <div className="fixed top-0 left-1/2 z-10 flex h-lvh w-lvw -translate-x-1/2 items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-xs"
        onClick={onClose}
      ></div>

      <div className="relative z-30" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default ModalContainer;
