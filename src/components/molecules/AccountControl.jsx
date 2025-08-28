import Icons from "../atoms/Icons";

function AccountControl() {
  return (
    <button className="py-2 px-4 text-lg rounded-xl border-2 border-primary text-primary flex items-center gap-x-1 hover:bg-primary hover:text-white  ease-out transition-colors duration-300 ">
      <Icons name="profile" className="size-6 " />
      ورود | خروج
    </button>
  );
}

export default AccountControl;
