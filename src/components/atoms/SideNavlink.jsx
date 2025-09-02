import Link from "next/link";
import Icon from "./Icon";
import { usePathname } from "next/navigation";

function SideNavlink({ route }) {
  const { icon, href, title } = route;
  const pathName = usePathname();
  return (
    <li
      className={`${pathName === href ? "text-primary" : "text-dark"} flex items-center gap-x-2`}
    >
      <Icon name={icon} className="size-5" />
      <Link href={href}>{title}</Link>
    </li>
  );
}

export default SideNavlink;
