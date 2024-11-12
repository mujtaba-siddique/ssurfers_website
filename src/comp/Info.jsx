import React from "react";
import { FiFacebook } from "react-icons/fi";
import { TfiYoutube } from "react-icons/tfi";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { IoLogoLinkedin } from "react-icons/io5";

function Info() {
  return (
    <div className="bg-black text-white h-[50px] text-[13px] flex items-center justify-between px-4 w-fulls">
      <div className="flex space-x-4 md:mx-[5rem]">
        <span className="font-roboto hover:underline cursor-pointer">
          <a href="tel:+917678990987">7678990987</a>
        </span>
        <span className="font-roboto hover:underline cursor-pointer">
          <a href="mailto:contact@email.com">contact@email.com</a>
        </span>
      </div>

      <span className="flex space-x-4 md:mx-[5rem] sm:text-xl">
        <a
          href="https://www.facebook.com/"
          className="cursor-pointer md:opacity-30 hover:opacity-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110  duration-200 ..."
        >
          <FiFacebook />
        </a>
        <a
          href="https://www.youtube.com/"
          className="cursor-pointer md:opacity-30 hover:opacity-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110  duration-200 ..."
        >
          {" "}
          <TfiYoutube />{" "}
        </a>
        <a
          href="https://www.instagram.com/"
          className="cursor-pointer md:opacity-30 hover:opacity-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110  duration-200 ..."
        >
          {" "}
          <FaSquareInstagram className="" />
        </a>
        <a
          href="https://in.pinterest.com/"
          className="cursor-pointer md:opacity-30 hover:opacity-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110  duration-200 ..."
        >
          {" "}
          <FaPinterest />
        </a>
        <a
          href="https://x.com/"
          className="cursor-pointer md:opacity-30 hover:opacity-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110  duration-200 ..."
        >
          <LuTwitter />
        </a>
        <a
          href="https://in.linkedin.com/"
          className="cursor-pointer md:opacity-30 hover:opacity-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110  duration-200 ..."
        >
          <IoLogoLinkedin />
        </a>
      </span>
    </div>
  );
}

export default Info;
