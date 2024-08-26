"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import Close from "./icons/Close";
import Open from "./icons/Open";

type Props = {};

const Drawer = (props: Props) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuItems = ["blog", "resources", "projects"];
  const { theme } = useTheme();

  const drawerBgColor = theme === "dark" ? "bg-slate-900" : "bg-white";
  const textColor = theme === "dark" ? "text-white" : "text-black";

  return (
    <div className="relative">
      {/* Open Icon */}
      <button
        onClick={() => setToggleMenu(true)}
        aria-label="Open menu"
        className="block sm:hidden"
      >
        <Open />
      </button>

      {/* Background Overlay */}
      {toggleMenu && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setToggleMenu(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full z-50 ${drawerBgColor} ${textColor} transform transition-transform duration-300 ease-in-out ${
          toggleMenu ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "75%" }} // Adjust width as needed
      >
        {/* Close Icon */}
        <button
          onClick={() => setToggleMenu(false)}
          aria-label="Close menu"
          className="absolute top-4 right-4"
        >
          <Close />
        </button>

        {/* Menu Items */}
        <div className="flex flex-col h-full items-end p-8 pt-20">
          {" "}
          {/* Adjust padding-top to make space for the close icon */}
          <ul className="flex flex-col gap-4 text-xl">
            {menuItems.map((item) => (
              <li key={item} className="text-right">
                <Link
                  href={`/${item === "blog" ? "" : item}`}
                  onClick={() => setToggleMenu(false)}
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
