import React from "react";
import { IoLogoGoogle } from "react-icons/io";
import { FaTwitter, FaFacebookF } from "react-icons/fa";

const page = () => {
  return (
    <div className="inline-flex flex-col items-center gap-10 px-[357px] w-full h-full ">
      <div className="flex w-full items-start gap-6 bg-slate-400">
        <button className="flex bg-[#DB4437] rounded-3xl px-5 py-3 justify-center items-center gap-2 flex-1">
          <IoLogoGoogle size={24} />
          <span className="text-base font-Barlow font-semibold uppercase text-white">
            With Google
          </span>
        </button>
        <button className="flex bg-[#4267B2] rounded-3xl px-5 py-3 justify-center items-center gap-2 flex-1">
          <FaFacebookF size={24} />
          <span className="text-base font-Barlow font-semibold uppercase text-white">
            With Facebook
          </span>
        </button>
        <button className="flex bg-[#1DA1F2] rounded-3xl px-5 py-3 justify-center items-center gap-2 flex-1">
          <FaTwitter size={24} color="white" />
          <span className="text-base font-Barlow font-semibold uppercase text-white">
            With Twitter
          </span>
        </button>
      </div>

      <div className="flex items-center gap-6 w-full ">
        <div className="divide-y bg-black h-[1px] w-full "></div>
        OR
        <div className="divide-y bg-black h-[1px] w-full "></div>
      </div>

      <div className="flex justify-center items-start gap-20 self-stretch">
        <div>
          <h1 className="text-black font-Montserrat text-[28px]">Login</h1>
          <p className="text-[#4F4F4F] font-Barlow text-base ">
            Register with us for a faster checkout, to track the status of your
            order and more
          </p>

          <div>
            <h1 className="text-[#333] font-Montserrat text-sm font-medium pl-2">
              Email
            </h1>

            <input
              type="email"
              name="Email"
              className="flex items-center p-3 rounded-xl w-full h-[48px] border outline-none text-base font-Barlow text-[#333]"
              placeholder="justiceopara33@gmail.com"
              required
            />
          </div>
          <div>
            <h1 className="text-[#333] font-Montserrat text-sm font-medium pl-2">
              Password
            </h1>

            <input
              type="password"
              name="Password"
              className="flex items-center p-3 rounded-xl w-full h-[48px] border outline-none text-base font-Barlow text-[#333]"
              placeholder="********"
              required
            />
          </div>

        </div>
        
        <div></div>
      </div>
    </div>
  );
};

export default page;
