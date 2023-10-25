import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

type Props = {};

const Socials = (props: Props) => {
  return (
    <>
      <Link href="https://web.facebook.com/profile.php?id=100093666981234">
        <FaFacebook />
      </Link>
      <Link href="https://web.facebook.com/profile.php?id=100093666981234">
        <FaInstagram />
      </Link>
      <Link href="https://www.tiktok.com/@pexel.wave">
        <FaTiktok />
      </Link>
    </>
  );
};

export default Socials;
