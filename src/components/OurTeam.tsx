import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface OurTeamProps {
  name: string;
  title: string;
  imgUrl?: string;
}

const TeamComponent: React.FC<OurTeamProps> = ({ name, title, imgUrl }) => {
  return (
    <div className="flex pb-[40px] flex-col justify-center items-center gap-6 flex-1 rounded-3xl bg-white shadow-lg">
      <div className="h-[300px] self-stretch w-full relative ">
        {imgUrl && (
          <Image
            src={imgUrl}
            className="rounded-t-3xl object-fill"
            layout="fill"
            alt="team mate"
          />
        )}
      </div>

      <div className="flex flex-col items-center justify-center gap-6 self-stretch px-[40px] bg-slate-300 py-0">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-center font-medium text-[28px] leading-9 font-Montserrat">
            {name}
          </h1>

          <span className="text-[#4F4F4F] text-center font-Barlow text-base font-normal">
            {title}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <FaTwitter size={24} color={"#4F4F4F"} />
          <FaFacebookF size={24} color={"#4F4F4F"} />
          <FaLinkedin size={24} color={"#4F4F4F"} />
          <MdEmail size={24} color={"#4F4F4F"} />
          <FaInstagramSquare size={24} color={"#4F4F4F"} />
        </div>
      </div>
    </div>
  );
};

const OurTeam = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-20 px-[375px] py-0">
      <div className="flex items-center flex-col justify-center gap-10 self-stretch">
        <h1 className="text-center font-Montserrat font-medium text-5xl leading-[60px]">
          Our Team
        </h1>
        <div className="divide-y  bg-black h-[2px] w-[200px]"></div>
      </div>

      <div className="h-full w-full grid lg:grid-cols-2 xl:grid-cols-3 gap-[30px] bg-slate-400">
        <TeamComponent
          title="Chief Executive"
          imgUrl="/team-mate01.png"
          name="John Doe"
        />
        <TeamComponent
          title="Chief Executive"
          imgUrl="/team-mate02.png"
          name="John Doe"
        />
        <TeamComponent
          title="Chief Executive"
          imgUrl="/team-mate03.png"
          name="John Doe"
        />
        <TeamComponent
          title="Chief Executive"
          imgUrl="/team-mate04.png"
          name="John Doe"
        />
        <TeamComponent
          title="Chief Executive"
          imgUrl="/team-mate05.png"
          name="John Doe"
        />
        <TeamComponent
          title="Chief Executive"
          imgUrl="/team-mate06.png"
          name="John Doe"
        />
      </div>
    </div>
  );
};

export default OurTeam;
