import NavLink from "@/components/atoms/layout/NavLink";
import { routes } from "@/core/constants/constans";

function NavBar() {
  return (
    <nav>
      <ul className="md:flex lg:gap-x-10 md:gap-x-7 hidden ">
        {routes?.map((route, index) => (
          <NavLink route={route} key={index}/>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
