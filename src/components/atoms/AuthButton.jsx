import Icon from "./Icon";

function AuthButton({ setIsModal }) {
  return (
    <button
      onClick={() => setIsModal(true)}
      className="font-dana-medium border-primary text-primary hover:bg-primary flex items-center gap-x-1 rounded-xl border-2 px-4 py-1.5 text-lg transition-colors duration-300 ease-out hover:text-white"
    >
      <Icon name="profile" className="size-6" />
      ورود | خروج
    </button>
  );
}

export default AuthButton;
