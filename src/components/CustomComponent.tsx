import React from "react";

interface CustomComponentProps {
  title: string;
  description: string;
  subDescription?: string | null;
  buttonText: string;
  learnMoreButton?: string;
}

const CustomComponent: React.FC<CustomComponentProps> = ({
  title,
  description,
  subDescription,
  buttonText,
  learnMoreButton,
}) => {
  return (
    <div className="w-full h-full flex flex-col justify-center gap-10">
      <div className="flex flex-col gap-[24px]">
        <h1 className="md:text-[48px] lg:w-[570px] text-4xl font-Montserrat font-medium md:leading-[60px] self-stretch">
          {title}
        </h1>
        <div className="divide-y  bg-black h-[2px] w-[200px] "></div>
      </div>
      <div className="flex flex-col gap-6">
        <p className="font-normal font-Barlow text-base md:w-[570px] w-full">
          {description}
        </p>
        {subDescription && (
          <p className="font-normal font-Barlow text-base md:w-[570px] w-full">
            {subDescription}
          </p>
        )}
      </div>

      <div className="flex gap-2">
        <button className="flex py-3 px-5 justify-center text-base items-center text-[#143A79] bg-[#FFD700] uppercase rounded-[800px] font-Barlow font-medium">
          {buttonText}
        </button>
        {learnMoreButton && (
          <button className="flex py-3 px-5 justify-center text-base items-center bg-inherit uppercase border text-[#143A79] gap-2 border-[#143A79] rounded-[800px] font-Barlow font-medium">
            {learnMoreButton}
          </button>
        )}
        {/* <button className="flex py-3 px-5 justify-center text-base items-center bg-inherit uppercase border text-[#143A79] gap-2 border-[#143A79] rounded-[800px] font-Barlow font-medium">
          {learnMoreButton}
        </button> */}
      </div>
    </div>
  );
};

export default CustomComponent;
