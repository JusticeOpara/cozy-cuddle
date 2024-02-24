

import { FC } from 'react';
import Link from 'next/link';
import { CiStar } from 'react-icons/ci';
import { IProduct } from '../redux/products/product.types';
import AddToCartBtn from '../app/cart/AddToCartBtn';

const ProductItem: FC<IProduct> = ({ id, title, price, rating, thumbnail }) => (
  <div className='product-item'>
    <div className='product-pic'>
      {/* <Link href={`/products/${String(id)}`}> */}
        <img src={thumbnail} alt={title} />
      {/* </Link> */}
    </div>
    <div className='product-title'>
      {title}
      {/* <Link href={`/products/${String(id)}`}>{title}</Link> */}
    </div>
    <div className='product-price'>{price}$</div>
    <div className='product-info'>
      <div className='product-rating'>
        <CiStar />
        {rating}
      </div>
      <AddToCartBtn id={id}>Buy</AddToCartBtn>
    </div>
  </div>
);

export default ProductItem;