"use client"

import { navLinks } from "@/utils/utils";
import Logo from "./Logo";
import Link from "next/link";
import { CiMenuFries} from 'react-icons/ci'
import { AiOutlineClose } from 'react-icons/ai'
import React from "react";

const Navbar = () => {
  const [open, setOpen] = React.useState(false)
  const handleClick = () => {
    setOpen(prev => !prev)
  }
  const MobileNav: React.FC = () => (
    <ul className="px-6 absolute top-0 left-0 w-full h-screen md:hidden flex flex-col items-end gap-6 bg-violet-800 text-light-foreground backdrop-blur-3xl bg-opacity-90">
      <div className="flex self-start items-center justify-between h-[10vh] w-full">
        <Logo />
        <AiOutlineClose onClick={handleClick} />
      </div>
      {navLinks.map(({ icon, text, href }) => (
        <li key={text}>
          <Link href={href}>
            {icon ? icon : null}
            {text}
          </Link>
        </li>
      ))}
    </ul>
  );

  const DesktopNav: React.FC = () => (
    <ul className="hidden md:flex items-center gap-6">
      {navLinks.map(({ icon, text, href }) => (
        <li key={text}>
          <Link href={href}>
            {icon ? icon : null}
            {text}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="bg-violet-800 text-light-foreground backdrop-blur-lg bg-opacity-50 fixed flex items-center w-full h-[10vh] z-50">
      <div className="container flex items-center justify-between gap-6">
        <Logo />
        { open && <MobileNav /> }
        <CiMenuFries className="md:hidden" onClick={handleClick}/>

        <DesktopNav />
      </div>
    </nav>
  );
};





export default Navbar;
