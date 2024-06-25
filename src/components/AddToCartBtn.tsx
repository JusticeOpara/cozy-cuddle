"use client"

import { FC } from "react";
import useActions from "@/redux/hooks/useActions";
import { useProductByIdSelector } from "@/redux/products/product.slice";

interface IAddToCartBtnProps {
  id: number;
  children?: React.ReactNode;
}

const AddToCartBtn: FC<IAddToCartBtnProps> = ({ id, children }) => {
  const { addToCartProduct } = useActions();

  const product = useProductByIdSelector(id);
  console.log(product,);
  const { title, price, thumbnail } = product! || {};

  const addToCartHandler = (productId: number) => {
    const cartProduct = {
      id: productId,
      quantity: 1,
      product: {
        id: productId,
        title,
        price,
        thumbnail,
      },
    };
    console.log("Adding to cart:", cartProduct);
    addToCartProduct(cartProduct);
  };

  return (
    <button
      className="py-2 px-4 rounded-md bg-[#FFD701] font-Montserrat font-semibold text-base"
      type="button"
      data-product-id={id}
      onClick={() => addToCartHandler(id)}
    >
      {children}
    </button>
  );
};

export default AddToCartBtn;
