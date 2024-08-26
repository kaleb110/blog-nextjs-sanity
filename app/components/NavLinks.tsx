"use client";
import React from "react";
import Link from "next/link";
import { navLinks } from "./data/data";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <div className="hidden sm:flex gap-4 text-lg">
      {navLinks.map((link) => (
        <Link
          href={link.href}
          key={link.label}
          className={`${pathname === `${link.href}` ? "btn-gradient text-white" : ""} px-2 py-1 rounded-md`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
