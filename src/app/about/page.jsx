import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex w-full h-[800px] pl-[375px] items-center gap-[30px] justify-end">
      <div className="flex w-[570px] flex-col items-start gap-10">
        <h1 className="text-[48px] font-medium leading-[60px] font-Montserrat">
          Our Story
        </h1>

        <div className="">
          <span className="text-base text-[#4F4F4F] font-Barlow self-stretch">
            In December 2014 we launched the first version of our website. We
            were not an instant success. The first two years were particularly
            humble. We didn't come from fashion. We didn’t have fancy investors.
            We made a lot of mistakes. Our manufacturing was slow. Our selection
            was limited. Our website was confusing. And then there was the
            financial crisis....
          </span>
          <span className="text-base text-[#4F4F4F] font-Barlow self-stretch">
            But we stuck with it. Listened to our customers. Improved our
            systems. Became experts on shirts and fabrics. Photography and user
            interface. Supply chain and logistics. Our growth has been strong
            and steady, but we’ve kept our team small. We do all of our design
            and customer service from our showroom in New York.
          </span>
        </div>
      </div>
      <div className="relative w-[945px] h-[800px] justify-center items-center">
        <Image
          src="/aboutus.png"
          className=""
          fill
          alt="a picture of sewing items"
        />
      </div>
      <div></div>
    </div>
  );
};

export default page;
