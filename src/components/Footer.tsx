import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full px-10 py-5 bg-white flex gap-7 items-center fixed shadow-sm">
      <Image
        src="/voidlogo.png"
        alt="voidlogo"
        width={100}
        height={100}
        className="w-35"
      />
      <ul className="flex gap-7 text-sm font-medium">
        <Link href={"/"}>
          <li className="text-black hover:text-gray-500 duration-200">Home</li>
        </Link>
        <Link href={"/"}>
          <li className="text-black hover:text-gray-500 duration-200">
            Contact
          </li>
        </Link>
        <Link href={"/"}>
          <li className="text-black hover:text-gray-500 duration-200">
            Portfolio
          </li>
        </Link>
      </ul>
    </footer>
  );
};

export default Footer;
