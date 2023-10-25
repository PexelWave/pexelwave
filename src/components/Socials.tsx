import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

type Props = {};

const Socials = (props: Props) => {
  return (
    <>
      <Link href="#">
        <FaFacebook />
      </Link>
      <Link href="#">
        <FaInstagram />
      </Link>
      <Link href="#">
        <FaTiktok />
      </Link>
    </>
  );
};

export default Socials;
