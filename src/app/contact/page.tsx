import React from "react";

const page = () => {
  return (
    <div className="w-full">
      <div className="bg-[#dbe4f0]">
        Home &gt;<span className="underline">Contact Us</span>{" "}
      </div>

      <div className="flex w-full h-full gap-6 py-0 xl:px-[375px] lg:px-[225px]">
        <div className="h-full w-full   bg-orange-300">
          <h1 className="text-[24px] ">How Can We Help?</h1>

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
        </div>

        <div className="h-full w-full bg-slate-200 rounded-md p-10 font-Barlow">
          <h1>Leave a Question</h1>

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

          <button className="uppercase bg-[#ffd700] w-full rounded-full p-3 font-bold"> Submit</button>
        </div>
      </div>
    </div>
  );
};

export default page;
