"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes"; // Import useTheme hook
import Close from "./icons/Close";
import Open from "./icons/Open";

type Props = {};

const Drawer = (props: Props) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuItems = ["blog", "resources", "projects"];
  const { theme } = useTheme(); // Access the current theme

  // // Determine colors based on the current theme
  // const iconColor = theme === "dark" ? "#fff" : "#000";
  const drawerBgColor = theme === "dark" ? "bg-slate-900" : "bg-white";
  const textColor = theme === "dark" ? "text-white" : "text-black";
  return (
    <div className=" hidden max-sm:flex">
      <Open onClick={() => setToggleMenu(true)} />
      {toggleMenu && (
        <div
          className={`fixed inset-y-0 right-0 z-50 ${drawerBgColor} bg-opacity-100 flex flex-col items-end p-8 w-full shadow-lg`}
        >
          {/* Close Icon */}
          <Close onClick={() => setToggleMenu(false)} />
          {/* Menu Items */}
          <ul
            className={`flex flex-col gap-2 text-right ${textColor} text-xl pt-8`}
          >
            {menuItems.map((item) => (
              <li key={item}>
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
      )}
    </div>
  );
};

export default Drawer;
