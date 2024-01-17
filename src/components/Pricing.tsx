import Image from "next/image";
import React from "react";
import { RiCheckLine } from "react-icons/ri";

interface PricingCardProps {
  title: string;
  iconSrc: string;
  price: string;
  description: string;
  features: string[];
}

// Reusable PricingCard component
const PricingCard: React.FC<PricingCardProps> = ({
  title,
  iconSrc,
  price,
  description,
  features,
}) => (
  <div className="flex p-10 flex-col justify-center items-center gap-10 flex-1 bg-white rounded-3xl shadow-2xl">
    <div className="flex w-[302px] flex-col items-center gap-6">
      <Image src={iconSrc} width={80} height={80} alt={`${title} icon`} />
      <p className="text-black text-center font-Montserrat font-medium text-3xl text-[28px]">
        {title}
      </p>
      <span className="text-[#4F4F4F] text-center font-Barlow text-base">
        {description}
      </span>
    </div>

    <div className="flex w-[302px] flex-col items-center gap-6">
      <h1 className="font-Montserrat">
        <span className="text-black text-6xl font-semibold">{price} </span>
        <span className="text-[#828282] text-[28px] font-medium leading-9">
          / mo{" "}
        </span>
      </h1>
      <button className="flex py-3 px-5 justify-center items-center border rounded-3xl font-Barlow text-[#143A79] text-base font-semibold uppercase">
        Get Started
      </button>
    </div>

    <div className="flex w-[302px] flex-col items-center gap-6">
      {features.map((feature, index) => (
        <span key={index} className="flex items-center gap-2 self-stretch">
          <RiCheckLine size={24} />
          <p className="text-[#333] font-Barlow text-base ">{feature}</p>
        </span>
      ))}
    </div>
  </div>
);

const Pricing: React.FC = () => {
  return (
    <div className="flex w-full h-full flex-col justify-center items-center gap-20">
      <div className="flex items-center flex-col justify-center gap-10">
        <h1 className="text-center font-Montserrat font-medium text-5xl leading-[60px]">
          Pricing
        </h1>

        <div className="divide-y  bg-black h-[2px] w-[200px]"></div>

        <div className="flex items-center">
          <span className="flex justify-center items-center py-1 px-3 bg-[#FFD700] rounded-l-2xl font-Barlow text-base font-semibold text-[#143A79]">
            Yearly
          </span>

          <span className="flex justify-center items-center py-1 px-3 bg-[#F2F2F2] rounded-r-2xl font-Barlow text-base font-semibold text-[#828282]">
            Monthly
          </span>
        </div>
        <p className="text-[#EB5757] text-center text-base font-semibold font-Barlow">
          Save 50% on Yearly
        </p>
      </div>

      <div className="flex justify-center items-start gap-[30px]">
        <PricingCard
          title="Basic"
          iconSrc="/bicycle.svg"
          price="$20"
          description="Basic Package that fits many users needs"
          features={[
            "On-demand Help",
            "30 Days Money Back Guarantee",
            "Resize",
            "Cutting-out",
          ]}
        />
        <PricingCard
          title="Standard"
          iconSrc="/standard.svg"
          price="$50"
          description="Basic and something extra"
          features={[
            "Everything in Basic",
            "More Collections",
            "Priority Placement in Appointments",
            "Body Measurements",
          ]}
        />

        <PricingCard
          title="Premium"
          iconSrc="/premium.svg"
          price="$100"
          description="Include more premium services"
          features={[
            "Everything in Standard",
            "Access to Exclusive Tailors",
            "Exclusive Appointments",
            "Access to Premium Collections",
          ]}
        />
      </div>
    </div>
  );
};

export default Pricing;
