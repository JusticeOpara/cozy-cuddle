import Image from "next/image"


const Accessories = () => {
  return (
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
  )
}

export default Accessories