"use client";
import Icon from "@/components/atoms/Icon";
import Link from "next/link";
import { usePathname } from "next/navigation";

const dashboardRoute = [
  { route: "profile", title: "پروفایل" },
  { route: "my-tours", title: "تور های من" },
  { route: "transactions", title: "تراکنش ها" },
];

function Layout({ children }) {
  const pathname = usePathname();
  const s = dashboardRoute.filter((name) => pathname.includes(name.route))[0]
    .route;
  return (
    <main className="grid flex-1 grid-cols-24 gap-x-4.5 pt-9 lg:container">
      <section className="col-span-6 flex h-fit flex-col divide-y divide-black/20 rounded-xl border border-black/20 *:px-3 *:py-5">
        {dashboardRoute.map((item, index) => (
          <Link
            key={index}
            href={`${item.route}`}
            className={`${s === item.route ? "bg-primary/15 text-primary" : "bg-transparent text-black"} relative  transition-colors duration-500`}
          >
            <Icon />
            <span>{item.title}</span>
          </Link>
        ))}
      </section>
      {children}
    </main>
  );
}

export default Layout;
