"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaPlayCircle, FaRegHeart, FaRegStar } from "react-icons/fa";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { RiTruckLine } from "react-icons/ri";
import { IoFlashOutline } from "react-icons/io5";
import { AiOutlineShopping } from "react-icons/ai";
import { CiLock } from "react-icons/ci";
import { Products, Fabrics } from "@/utills/data";
import CustomComponent from "@/components/CustomComponent";
import BenfitsComponent from "@/components/Benfits";
import Blogs from "@/components/Blogs";

console.log(Products, "--products");
const Home: React.FC = () => {
  const [hoveredStates, setHoveredStates] = useState<boolean[]>(
    Array(Products.length).fill(false)
  );
  const [favorite, setFavorite] = useState<{ [id: number]: boolean }>({});

  const handleFavourited = (index: number) => {
    setFavorite((prevFavorites) => ({ ...prevFavorites, [index]: true }));
  };

  const handleUnfavourite = (index: number) => {
    setFavorite((prevFavorites) => ({ ...prevFavorites, [index]: false }));
  };

  const handleHover = (index: number) => {
    setHoveredStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = true;

      return updatedStates;
    });
  };

  const handleMouseLeave = (index: number) => {
    setHoveredStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = false;
      return updatedStates;
    });
  };
  console.log(hoveredStates, "--hoverStates");

  return (
    <div className="flex w-full h-full flex-col lg:gap-60 gap-28 px-8 lg:px-0 mb-28">
      <div className="w-full h-full">
        <div className="w-full h-screen lg:h-[800px] bg-[#E9F0FB] gap-[30px] flex lg:pl-[375px] items-center">
          <div className="w-full bg-gray-200 h-full flex flex-col justify-center gap-10">
            <div className="flex flex-col gap-[24px]">
              <h1 className="md:text-[48px] text-5xl md:w-[570px] font-Montserrat font-medium leading-[60px] self-stretch">
                Find <span className="text-[#143A79]"> Custom Suits </span>{" "}
                Tailored For You
              </h1>
              <div className="divide-y  bg-black h-[2px] w-[200px] "></div>
            </div>

            <p className="font-normal font-Barlow text-base md:w-[570px]">
              Our shirts are crafted in Italy by cutting-edge technology using
              some of the world`s finest and highest quality fabrics
            </p>

            <div className="flex gap-2">
              <button className="flex py-3 px-5 justify-center text-base items-center bg-[#FFD700] uppercase rounded-[800px] font-Barlow font-medium">
                Customize Now
              </button>
              <button className="flex py-3 px-5 justify-center text-base items-center bg-inherit uppercase border gap-2 border-[#143A79] rounded-[800px] font-Barlow font-medium">
                <FaPlayCircle size={24} /> Learn More
              </button>
            </div>
          </div>

          <div className="w-full bg-gray-400 h-full relative lg:flex justify-end items-center hidden ">
            <Image
              src="/hero.png"
              fill
              className="object-cover"
              alt="hero image"
            />
          </div>
        </div>

        {/*Brand  */}

        <div className="w-full lg:h-[320px] lg:p-20 p-6 flex justify-between items-center bg-[#F2F2F2] gap-6">
          <div className="lg:w-[160px] lg:h-[160px] h-[50px] w-[50px] relative flex items-center justify-center">
            <Image
              src="/zara-brand.svg"
              fill
              objectFit="contain"
              alt="zara brand"
            />
          </div>

          <div className="lg:w-[160px] lg:h-[160px] h-[50px] w-[50px] relative flex items-center justify-center">
            <Image
              src="/pull-brand.svg"
              fill
              objectFit="contain"
              alt="pull brand"
            />
          </div>

          <div className="lg:w-[160px] lg:h-[160px] h-[50px] w-[50px] relative flex items-center justify-center">
            <Image
              src="/hollister-brand.png"
              objectFit="contain"
              fill
              alt="hollister-brand"
            />
          </div>

          <div className="lg:w-[160px] lg:h-[160px] h-[50px] w-[50px] relative flex items-center justify-center">
            <Image
              src="/versace-brand.png"
              fill
              objectFit="contain"
              alt="versace brand"
            />
          </div>

          <div className="lg:w-[160px] lg:h-[160px] h-[50px] w-[50px] relative flex items-center justify-center">
            <Image
              src="/burberry-brand.png"
              fill
              objectFit="contain"
              alt="burberry brand"
            />
          </div>

          <div className="lg:w-[160px] lg:h-[160px] h-[50px] w-[50px] relative flex items-center justify-center">
            <Image
              src="/hermes-brand.png"
              fill
              objectFit="contain"
              alt="hermes brand"
            />
          </div>
        </div>
      </div>

      {/* Products */}

      <div className="w-full lg:h-[846px] h-full flex lg:flex-row flex-col lg:px-20 justify-center gap-[30px] bg-blue-300">
        <div className="flex lg:w-[465px] h-full md:p-20 flex-col justify-center items-start self-stretch gap-10 rounded-3xl bg-[#E9F0FB]">
          <div className="flex flex-col gap-[24px]">
            <h1 className="text-[48px] w-[305px] font-Montserrat leading-[60px] self-stretch">
              New Arrivals
            </h1>
            <div className="divide-y  bg-black h-[2px] w-[200px] "></div>
          </div>

          <p className="font-normal font-Barlow text-base w-[305px]">
            Check out our exclusive selection of this season’s new arrivals,
            made with world’s highest quality fabric
          </p>
          <button className="flex py-3 px-5 justify-center text-base items-center bg-[#FFD700] uppercase rounded-[800px] font-Barlow font-bold">
            browse all
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px] ">
          {Products?.map((data, index: number) => (
            <div
              key={data.id}
              className="bg-white h-[500px] lg:h-full w-full flex flex-col items-center flex-1 rounded-3xl border border-[#E0E0E0] hover:shadow-2xl shadow-[#143A79] cursor-pointer"
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div className="flex items-center justify-center h-full w-full py-[9px] px-[13px] bg-[#F2F2F2] rounded-t-3xl relative transition">
                <Image src={data.imgUrl} fill objectFit="cover" alt="shirt" />
              </div>
              {/* hover on the product it should pop the container in the screen */}
              {hoveredStates[index] && (
                <div className="inline-flex justify-center items-center gap-2 w-[242px] h-[48px] absolute pt-28">
                  <div className="flex w-[48px] h-[48px] bg-white justify-center items-center rounded-[24px]">
                    <AiOutlineShopping size={24} />
                  </div>
                  <button className="flex py-[12px] px-[20px] justify-center items-center text-[#143A79] font-Barlow text-base font-semibold uppercase text-center bg-[#FFD700] rounded-[800px]">
                    Customize
                  </button>
                  <div className="flex w-[48px] h-[48px] bg-white justify-center items-center rounded-[24px]">
                    {favorite[index] ? (
                      <MdFavorite
                        onClick={() => handleUnfavourite(index)}
                        size={24}
                      />
                    ) : (
                      <MdFavoriteBorder
                        onClick={() => handleFavourited(index)}
                        size={24}
                      />
                    )}
                  </div>
                </div>
              )}

              <div className="flex p-6 justify-center flex-col gap-6 items-start self-stretch">
                <span className="text-base font-Barlow font-semibold">
                  {data.title}
                </span>

                <span className="font-Montserrat font-medium text-xl text-black">
                  {data.text}
                </span>
                <span className="text-base font-Barlow font-bold">
                  ${data.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom shirt */}
      <div className="lg:h-[800px] w-full flex lg:pr-[375px] items-center gap-[30px] bg-red-200">
        <div className="w-[965px] h-full  lg:flex pt-0 pb-0 pl-[165px] pr-[80px] justify-end items-center bg-red-500 hidden">
          <div className="w-[700px] h-full relative flex-shrink-0">
            <Image
              src="/img-collage02.png"
              width={500}
              height={600}
              className="absolute right-[20%] top-[20%]"
              alt="img collage"
            />

            <Image
              src="/img-collage.png"
              className="absolute top-[15%] right-[5%] hidden lg:block"
              width={321}
              height={388}
              alt="img collage"
            />

            <Image
              src="/img-collage07.png"
              className="absolute z-10 bottom-[0%] right-0 hidden lg:block"
              width={491}
              height={295}
              alt="img collage"
            />
          </div>
        </div>

        <CustomComponent
          title="Custom Shirts"
          description="Stay ahead of the competitive tailoring business using our shirt
        customization tool. It allows your customers to design their shirts
        themselves with ease"
          buttonText="Customize Shirts"
          learnMoreButton="Learn More"
        />
      </div>

      {/* Custom thobe */}
      <div className="lg:h-[800px] w-full flex lg:pl-[375px] items-center gap-[30px] bg-slate-400">
        <CustomComponent
          title="Custom Thobe"
          description="Over rich 9+ years of experience, Thobe Customization Software has benefited numerous clients in Arab countries. Its state-of-art technology meets the growing trend and desires of people"
          buttonText="Customize thobe"
          learnMoreButton="Learn More"
        />
        {/*  */}
        <div className="w-[965px] h-full lg:flex pt-0 pb-0 pl-[165px] pr-[80px] justify-end items-center bg-red-500 hidden">
          <div className="w-[700px] h-full bg-black relative flex-shrink-0">
            <Image
              src="/img-collage06.png"
              width={388}
              height={447}
              className="absolute right-[12%] top-[18%] tranosform"
              alt="img collage"
            />

            <Image
              src="/img-collage05.png"
              className="absolute  top-[0%] left-[0%] hidden lg:block"
              width={517}
              height={358}
              alt="img collage"
            />

            <Image
              src="/img-collage03.png"
              className="absolute z-10 bottom-[18%] left-[18%] hidden lg:block"
              width={321}
              height={388}
              alt="img collage"
            />
          </div>
        </div>
      </div>

      {/* explore fabrics */}

      <div className="w-full lg:h-[846px] flex flex-col lg:flex-row-reverse lg:px-20 justify-center gap-[30px] bg-blue-300 ">
        <div className="flex lg:w-[465px] lg:p-20 p-12 flex-col justify-center items-start self-stretch gap-10 rounded-3xl bg-[#E9F0FB]">
          <div className="flex flex-col gap-[24px]">
            <h1 className="text-[48px] w-[305px] font-Montserrat leading-[60px] self-stretch">
              Explore Fabrics
            </h1>
            <div className="divide-y  bg-black h-[2px] w-[200px] "></div>
          </div>

          <p className="font-normal font-Barlow text-base w-[305px]">
            Explore our high quality fabrics using our cutting-edge technology
            for a reduced environmental impact, to create a robust and
            sustainable fabric
          </p>
          <button className="flex py-3 px-5 justify-center text-base items-center bg-[#FFD700] uppercase rounded-[800px] font-Barlow font-bold">
            browse all
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-[30px] ">
          {Fabrics?.map((data) => (
            <div
              key={data.id}
              className="bg-[#fff] h-[500px] lg:h-full flex flex-col items-center flex-1 rounded-3xl border border-[#E0E0E0] hover:shadow-2xl shadow-[#143A79]"
            >
              <div className="flex items-center justify-center h-full w-full py-[9px] px-[13px] bg-[#F2F2F2] rounded-t-3xl relative">
                <Image
                  src={data.imgUrl}
                  fill
                  objectFit="cover"
                  className="rounded-t-3xl transition"
                  alt="shirt"
                />
              </div>

              <div className="flex p-6  justify-center flex-col gap-6 items-start self-stretch">
                <span className="text-base font-Barlow font-semibold">
                  {data.title}
                </span>
                <span className="font-Montserrat self-stretch font-medium text-xl text-black">
                  {data.text}
                </span>
                <span className="text-base font-Barlow font-semibold">
                  ${data.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accessories */}
      <div className="lg:px-[375px] w-full lg:h-[1076px] h-screen flex justify-center relative">
        <div className="w-full h-[803px] absolute inset-0 bg-no-repeat bg-center bg-cover top-0">
          <Image
            src="/yellow-bg.svg"
            className="object-cover"
            fill
            alt="background colour"
          />
        </div>

        <div className="absolute top-0 flex flex-col lg:gap-20 gap-0 justify-center ">
          <div className="flex flex-col justify-center items-center gap-6 self-stretch pt-20">
            <h1 className="md:text-[48px] text-4xl font-medium md:leading-[60px] font-Montserrat text-center">
              See Our Accessories
            </h1>
            <div className="divide-y bg-black h-[2px] w-[200px]"></div>
          </div>

          <div className="flex h-[830px] flex-col justify-center gap-[30px] items-start">
            <div className="h-[400px] w-full flex gap-[30px]">
              <div className="h-full lg:w-[695px] w-[50%] justify-center items-center flex relative">
                <Image
                  src="/accessories01.png"
                  fill
                  className="rounded-3xl"
                  alt="bag accessories"
                />
                <div className="flex flex-col items-start gap-10 absolute w-full px-10 bottom-[40px]">
                  <span className="text-5xl font-medium leading-[60px] font-Montserrat text-white items-stretch ">
                    {" "}
                    Bags
                  </span>
                  <div className="divide-y bg-white h-[2px] w-[200px]"></div>
                  <button className="flex py-3 px-5 justify-center text-base items-center bg-inherit uppercase border text-white gap-2 border-white rounded-[800px] font-Barlow font-medium">
                    learn more
                  </button>
                </div>
              </div>

              <div className="h-full lg:w-[445px] w-[50%] justify-center items-center flex relative ">
                <Image
                  src="/accessories02.png"
                  fill
                  className="rounded-3xl"
                  alt="watch accessories"
                />
                <div className=" flex flex-col items-start gap-10 absolute w-full px-10 bottom-[40px]">
                  <span className="text-5xl font-medium leading-[60px] font-Montserrat text-white items-stretch ">
                    {" "}
                    Watches
                  </span>
                  <div className="divide-y bg-white h-[2px] w-[200px]"></div>
                  <button className="flex py-3 px-5 justify-center text-base items-center bg-inherit uppercase border bg-yellow-500 text-white gap-2 border-white rounded-[800px] font-Barlow font-medium">
                    learn more
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:h-[400px] h-[200px] w-full relative">
              <Image
                src="/accessories03.png"
                className="rounded-3xl"
                fill
                alt="perfume accessories"
              />
                  <div className=" flex flex-col items-start gap-10 absolute w-full px-10 bottom-[40px]">
                  <span className="text-5xl font-medium leading-[60px] font-Montserrat text-white items-stretch ">
                    {" "}
                    Perfumes
                  </span>
                  <div className="divide-y bg-white h-[2px] w-[200px]"></div>
                  <button className="flex py-3 px-5 justify-center text-base items-center bg-inherit uppercase border text-white gap-2 border-white rounded-[800px] font-Barlow font-medium">
                    learn more
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Choose Us */}
      <div className="h-full w-full py-0 xl:px-[375px] lg:px-[225px] bg-fuchsia-400 flex flex-col justify-between items-center gap-[80px]">
        <div className="flex flex-col justify-center items-center gap-6 self-stretch ">
          <h1 className="text-[48px] font-medium leading-[60px] font-Montserrat text-center">
            Why Choose Us
          </h1>
          <div className="divide-y bg-black h-[2px] w-[200px]"></div>
        </div>

        <div className="h-full w-full grid lg:grid-cols-2 xl:grid-cols-3 gap-[30px] bg-slate-400">
          <BenfitsComponent
            title="Trusted"
            icon={<FaRegHeart size={40} />}
            description="You can start from one of the many pre-designed shirts and customise it, 
            or start with the fabric and select each detail one by one, until you’ve created your desired design"
          />
          <BenfitsComponent
            title="Easy to Use"
            icon={<IoFlashOutline size={40} />}
            description="Choose a standard size, adjust it if you need to, or enter your measurements taken from your body or another shirt 
            (use our step-by-step video guide) for the same price"
          />
          <BenfitsComponent
            title="Personalization"
            icon={
              <Image src="/filter.svg" width={40} height={40} alt="filter" />
            }
            description="It takes two weeks for your chosen design to be crafted by our expert Italian shirtmakers. 
            Your shirt will then be delivered to your door, anywhere in the world."
          />
          <BenfitsComponent
            title="Secure"
            icon={<CiLock size={40} />}
            description="You can start from one of the many pre-designed shirts and customise it, 
            or start with the fabric and select each detail one by one, 
            until you’ve created your desired design"
          />
          <BenfitsComponent
            title="Fast Delivery"
            icon={<RiTruckLine size={40} />}
            description="Choose a standard size, adjust it if you need to, or enter your measurements taken from your body or 
            another shirt (use our step-by-step video guide) for the same price"
          />
          <BenfitsComponent
            title="24/7 Shopping"
            icon={<AiOutlineShopping size={40} />}
            description="It takes two weeks for your chosen design to be crafted by our expert Italian shirtmakers. Your shirt will then be delivered to your door, anywhere in the world."
          />
        </div>
      </div>

      {/* Testimoinal Carsouel */}
      <div className="h-full lg:gap-[110px] gap-16 w-full bg-slate-400 flex flex-col justify-between items-center lg:px-[375px]">
        <div className="flex flex-col justify-center items-center gap-6 self-stretch">
          <h1 className="md:text-[48px] text-4xl font-medium md:leading-[60px] font-Montserrat text-center">
            Read What Our Clients Say
          </h1>
          <div className="divide-y bg-black h-[2px] w-[200px]"></div>
        </div>

        <div className="flex items-start md:gap-[30px] gap-[20px]">
          <Image
            src="/avatar.png"
            className="flex items-center justify-center"
            width={170}
            height={170}
            alt="avatar"
          />

          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-[28px] leading-[36px] font-Montserrat font-medium">
                John Doe
              </h1>

              <FaRegStar size={24} />
              <FaRegStar size={24} />
              <FaRegStar size={24} />
            </div>

            <p className="font-normal font-Barlow leading-[30px] text-[#333]">
              This was my first experience ordering a custom tailored suit. The
              staff was super helpful and professional and I got what I wanted
              for my upcoming wedding. I am really grateful to Modiste.
            </p>

            <div className="flex">
              <Image
                src="/arrowleft.svg"
                className=""
                width={24}
                height={24}
                alt="arrowleft"
              />
              <span>02 / 14</span>
              <Image
                src="/arrowright.svg"
                className=""
                width={24}
                height={24}
                alt="arrowleft"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Consultation */}

      <div className="lg:h-[400px] w-full inline-flex lg:pl-[375px] justify-end items-center gap-[30px]">
        <div className="w-full h-full flex flex-col justify-center gap-10">
          <CustomComponent
            title="Need Consultations ?"
            description="Our team was handpicked for their understanding of materials, process and passion for fashion. 
          Whether you are browsing our site or visiting our store, we are always willing to share our deep knowledge and understanding of our makers and their craft."
            buttonText="Contact Us"
            learnMoreButton="Learn More"
          />
        </div>

        <div className="w-full bsg-gray-400 h-full relative lg:flex justify-center items-center hidden">
          <Image
            src="/consultant.png"
            fill
            className="font object-cover flex items-center justify-center"
            alt="hero image"
          />
        </div>
      </div>

      {/* Blogs */}
      <Blogs />
    </div>
  );
};

export default Home;
