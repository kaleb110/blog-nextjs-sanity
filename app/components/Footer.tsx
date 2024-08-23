import React from "react";
import Link from "next/link";
import { footerLinks } from "./data/data";
import { socialIcons } from "./data/data";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex flex-col gap-4 flex-wrap items-center justify-center w-full border-t-[1px] dark:border-slate-600 border-slate-300 py-8">
      <div className="flex gap-1 items-center">
        <span className="font-bold text-lg">JSdev</span>
      </div>
      <ul className="flex gap-3 flex-wrap text-center justify-center">
        {footerLinks.map((link) => (
          <Link
            className="text-gray-600 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-400"
            href="#"
            key={link.key}
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="flex gap-3">
        {socialIcons.map((icon) => (
          <Link
            
            href={icon.href}
            key={icon.key}
            className="text-xl rounded-full p-2 transition-all hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            {<icon.link />}
          </Link>
        ))}
      </div>
      <p className="text-gray-500">© 2024 JSdev Inc. All rights reserved.</p>
    </div>
  );
};

export default Footer;
