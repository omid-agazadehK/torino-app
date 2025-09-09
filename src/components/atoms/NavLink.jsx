"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

function NavLink({ route }) {
  const pathname = usePathname();
  const isPath =
    pathname === route.href || pathname.split("/", 2)[1].startsWith(route.href);
  return (
    <li>
      <Link
        href={route.href}
        className={`hover:text-primary transition-colors duration-200 ${
          isPath ? "text-primary" : null
        }`}
      >
        {route.title}
      </Link>
    </li>
  );
}

export default NavLink;
