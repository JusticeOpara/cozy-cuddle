"use client"

import { useState, useEffect } from "react";
import CartItem from "@/components/CartItem";
import { useCartProductsSelector } from "@/redux/cart/cart.slice";
import useActions from "@/redux/hooks/useActions";
import { ICartProducts } from "@/redux/cart/cart.types";

interface ICartProps {
    setIsSubmitOrder: (isSubmitOrder: boolean) => void;
    products: ICartProducts[];
  }

const CartPage = () => {
  const [isSubmitOrder, setIsSubmitOrder] = useState(false);
  const { clearCart } = useActions();
  const products = useCartProductsSelector();
  
  useEffect(() => {
    if (isSubmitOrder) {
      clearCart();
    }
  }, [isSubmitOrder]);

  if (!products.length) return <p>Cart is empty</p>;
  return (

    <div className="cart-page mt-96">
      <h1 className="text-6xl">Shopping Cart</h1>
    
      {!isSubmitOrder ? (
        <>
          <div className="cart-list">
            {products.map((cartProduct) => (
              <CartItem key={cartProduct.id} {...cartProduct} />
            ))}
          </div>
          <div className="cart-summary">
            <p>
              Total Items: <strong>{products.length}</strong>
            </p>
            <p>
              Total Price:{" "}
              <strong>
                {products.reduce(
                  (acc, cur) => acc + cur.quantity * cur.product.price,
                  0
                )}{" "}
                $
              </strong>
            </p>
            <button
              type="button"
              className="btn"
              onClick={() => setIsSubmitOrder(true)}
              onKeyDown={() => setIsSubmitOrder(true)}
            >
              Submit Order
            </button>
          </div>
        </>
      ) : (
        <p>Thank you for your order!</p>
      )}


    </div>
   
  );
};

export default CartPage;
