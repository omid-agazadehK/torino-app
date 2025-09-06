import Image from "next/image";
import NavBar from "../molecules/NavBar";

import AccountControl from "./AccountControl";
import HamburgerIcon from "../atoms/HamburgerIcon";

function Header() {
  return (
    <header className="bg-header py-3 flex h-16 w-full max-w-[90rem] items-center justify-between px-8 drop-shadow-sm sm:h-20 md:py-4 lg:px-26 xl:px-31.5 2xl:rounded-b-xl">
      <HamburgerIcon className="block size-10 md:hidden" />
      <Image
        src="/images/torino-icon.png"
        alt="torino icon"
        width={150}
        height={30}
        className="hidden h-11 w-36.5 md:block"
        priority
      />
      <NavBar />
      <AccountControl />
    </header>
  );
}

export default Header;
