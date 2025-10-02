function ModalButton({ isPending, title }) {
  return (
    <button
      type="submit"
      disabled={isPending}
      className={`bg-primary hover:bg-secondary w-full font-dana-medium rounded-lg py-3.5 text-lg text-white transition-colors duration-200 sm:w-125 xs:w-80  ${
        isPending ? "cursor-not-allowed grayscale" : null
      }`}
    >
      {title}
    </button>
  );
}

export default ModalButton;
