"use client";

import React, { useState } from "react";
import { ClientOnly } from "@/utills/client-only";
import { RiArrowDropDownLine, RiShoppingBagLine } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdForwardToInbox } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";

const Navbar = () => {
  const [isNavExpanded, setIsNavExapanded] = useState(false);

  const handleNav = () => {
    setIsNavExapanded(true);
  };

  return (
    <ClientOnly>
      <nav className="w-full">
        <div className="h-[48px] bg-[#143A79] md:flex w-full py-[8px] px-[80px] justify-between items-center hidden ">
          <ul className="flex items-center gap-6 font-Barlow">
            <li className="flex items-center gap-1">
              <FaLocationDot size={16} />{" "}
              <span className="">Block B-1 Johar Town Lahore</span>
            </li>
            <li className="flex items-center gap-1">
              {" "}
              <MdForwardToInbox size={16} /> <span> info@greelogix.com</span>
            </li>
            <li className="flex items-center gap-1">
              <FaPhoneAlt size={16} /> <span>+92 333 6527366</span>
            </li>
          </ul>

          <div className="flex justify-center items-center gap-6 font-Barlow">
            <button className="bg-blue-200 py-1 px-3 gap-2 flex items-center rounded-3xl">
              <span className="text-[13px] font-normal">English </span>{" "}
              <RiArrowDropDownLine size={24} />
            </button>

            <button className="bg-blue-200 py-1 px-3 gap-2 flex items-center rounded-3xl">
              <span className="text-[13px] font-normal">USD($)</span>{" "}
              <RiArrowDropDownLine size={24} />
            </button>
          </div>
        </div>

        <div className="h-[120px] bgs-[#E9F0FB] bg-red-300 flex w-full md:px-[80px] px-10 justify-between items-center ">
          <div className="flex items-center gap-[80px]">
            <div className="flex items-center gap-4">
              <Image
                src="/nav-logo.svg"
                width={56}
                height={56}
                alt="Nav logo"
              />
              <h1 className="text-3xl font-medium font-Montserrat">Fashion</h1>
            </div>

            <ul className=" md:flex items-center gap-[40px] hidden">
              <li className="text-[20px] font-normal leading-[30px] font-Barlow">
                Home
              </li>

              <li className="text-[20px] font-normal leading-[30px] font-Barlow">
                Shop
              </li>
              <li className="text-[20px] font-normal leading-[30px] font-Barlow">
                Pages
              </li>
              <li className="text-[20px] font-normal leading-[30px] font-Barlow">
                {" "}
                Elements
              </li>
            </ul>
          </div>
          <div
            onClick={handleNav}
            className="max-md:block top-2 right-[20px] w-10 hidden"
          >
            {isNavExpanded ? (
              <AiOutlineClose size={20} />
            ) : (
              <AiOutlineMenu size={23} />
            )}
          </div>

          <div className="md:inline-flex items-center flex-end gap-6 hidden">
            <CiSearch size={32} />
            <RiShoppingBagLine size={32} />
            <button className="flex py-3 px-5 items-center bg-[#143A79] rounded-[800px] text-base uppercase font-semibold font-Barlow">
              Register
            </button>
            <button className="flex py-3 px-5 items-center bg-white rounded-[800px] text-base uppercase font-semibold border-[#143A79] border font-Barlow">
              Login
            </button>
          </div>
        </div>
      </nav>
    </ClientOnly>
  );
};

export default Navbar;
