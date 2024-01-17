import React from 'react';

interface WhyChooseUsProps {
  title: string;
  icon: React.ReactNode; // You can pass any ReactNode as an icon
  description: string;
}

const BenfitsComponent: React.FC<WhyChooseUsProps> = ({ title, icon, description }) => {
  return (
    <div className="flex flex-col justify-center gap-6 flex-1 p-10 items-start bg-[#fff] rounded-3xl shadow-2xl shadow-gray-500">
      {icon}

      <div>
        <h1 className="text-[28px] font-Montserrat font-medium leading-9">{title}</h1>

        <span className="font-normal text-base font-Barlow text-[#4F4F4F]">{description}</span>
      </div>
    </div>
  );
};

export default BenfitsComponent;
