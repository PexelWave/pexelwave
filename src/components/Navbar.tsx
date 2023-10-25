"use client";

import React from "react";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/utils";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  const MobileNav: React.FC = () => (
    <motion.ul
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      className="px-6 absolute top-0 left-0 w-full h-screen md:hidden flex flex-col items-center gap-12 bg-violet-950 text-light-foreground backdrop-blur-lg bg-opacity-95"
    >
      <div className="flex self-start items-center justify-between h-[10vh] w-full">
        <Logo />
        <AiOutlineClose onClick={handleClick} size={30} />
      </div>
      {navLinks.map(({ text, href }, index) => (
        <motion.li
          key={text}
          whileHover={{ scale: 1.3, color: "#1AB1F9", fontWeight: 'bold' }}
          transition={{ type: "spring", stiffness: 500 }}
          className="text-2xl"
        >
          <Link href={href} onClick={handleClick}>
            
            {text}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );

  const DesktopNav: React.FC = () => (
    <ul className="hidden md:flex items-center gap-6">
      {navLinks.map(({ text, href }) => (
        <motion.li
        whileHover={{ scale: 1.1, color: "#1AB1F9", fontWeight: 'bold' }}
        transition={{ type: "spring", stiffness: 500 }}
          key={text}
        >
          <Link href={href}>
            {text}
          </Link>
        </motion.li>
      ))}
    </ul>
  );

  return (
    <nav className="bg-violet-800 text-light-foreground backdrop-blur-lg bg-opacity-50 fixed flex items-center w-full h-[10vh] z-50">
      <div className="container flex items-center justify-between gap-6">
        {!open && <Logo />}
        {open && <MobileNav />}
        {!open && <CiMenuFries className="md:hidden" onClick={handleClick} size={30} />}
        <DesktopNav />
      </div>
    </nav>
  );
};

export default Navbar;
