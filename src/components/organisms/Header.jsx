import Image from "next/image";
import NavBar from "../molecules/NavBar";
import Icons from "../atoms/Icons";
import AccountControl from "../molecules/AccountControl";

function Header() {
  return (
    <header className="max-w-[90rem] px-31.5 flex items-center justify-between w-full py-4 bg-header drop-shadow-xl">
      <Image
        src="/images/torino-icon.png"
        alt="torino icon"
        width={150}
        height={44}
        priority
      />
      <NavBar />
      <AccountControl />
    </header>
  );
}

export default Header;
