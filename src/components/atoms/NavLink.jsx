"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ route }) {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={route.href}
        className={`hover:text-primary transition-colors duration-200 ${
          route.href === pathname ? "text-primary" : null
        }`}
      >
        {route.title}
      </Link>
    </li>
  );
}

export default NavLink;
