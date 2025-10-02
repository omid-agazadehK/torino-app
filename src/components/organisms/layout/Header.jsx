import Image from "next/image";
import HamburgerIcon from "@/components/atoms/layout/HamburgerIcon";
import NavBar from "@/components/molecules/layout/NavBar";
import AccountControl from "./AccountControl";

function Header() {
  return (
    <header className="bg-header fixed  z-10 flex h-16 w-full max-w-[90rem] items-center justify-between rounded-b-xl px-8 py-3 shadow-md sm:h-20 md:py-4 lg:px-26 xl:px-31.5 2xl:rounded-b-xl">
      <HamburgerIcon className="block size-10 md:hidden" />
      <Image
        src="/images/torino-icon.webp"
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
