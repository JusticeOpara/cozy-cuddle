import Image from "next/image";
import React from "react";
import { RiShirtLine, RiScissorsCutLine, RiTruckLine } from "react-icons/ri";
import CustomComponent from "@/components/CustomComponent";
import OurTeam from "@/components/OurTeam";

const page = () => {
  return (
    <div className="flex w-full h-full flex-col lg:gap-60 gap-28 px-8 lg:px-0 mb-28">
      <div className="flex w-full h-[800px] pl-[375px] items-center gap-[30px] justify-end">
        <div className="flex w-[570px] flex-col items-start gap-10 ">
          <CustomComponent
            title="Our  Story"
            description="In December 2014 we launched the first version of our website. We were not an instant success. The first two years were particularly humble. 
            We didn't come from fashion. We didn’t have fancy investors. We made a lot of mistakes. Our manufacturing was slow. Our selection was limited. Our website was confusing. And then there was the financial crisis...
            "
            subDescription="But we stuck with it. Listened to our customers. Improved our systems. Became experts on shirts and fabrics. Photography and user interface.
           Supply chain and logistics. Our growth has been strong and steady, but we’ve kept our team small. We do all of our design and customer service from our showroom in New York."
            buttonText="Customize Suits"
            learnMoreButton="Shop Shirts"
          />
        </div>

        <div className="relative w-[945px] h-[800px] justify-center items-center">
          <Image
            src="/aboutus.png"
            className=""
            fill
            alt="a picture of sewing items"
          />
        </div>
      </div>

      <div className="w-full h-[586px] flex relative">
        <div className="absolute inset-0 bg-no-repeat bg-cover opacity-50 z-10">
          <Image src="/background.png" fill alt="background image" />
        </div>

        <div className="z-20 flex flex-col w-full h-full items-center gap-20 justify-center">
          <div className="flex items-center flex-col justify-center">
            <h1 className="text-center font-Montserrat font-medium text-5xl leading-[60px]">
              How it Works
            </h1>

            <div className="divide-y  bg-black h-[2px] w-[200px]"></div>
          </div>

          <div className="px-[375px] gap-[30px] flex justify-center items-center self-stretch">
            <div className="flex flex-col items-start flex-1 gap-20 justify-center">
              <RiShirtLine size={40} />
              <div className="flex flex-col items-start gap-2 self-stretch">
                <h2 className="font-medium text-3xl font-Montserrat">Select</h2>

                <span className="text-base font-Barlow font-normal">
                  You can start from one of the many pre-designed shirts and
                  customise it, or start with the fabric and select each detail
                  one by one, until you’ve created your desired design
                </span>
              </div>
            </div>

            <div className="flex flex-col items-start flex-1 gap-20 justify-center">
              <RiScissorsCutLine size={40} />
              <div className="flex flex-col items-start gap-2 self-stretch">
                <h2 className="font-medium text-3xl font-Montserrat">
                  Customize
                </h2>

                <span className="text-base font-Barlow font-normal">
                  Choose a standard size, adjust it if you need to, or enter
                  your measurements taken from your body or another shirt (use
                  our step-by-step video guide) for the same price
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start flex-1 gap-20 justify-center">
              <RiTruckLine size={40} />
              <div className="flex flex-col items-start gap-2 self-stretch">
                <h2 className="font-medium text-3xl font-Montserrat">
                  Deliver
                </h2>

                <span className="text-base font-Barlow font-normal">
                  It takes two weeks for your chosen design to be crafted by our
                  expert Italian shirtmakers. Your shirt will then be delivered
                  to your door, anywhere in the world.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* price */}
      <div className="flex w-full h-full flex-col justify-center items-center gap-20 bg-red-100">
        <div className="flex items-center flex-col justify-center">
          <h1 className="text-center font-Montserrat font-medium text-5xl leading-[60px]">
            Pricing
          </h1>

          <div className="divide-y  bg-black h-[2px] w-[200px]"></div>
        </div>
      </div>

      {/* Our fabric section */}
      <div className="flex w-full h-full pr-[375px] items-center xl:gap-[30px] justify-end bg-slate-400">
        <div className="relative w-[945px] h-[800px] justify-center items-center">
          <Image
            src="/fabric.png"
            className=""
            fill
            alt="a picture of sewing items"
          />
        </div>
        <div className="flex w-[570px] flex-col items-start gap-10 ">
          <CustomComponent
            title="Our Fabrics"
            description="It all starts with the fabric. Over the years we’ve become experts in dress shirt fabrics, working directly with some of the world’s greatest fabric mills across Europe, Japan and China. We’re also endlessly digging through the archives of Thomas Mason, Canclini, Albini and others searching for the perfect styles."
            subDescription="Increasingly, we’ve been designing our own custom fabrics, selecting the precise colors, patterns and construction to achieve the ideal look, comfort and performance. In all categories, we carry a wide range of fabric qualities from relatively basic constructions up to luxurious 120s two-ply sea-island cotton"
            buttonText="SHOP Fabrics"
            learnMoreButton={null}
          />
        </div>
      </div>

    
    
      <OurTeam />
    </div>
  );
};

export default page;
