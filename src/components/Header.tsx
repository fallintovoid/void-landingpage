import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Header = () => {
  return (
    <header className="w-full px-5 py-5 bg-white flex justify-between items-center fixed shadow-sm md:px-5 md:gap-7 md:justify-normal">
      <Link href="/">
        <Image
          src="/voidlogo.png"
          alt="voidlogo"
          width={100}
          height={100}
          className="w-35"
        />
      </Link>

      <ul className="flex gap-7 text-sm font-medium">
        <Link href={"/"}>
          <li className="text-black hover:text-gray-500 duration-200">Home</li>
        </Link>
        <Link href={"/portfolio"}>
          <li className="text-black hover:text-gray-500 duration-200">
            Portfolio
          </li>
        </Link>
      </ul>
      <div className="flex gap-2">
        <Link href="https://www.linkedin.com/in/illia-kurylenko-381341187/">
          <AiFillLinkedin size={25} />
        </Link>
        <Link href="https://github.com/fallintovoid">
          <AiFillGithub size={25} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
