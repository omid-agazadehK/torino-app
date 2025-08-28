"use client";
import { routes } from "@/core/constants/constans";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBar() {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex gap-x-10">
        {routes?.map((route, index) => (
          <li key={index}>
            <Link
              href={route.href}
              className={`hover:text-primary transition-colors duration-200  ${
                route.href === pathname ? "text-primary" : null
              }`}
            >
              {route.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
