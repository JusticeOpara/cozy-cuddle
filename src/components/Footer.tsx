"use client";

import { ClientOnly } from "@/utills/client-only";
import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";

interface MenuItemProps {
  title: string;
  items: string[];
}

const MenuItem: React.FC<MenuItemProps> = ({ title, items }) => {
  return (
    <ul className="w-full flex flex-col items-start gap-4 flex-1">
      <h1 className="text-[#000] font-Barlow text-xl font-semibold self-stretch">
        {title}
      </h1>
      {items.map((item, index) => (
        <li
        key={index}
          className="text-[#000] font-Barlow text-base font-normal self-stretch"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

const Footer = () => {
  return (
    <ClientOnly>
      <div className="flex w-full py-[80px]  xl:px-[375px] bg-blue-300 flex-col justify-center items-center lg:gap-[80px] gap-[40px] px-8">
        <div className="flex lg:flex-row flex-col justify-center w-full items-center gap-[30px]">
          <h1 className="text-[28px] leading-9 font-Montserrat font-medium ">
            Sign up for our Newsletter
          </h1>

          <div className="flex h-full justify-end items-center flex-1">
            <div className="flex py-3 pl-3 pr-5 items-center gap-2 bg-white rounded-l-3xl">
              <input
                className="text-base font-Barlow outline-none"
                placeholder="Type your email here..."
              />
            </div>

            <button className="flex justify-center items-center gap-2 py-3 px-5 bg-[#143A79] rounded-r-3xl font-Barlow text-base uppercase text-white">
              Subscribe
            </button>
          </div>
        </div>

        <div className="w-full flex lg:flex-row flex-col-reverse justify-center items-start gap-[30px] self-stretch">
          <div className="flex lg:flex-col flex-row justify-center items-start gap-10 lg:w-[255px] w-full">
            <div className="w-full flex items-center gap-4">
            
              <div className="relative lg:w-[56px] lg:h-[56px] h-[24px] w-[24px] ">
              <Image
                src="/nav-logo.svg"
               fill
               objectFit="contain"
                alt="Nav logo"
              />
              </div>
             
              <h1 className="lg:text-3xl text-xl font-medium font-Montserrat">Fashion</h1>
            </div>

            <span className="text-base font-semibold font-Barlow text-[#333] hidden">
              info@greelogix.com
            </span>

            <span className="text-base font-semibold font-Barlow text-[#333] hidden">
              +92 333 6527366
            </span>

            <div className="flex items-center gap-2">
              <FaFacebookF size={24} />
              <FaTwitter size={24} />
              <FaLinkedin size={24} />
              <FaInstagramSquare size={24} />
            </div>
          </div>

          <div className="w-full h-full flex flex-1 pt-[17px] justify-center items-start gap-[30px]">
            <MenuItem
              title="Shop"
              items={[
                "Create a Custom Size",
                "Design a Shirt",
                "Our Collections",
                "Accessories",
                "Fabrics",
              ]}
            />
            <MenuItem
              title="About Us"
              items={[
                "Our Story",
                "Our Guarantee",
                "Career",
                "Terms & Conditions",
                "Privacy Policy",
              ]}
            />
            <MenuItem
              title="Help"
              items={[
                "How to Care for Shirts",
                "Common Fit Problems",
                "How to Measure ur body",
                "Shipping",
                "How Dress Shirts Shrink",
              ]}
            />
            <MenuItem
              title="Support"
              items={[
                "Return Policy",
                "Style Advice",
                "Schedule a Fitting",
                "Contact us",
                "Track an Existing Order",
              ]}
            />
          </div>
        </div>

        <div className="divide-y  bg-black h-[2px] w-full "></div>

        <div className="flex justify-between items-center self-stretch">
          <span className="md:text-base text-[10px]">© Copyright 2020 | All Rights Reserved By Modiste</span>

          <div className="flex md:gap-6 gap-2">
            <Image src="/payment-icon.svg" width={40} height={40} alt=""/>
            <Image src="/payment-icon02.svg" width={40} height={40} alt=""/>
            <Image src="/payment-icon03.svg" width={40} height={40} alt=""/>
            <Image src="/payment-icon04.svg" width={40} height={40} alt=""/>

          </div>
        </div>
      </div>
    </ClientOnly>
  );
};

export default Footer;
