import Image from "next/image";
import { FaPlayCircle, FaRegHeart, FaRegStar } from "react-icons/fa";
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
  return (
    <>
      <div className="w-full h-[800px] bg-[#E9F0FB] gap-[30px] flex pl-[375px] items-center">
        <div className="w-full bg-gray-200 h-full flex flex-col justify-center gap-10">
          <div className="flex flex-col gap-[24px]">
            <h1 className="text-[48px] w-[570px] font-Montserrat font-medium leading-[60px] self-stretch">
              Find <span className="text-[#143A79]"> Custom Suits </span>{" "}
              Tailored For You
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

        <div className="w-full bg-gray-400 h-full relative flex justify-end items-center">
          <Image
            src="/hero.png"
            fill
            className="object-cover"
            alt="hero image"
          />
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

      {/* Products */}

      <div className="w-full h-[846px] flex px-20 justify-center gap-[30px] bg-blue-300 my-[144px]">
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

        <div className="grid grid-cols-1 2xl:grid-cols-3 gap-[30px] ">
          {Products?.map((data) => (
            <div
              key={data.id}
              className="bg-[#fff] flex flex-col items-center flex-1 rounded-3xl border border-[#E0E0E0] hover:shadow-2xl shadow-[#143A79]"
            >
              <div className="flex items-center justify-center h-full w-full py-[9px] px-[13px] bg-[#F2F2F2] rounded-t-3xl relative">
                <Image src={data.imgUrl} fill objectFit="cover" alt="shirt" />
              </div>

              <div className="flex p-6 justify-center flex-col gap-6 items-start self-stretch">
                <span className="text-base font-Barlow font-semibold">
                  {data.title}
                </span>
                <span className="font-Montserrat font-medium text-xl text-black">
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

      {/* Custom shirt */}
      <div className="h-[800px] w-full flex pr-[375px] items-center gap-[30px] bg-red-200">
        
        
        <div className="w-[965px] h-full flex pt-0 pb-0 pl-[165px] pr-[80px] justify-end items-center bg-red-500">


          <div className="w-[700px] h-full bg-gray-800 relative p-0 m-0 flex-shrink-0">
              <Image src="/img-collage02.png" width={500} height={600} className="absolute z-5 right-[20%] top-[20%] tranosform"  alt="img collage" />
          
              <Image src="/img-collage.png" className="absolute z-5 top-0 right-0" width={321} height={388}  alt="img collage" />
            

            
              <Image src="/img-collage03.png" className="w-[500px] h-[295px] absolute z-10 bottom-0 right-0" width={491} height={295} alt="img collage" />
            
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
      <div className="h-[800px] w-full flex pl-[375px] items-center gap-[30px] my-[144px]">
        <CustomComponent
          title="Custom Thobe"
          description="Over rich 9+ years of experience, Thobe Customization Software has benefited numerous clients in Arab countries. Its state-of-art technology meets the growing trend and desires of people"
          buttonText="Customize thobe"
          learnMoreButton="Learn More"
        />

        <div className="w-full h-full bg-gray-200"></div>
      </div>

      {/* explore fabrics */}

      <div className="w-full h-[846px] flex flex-row-reverse px-20 justify-center gap-[30px] bg-blue-300 my-[144px]">
        <div className="flex w-[465px] p-20 flex-col justify-center items-start self-stretch gap-10 rounded-3xl bg-[#E9F0FB]">
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

        <div className="grid grid-cols-1 2xl:grid-cols-3 gap-[30px] ">
          {Fabrics?.map((data) => (
            <div
              key={data.id}
              className="bg-[#fff] flex flex-col items-center flex-1 rounded-3xl border border-[#E0E0E0] hover:shadow-2xl shadow-[#143A79]"
            >
              <div className="flex items-center justify-center h-full w-full py-[9px] px-[13px] bg-[#F2F2F2] rounded-t-3xl relative">
                <Image
                  src={data.imgUrl}
                  fill
                  objectFit="cover"
                  className="rounded-t-3xl "
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
      <div className="px-[375px] w-full lg:h-[1076px] flex justify-center relative">
        <div className="w-full h-[803px] absolute inset-0 bg-no-repeat bg-center bg-cover top-0">
          <Image
            src="/yellow-bg.svg"
            className="object-cover"
            fill
            alt="game-pad"
          />
        </div>

        <div className="absolute z-5 top-0 flex flex-col gap-20 justify-center ">
          <div className="flex flex-col justify-center items-center gap-6 self-stretch pt-20">
            <h1 className="text-[48px] font-medium leading-[60px] font-Montserrat text-center">
              See Our Accessories
            </h1>
            <div className="divide-y bg-black h-[2px] w-[200px]"></div>
          </div>

          <div className="flex h-[830px] flex-col justify-center gap-[30px] items-start">
            <div className="h-[400px] w-full flex gap-[30px]">
              <div className="h-full w-[695px] justify-center items-center flex relative">
                <Image
                  src="/accessories01.png"
                  fill
                  className="rounded-3xl"
                  alt="bag accessories"
                />
              </div>
              <div className="h-full w-[445px] justify-center items-center flex relative ">
                <Image
                  src="/accessories02.png"
                  fill
                  className="rounded-3xl"
                  alt="watch accessories"
                />
              </div>
            </div>
            <div className="h-[400px] w-full relative">
              <Image
                src="/accessories03.png"
                className="rounded-3xl"
                fill
                alt="perfume accessories"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Choose Us */}
      <div className="h-full w-full bg-blue-500 py-0 px-[375px] flex flex-col justify-between items-center gap-[80px]">
        <div className="flex flex-col justify-center items-center gap-6 self-stretch ">
          <h1 className="text-[48px] font-medium leading-[60px] font-Montserrat text-center">
            Why Choose Us
          </h1>
          <div className="divide-y bg-black h-[2px] w-[200px]"></div>
        </div>

        <div className="h-full w-full grid 2xl:grid-cols-3 gap-[30px]">
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
      <div className=" h-full gap-[110px]  w-full my-40 bg-slate-400 flex flex-col justify-between items-center px-[375px] ">
        <div className="flex flex-col justify-center items-center gap-6 self-stretch">
          <h1 className="text-[48px] font-medium leading-[60px] font-Montserrat text-center">
            Read What Our Clients Say
          </h1>
          <div className="divide-y bg-black h-[2px] w-[200px]"></div>
        </div>

        <div className="flex items-start gap-[30px]">
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

      <div className="lg:h-[400px] w-full inline-flex pl-[375px] justify-end items-center gap-[30px]">
        <div className="w-full h-full flex flex-col justify-center gap-10">
          <CustomComponent
            title="Need Consultations ?"
            description="Our team was handpicked for their understanding of materials, process and passion for fashion. 
          Whether you are browsing our site or visiting our store, we are always willing to share our deep knowledge and understanding of our makers and their craft."
            buttonText="Contact Us"
            learnMoreButton="Learn More"
          />
        </div>

        <div className="w-full bsg-gray-400 h-full relative flex justify-center items-center">
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
    </>
  );
};

export default Home;
