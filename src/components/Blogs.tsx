"use client";

import React, { useRef ,useState,useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

interface BlogPostProps {
  title: string;
  description: string;
  date: string;
  imgUrl?: string;
}

const BlogComponent: React.FC<BlogPostProps> = ({
  title,
  description,
  date,
  imgUrl,
}) => {
  return (
    <div className="bg-[#fff] flex flex-col items-center flex-1 rounded-3xl border border-[#E0E0E0] hover:shadow-2xl shadow-[#143A79]">
      <div className="flex items-center justify-center h-[200px] w-full py-[9px] px-[13px] bg-[#F2F2F2] rounded-t-3xl relative">
        {imgUrl}
      </div>

      <div className="flex p-6 justify-center flex-col gap-4 items-start self-stretch">
        <span className="text-xs text-[#828282] font-Barlow font-normal">
          {date}
        </span>
        <span className="text-[20px] leading-[28px] font-Montserrat font-medium text-black">
          {title}
        </span>
        <span className="font-normal font-Barlow text-base text-[#4F4F4F]">
          {description}
        </span>
      </div>
    </div>
  );
};

const Blogs = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
      if (window.innerWidth < 768) {
          setIsMobile(true);
      }
  }, []);


  const paginationEl = useRef(null);
  return (
    <div className=" h-full w-full bg-slate-400 flex flex-col justify-center items-center py-0 lg:px-[375px] lg:gap-[80px] gap-10">
      <div className="flex flex-col justify-center items-center gap-6 self-stretch ">
        <h1 className="text-[48px] font-medium leading-[60px] font-Montserrat text-center">
          Blog
        </h1>
        <div className="divide-y bg-black h-[2px] w-[200px]"></div>
      </div>

      {/* <div className="w-full h-full flex flex-col items-center justify-center "> */}
      <Swiper
        slidesPerView={isMobile? 1 :3}
        spaceBetween={isMobile ? 16: 30}
        freeMode={true}
        pagination={{
          clickable: true,
          el: paginationEl.current,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper w-full h-full flex flex-row justify-center gap-[30px] items-stretch"
      >
        <SwiperSlide>
          <BlogComponent
            title="Fashion Trends in 2021"
            description="A new year means new trends. Fashion experts are predicting that statement sleeves, earthy colors, and tracksuits will be all the rage ..."
            imgUrl={
              <Image
                src="/blog-img01.png"
                fill
                className="object-fill rounded-t-3xl"
                alt="blog post"
              />
            }
            date="17 JAN 2021"
          />
        </SwiperSlide>

        <SwiperSlide>
          <BlogComponent
            title="Style & Business"
            description="By March, the number of styles available in extended sizing will exceed 500, and new styles will be added each season ..."
            imgUrl={
              <Image
                src="/blog-img01.png"
                fill
                className="object-fill rounded-t-3xl"
                alt="blog post"
              />
            }
            date="02 JAN 2021"
          />
        </SwiperSlide>

        <SwiperSlide>
          <BlogComponent
            title="Classic Jackets"
            description="While new jackets are being introduced as the new year approches, classic ones are in their class of their own (pun intended) ..."
            imgUrl={
              <Image
                src="/blog-img01.png"
                fill
                className="object-fill rounded-t-3xl "
                alt="blog post"
              />
            }
            date="02 JAN 2021"
          />
        </SwiperSlide>

        <SwiperSlide>
          <BlogComponent
            title="Fashion Trends in 2021"
            description="A new year means new trends. Fashion experts are predicting that statement sleeves, earthy colors, and tracksuits will be all the rage ..."
            imgUrl={
              <Image
                src="/blog-img01.png"
                fill
                className="object-fill rounded-t-3xl"
                alt="blog post"
              />
            }
            date="02 JAN 2021"
          />
        </SwiperSlide>

        <SwiperSlide>
          <BlogComponent
            title="Fashion Trends in 2021"
            description="A new year means new trends. Fashion experts are predicting that statement sleeves, earthy colors, and tracksuits will be all the rage ..."
            imgUrl={
              <Image
                src="/blog-img01.png"
                fill
                className="object-fill rounded-t-3xl"
                alt="blog post"
              />
            }
            date="02 JAN 2021"
          />
        </SwiperSlide>
      </Swiper>

      <div ref={paginationEl} className="w-[224px] h-2 flex gap-3 justify-center items-cnter" />

      <button className="flex py-3 px-5 justify-center text-base items-center bg-inherit uppercase border text-[#143A79] gap-2 border-[#143A79] rounded-[800px] font-Barlow font-medium">
        Read More
      </button>
    </div>
  );
};

export default Blogs;
