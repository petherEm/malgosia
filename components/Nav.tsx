"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "what I do",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8 ">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname &&
              "text-[#b629dc] border-b-2 border-[#b629dc]"
            } capitalize font-medium hover:text-[#b629dc] transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
