function ModalButton({ isPending, title }) {
  return (
    <button
      type="submit"
      disabled={isPending}
      className={`  bg-primary w-125 hover:bg-secondary text-lg font-dana-medium transition-colors duration-200 py-3.5 text-white rounded-lg ${
        isPending ? "grayscale cursor-not-allowed" : null
      }`}
    >
      {title}
    </button>
  );
}

export default ModalButton;
