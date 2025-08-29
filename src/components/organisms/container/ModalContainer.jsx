function ModalContainer({ children, onClose, isModal }) {
  if (!isModal) return null;
  return (
    <div className="fixed w-lvw h-lvh top-0 left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
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

