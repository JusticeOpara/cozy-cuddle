import React from 'react';

interface CustomComponentProps {
  title: string;
  description: string;
  buttonText: string;
  learnMoreButton: string;
}

const CustomComponent: React.FC<CustomComponentProps> = ({
  title,
  description,
  buttonText,
  learnMoreButton,
}) => {
  return (
    <div className="w-full bg-gray-200 h-full flex flex-col justify-center gap-10">
      <div className="flex flex-col gap-[24px]">
        <h1 className="text-[48px] w-[570px] font-Montserrat font-medium leading-[60px] self-stretch">
          {title}
        </h1>
        <div className="divide-y  bg-black h-[2px] w-[200px] "></div>
      </div>

      <p className="font-normal font-Barlow text-base w-[570px]">
        {description}
      </p>

      <div className="flex gap-2">
        <button className="flex py-3 px-5 justify-center text-base items-center text-[#143A79] bg-[#FFD700] uppercase rounded-[800px] font-Barlow font-medium">
          {buttonText}
        </button>
        <button className="flex py-3 px-5 justify-center text-base items-center bg-inherit uppercase border text-[#143A79] gap-2 border-[#143A79] rounded-[800px] font-Barlow font-medium">
          {learnMoreButton}
        </button>
      </div>
    </div>
  );
};

export default CustomComponent;
