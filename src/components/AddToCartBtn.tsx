'use client'
import { FC } from 'react';
import useActions from '@/redux/hooks/useActions';
import { useProductByIdSelector } from '@/redux/products/product.slice';

interface IAddToCartBtnProps {
  id: number;
  children?: React.ReactNode;
}

const AddToCartBtn: FC<IAddToCartBtnProps> = ({ id, children }) => {
  const { addToCartProduct } = useActions();

  const product = useProductByIdSelector(id);
  console.log(product,'PRODUCT ID SELECT')


  const addToCartHandler = (productId: number) => {
    if (product) {
      const { title, price, thumbnail } = product;

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

      addToCartProduct(cartProduct);
    } else {
      console.error(`Product with ID ${productId} not found.`);
    }
  };


  return (
    <button
      className='py-1 px-2 rounded-lg bg-[#FFD701] font-Montserrat font-semibold text-base'
      type='button'
      data-product-id={id}
      onClick={() => addToCartHandler(id)}
    >
      {children}
    </button>
  );
};

export default AddToCartBtn;