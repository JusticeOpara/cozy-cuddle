"use client";

import { FC } from "react";
import Link from "next/link";
import { IProduct } from "@/redux/products/product.types";
import AddToCartBtn from "./AddToCartBtn";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const ProductItem: FC<IProduct> = ({ id, title, price, rating, thumbnail }) => {
  return (
    <div
      key={id}
      className="bg-white h-[500px] lg:h-full w-full flex flex-col items-center flex-1 rounded-3xl border border-[#E0E0E0] hover:shadow-2xl shadow-[#143A79] cursor-pointer"
    >
      <Link
        href={`/products/${String(id)}`}
        className="flex items-center justify-center h-full w-full bg-[#F2F2F2] rounded-t-3xl relative transition"
      >
        {/* <Image
          src={thumbnail}
          alt={title}
          fill
          className="h-full w-full object-cover rounded-t-3xl"
        /> */}
         <img src={thumbnail} alt={title} /> 
      </Link>

      <div className="flex p-6 justify-center flex-col gap-4 items-start self-stretch">
        <Link href={`/products/${String(id)}`} className="text-xl font-Barlow font-semibold">{title}</Link>

        <span className="text-base font-Barlow font-bold">${price}</span>

        <div className="flex w-full justify-between items-center">
          <span className="font-Montserrat font-medium text text-black flex items-center gap-2">
             
            <FaStar fill={'#FFD701'}/>  {rating}
          </span>
          <AddToCartBtn id={id}> Add</AddToCartBtn>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
