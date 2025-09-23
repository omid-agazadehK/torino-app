"use client";
import Icon from "@/components/atoms/Icon";
import Link from "next/link";
import { usePathname } from "next/navigation";

const dashboardRoute = [
  { route: "profile", title: "پروفایل", Icon: "profile-1" },
  { route: "my-tours", title: "تور های من", Icon: "sun-fog" },
  { route: "transactions", title: "تراکنش ها", Icon: "convert-card" },
];

function Layout({ children }) {
  const pathname = usePathname();
  const isRoute = dashboardRoute.filter((name) =>
    pathname.includes(name.route),
  )[0].route;
  return (
    <main className="grid w-full flex-1 grid-cols-12 gap-x-4 py-4 max-lg:px-7.5 md:py-9 lg:container lg:gap-x-8">
      <section className="col-span-12 w-full flex h-fit max-md:justify-between divide-y divide-black/20 overflow-hidden border-b border-black/20 *:px-3 *:py-2 max-md:mb-6 max-sm:text-xs md:col-span-3 md:flex-col md:rounded-xl md:border md:*:py-5">
        {dashboardRoute.map((item, index) => (
          <Link
            key={index}
            href={`${item.route}`}
            className={`${isRoute === item.route ? "md:bg-primary/15 border-primary text-primary max-md:border-b-2" : "border-none bg-transparent text-black"} relative flex items-center gap-x-1 transition-colors duration-500`}
          >
            <Icon className="size-4" name={item.Icon} />
            <span>{item.title}</span>
          </Link>
        ))}
      </section>
      {children}
    </main>
  );
}

export default Layout;
