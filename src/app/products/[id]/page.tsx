"use client";

import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
//  import Image from 'next/image';
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { useGetProductQuery } from "@/redux/products/product.api";
import AddToCartBtn from "@/components/AddToCartBtn";
import Loading from "@/components/Loading";
import "swiper/css";
import "swiper/css/pagination";

type ProductParamsId = {
  id: string;
};

const ProductDetails = () => {
  const { id } = useParams() as ProductParamsId;
  const { data: product, isLoading } = useGetProductQuery({ id });
  console.log(product, "--product");
  if (isLoading) return <Loading />;
  if (!product) return <p>Product not found</p>;

  const {
    title,
    description,
    price,
    rating,
    category,
    images,
    id: productId,
  } = product;

  return (
    <div className="w-full h-full md:px-[80px] px-8 flex justify-between gap-24">
      <div className="w-full font-Barlow lg:px-8 justify-center flex flex-col gap-8 bg-slate-400">
        <div className="">
          <p className="capitalize">
            <strong>Category:</strong> {category}
          </p>
        </div>
     

        <div className="flex flex-col gap-4">
          <h1 className="font-Montserrat font-extrabold text-3xl">{title}</h1>
          <div className="w-full flex justify-between items-center">
            <span className="font-medium text-2xl">${price}</span>

            <span className="flex items-center gap-1">
              <a className="flex text-2xl">
                {Array.from({ length: 5 }, (_, index) => (
                  <CiStar
                    key={index}
                    className={
                      index < Math.round(rating)
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }
                  />
                ))}
              </a>

              <a className="font-medium text-lg">{rating}</a>
            </span>
          </div>
        </div>

        <span className="text-lg w-auto">{description}</span>

        <div className="flex gap-4">
          <div className="border border-black py-2 px-4 rounded-md font-bold text-lg cursor-pointer flex items-center gap-2">
            <MdFavoriteBorder size={'24px'} />
            <span className="text-center"> Add to Wishlist</span>
          </div>

          <AddToCartBtn id={productId}>Add to cart</AddToCartBtn>
        </div>
        <span className="font-semibold text-base">Free 3-5 days shipping • Tool-free assembly • 30-day trial</span>
        <div className="gap-2 flex justify-end">
        <span className="text-2xl">𝕏</span>
        <span className="text-2xl">ⓕ</span> 
        <span className="text-2xl">📷</span>
        
        </div>
      </div>

      <div className="bg-gray-300 w-full">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1}
        >
          {images.map((image) => (
            <SwiperSlide key={image} className="w-full flex justify-center items-center">
              {/* <Image src={image} fill alt={}/> */}
              <img src={image} alt={title} className="h-auto object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductDetails;
