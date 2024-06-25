import { FC } from 'react';
import { ICartProducts } from '@/redux/cart/cart.types';
import useActions from '@/redux/hooks/useActions';
import AddToCartBtn from './AddToCartBtn';
import RemoveFromCartBtn from './RemoveFromCartBtn';
import { MdDelete } from 'react-icons/md';
import Image from 'next/image';



const CartItem: FC<ICartProducts> = ({ product: { price, thumbnail, title }, quantity, id }) => {
  
  const { deleteCartItem } = useActions();

  return (
    <div className='bg-red-500'>
    
      <div className='w-full'>
        <Image src="/accessories02.png" className='' width={100} height={100} alt=''/>
         <img src={thumbnail} alt={title} className=''/>
      </div>
      <div className=''>
        <div className=''>{title}</div>
        <div className=''>{price}$</div>
        <div className=''>
          <div className=''>
            <RemoveFromCartBtn id={id}>-</RemoveFromCartBtn>
            <span>{quantity}</span>
            <AddToCartBtn id={id}>+</AddToCartBtn>
          </div>
          <div
            className='cart-item__delete'
            onClick={() => deleteCartItem(id)}
            onKeyDown={() => deleteCartItem(id)}
            role='button'
            tabIndex={0}
          >
            <MdDelete />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
