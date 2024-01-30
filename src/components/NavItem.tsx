"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon, label }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className="relative px-2">
      <Link
        href={href}
        className={`flex ${
          isActive ? "bg-slate-100" : "hover:bg-slate-100"
        } w-full space-x-2 rounded-md px-10 py-4`}
      >
        <span>{icon}</span>
        <span className="">{label}</span>
      </Link>
    </li>
  );
};

export default NavItem;