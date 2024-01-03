import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";
import { Products } from "@/utills/data";



console.log(Products,"--products")
const Home:React.FC = () =>{
  return (
    <>
      <div className="w-full h-[800px] bg-[#E9F0FB] gap-[30px] flex pl-[375px] items-center">
        <div className="w-full bg-gray-200 h-full flex flex-col justify-center gap-10">
          <div className="flex flex-col gap-[24px]">
            <h1 className="text-[48px] w-[570px] font-Montserrat font-medium leading-[60px] self-stretch">
              Find Custom Suits Tailored For You
            </h1>
            <div className="divide-y  bg-black h-[2px] w-[200px] "></div>
          </div>

          <p className="font-normal font-Barlow text-base w-[570px]">
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

        <div className=" w-full bg-gray-400 h-full relative">
          <Image src="/hero.png" fill alt="hero image" />
        </div>
      </div>

      {/*Brand  */}

      <div className="w-full h-[320px] p-20 flex justify-between items-center bdg-[#F2F2F2] bg-slate-500">
        <Image
          src="/zara-brand.svg"
          width={160}
          height={160}
          className="flex items-center justify-center"
          alt="zara brand"
        />
        <Image
          src="/pull-brand.svg"
          width={160}
          height={160}
          className="flex items-center justify-center"
          alt="pull brand"
        />
        <Image
          src="/hollister-brand.png"
          className="flex items-center justify-center"
          width={160}
          height={160}
          alt="hollister-brand"
        />
        <Image
          src="/versace-brand.png"
          width={160}
          height={160}
          className="flex items-center justify-center"
          alt="versace brand"
        />

        <Image
          src="/burberry-brand.png"
          width={160}
          height={160}
          className="flex items-center justify-center"
          alt="burberry brand"
        />
        <Image
          src="/hermes-brand.png"
          width={160}
          height={160}
          className="flex items-center justify-center"
          alt="hermes brand"
        />
      </div>

      {/* New Arrivals */}

      <div className="w-full h-[846px] flex px-20 justify-center gap-[30px] bg-blue-300 my-[240px]">
        <div className="flex w-[465px] p-20 flex-col justify-center items-start self-stretch gap-10 rounded-3xl bg-[#E9F0FB]">
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

        <div className="flex flex-col gap-[30px] flex-1 items-start">
          {/* first row */}
          <div className="flex gap-[30px] self-stretch items-start ">
         {/* {Products?.map((data)=>{
<div key={data}></div>
        })}  */}
          </div>

          {/* second row */}
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Home
