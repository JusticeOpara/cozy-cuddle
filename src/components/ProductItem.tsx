"use client";

import { FC ,useState} from "react";
import Link from "next/link";
import { CiStar } from "react-icons/ci";
import { IProduct } from "../redux/products/product.types";
import AddToCartBtn from "./AddToCartBtn";
import { AiOutlineShopping } from "react-icons/ai";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const ProductItem: FC<IProduct> = ({ id, title, price, rating, thumbnail }) => {
  

  return (
    <div
      key={id}
      className="bg-white h-[500px] lg:h-full w-full flex flex-col items-center flex-1 rounded-3xl border border-[#E0E0E0] hover:shadow-2xl shadow-[#143A79] cursor-pointer">
      
      <div className="flex items-center justify-center h-full w-full bg-[#F2F2F2] rounded-t-3xl relative transition">
       
         <img src={thumbnail} alt={title} className="h-full w-full object-cover rounded-t-3xl"/> 
      </div>
     

      <div className="flex p-6 justify-center flex-col gap-4 items-start self-stretch">
        <span className="text-xl font-Barlow font-semibold">{title}</span>

        <span className="text-base font-Barlow font-bold">${price}</span>

        <span className="font-Montserrat font-medium text-xl text-black flex items-center">
         <CiStar/> {rating}
        </span>
      </div>
    </div>
  );
};

export default ProductItem;
