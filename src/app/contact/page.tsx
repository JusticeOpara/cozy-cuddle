import MapBox from "@/components/MapBox";
import React from "react";
import { CiLocationOn, CiLock, CiPhone } from "react-icons/ci";
import { FaClock, FaRegQuestionCircle } from "react-icons/fa";
import { PiWarningCircleLight } from "react-icons/pi"
import { FaPhone } from "react-icons/fa6";

const page = () => {
  return (
    <div className="w-full px-8 pt-10 lg:px-0">
      <div className="my-10 xl:px-[375px] font-Barlow font-bold  ">
        Home &gt;<span className="underline">Contact Us</span>{" "}
      </div>

      <div className="flex lg:flex-row flex-col  w-full h-full gap-6 py-0 xl:px-[375px] lg:px-[225px] items-center mb-20 ">
        <div className="h-full w-full">
          <h1 className="text-[24px]">How Can We Help?</h1>

          <span className="flex flex-col gap-3">
            <p className="text-[#4F4F4F] font-normal font-Barlow text-base">
              Our team was handpicked for their understanding of materials,
              process and passion for fashion. Whether you are browsing our site
              or visiting our store, we are always willing to share our deep
              knowledge and understanding of our makers and their craft.
            </p>

            <p className="text-[#4F4F4F] font-normal font-Barlow text-base">
              You can check our FAQs section page or contact us by filling the
              form or calling our customer service team
            </p>
          </span>

          <div className="flex flex-col gap-5">
            <div className="flex w-full h-[200px] gap-6">
              <div className="w-full h-full rounded-3xl shadow-xl bg-slate-200 flex flex-col items-center justify-center p-4 gap-3">
                <FaRegQuestionCircle size={24} />

                <span className="text-[#4F4F4F] font-normal font-Barlow text-sm text-center">
                  Check our frequestly ask questions to know more about inquries
                </span>
                <button className="uppercase font-medium rounded-full bg-[#ffd700] p-3 text-white">
                  Vist faqs
                </button>
              </div>

              <div className="w-full h-full rounded-3xl  border border-gray-500 flex flex-col justify-center items-center p-4 gap-3">
                <FaPhone size={24} />
                <span className="text-[#4F4F4F] font-normal font-Barlow text-sm text-center">
                  {" "}
                  You can contact our customer services team at 07024685582
                </span>
                <button className="uppercase font-medium rounded-full bg-black p-3 text-white">
                  call us
                </button>
              </div>
            </div>

            <div className="w-full h-[150px] rounded-3xl flex flex-col justify-center border border-gray-500 px-6">
              <FaClock />
              <h1 className="md:text-[36px]"> Working Hours</h1>
              <p>MON - FRI 9:00AM - 7:00PM WST </p>

              <p>SAT - SUN 9:00AM - 7:00PM WST </p>
            </div>
          </div>
        </div>

        {/* CONTACT FORM  */}
        <div className="h-full w-full bg-slate-200 rounded-3xl p-10 font-Barlow">
          <h1 className="text-[24px]">Leave a Question</h1>

          <div className="my-4">
            <label
              htmlFor="name"
              className="block mb-2 text-base font-medium text-[#4A5568]"
            >
              Name
            </label>
            <input
              type="text"
              name="Name"
              placeholder="John Doe"
              className="border border-[#424242] outline-none text-[#4A5568] text-base rounded-lg block w-full p-3"
            />
          </div>

          <div className="my-4">
            <label
              htmlFor="Email"
              className="block mb-2 text-base font-medium text-[#4A5568]"
            >
              Email
            </label>
            <input
              type="text"
              name="Email"
              placeholder="wxyz@gmail.com"
              className="border border-[#424242] outline-none text-[#4A5568] text-base rounded-lg block w-full p-3"
            />
          </div>

          <div>
            <label
              htmlFor="Subjects"
              className="block mb-2 text-base font-medium text-[#4A5568]"
            >
              Subjects
            </label>
            <select
              id="Subjects"
              className="border border-[#424242] outline-none text-[#4A5568] text-base rounded-lg block w-full p-3"
            >
              <option selected>Alteration</option>
              <option value="">Quick Links</option>
              <option value="">Request Alterations</option>
              <option value="">Our Guarantee</option>
              <option value="">Request A Remake</option>
            </select>
          </div>

          <div className="my-4">
            <label
              htmlFor="name"
              className="block mb-2 text-base font-medium text-[#4A5568]"
            >
              Message
            </label>
            <input
              type="text"
              name="Name"
              placeholder="Write your message here..."
              className="border border-[#424242] outline-none text-[#4A5568] text-base rounded-lg block w-full p-3"
            />
          </div>

          <button className="uppercase bg-[#ffd700] w-full rounded-full p-3 font-bold">
            {" "}
            Submit
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row h-[500px] bg-slate-200">
        <MapBox />

        <div className="flex flex-col gap-[24px] w-full justify-center p-6">
          <h1 className="md:text-[48px] lg:w-[570px] text-4xl font-Montserrat font-medium md:leading-[60px] self-stretch">
            Prime Tailor
          </h1>
          <div className="divide-y  bg-black h-[2px] w-[200px] "></div>
          <span className="font-normal font-Barlow text-base md:w-[570px] w-full flex items-center">
            <CiLocationOn size={24} /> Rumuolukwu Eneka, 4 Unity close, New
            Layout, Port Harcourt
          </span>

          <span className="font-normal font-Barlow text-base md:w-[570px] w-full flex items-center">
            <CiPhone size={24} /> +23470458459
          </span>

          <div className="bg-[#f2f2f2] flex lg:w-[500px] rounded-xl p-3 font-Barlow items-center">
          <PiWarningCircleLight size={24}/>
            Make show to wear mask and follow SOPs when visting the store
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
