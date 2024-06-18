'use client'
import { FC } from "react";
import { IProduct } from "@/redux/products/product.types";
import ProductItem from "./ProductItem";

interface IProductsListProps {
  products: IProduct[] | undefined;
}

const ProductsList: FC<IProductsListProps> = ({ products }) => {

  return (
    <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
      {products?.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductsList;
