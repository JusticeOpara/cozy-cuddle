import { createContext, useContext, ReactNode , useState} from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"

type ShoppingCartProviderProps = {
    children: ReactNode
}



type ShoppingCartContext = {
    openCart: () => void
     closeCart: () => void
      cartQty: number
      cartItems: CartItem[]
    getItemsQty : (id: number) => number 
    increaseCartQty : (id: number) => void 
    decreaseCartQty : (id: number) => void 
    removeFromCart : (id: number) => void 
}

type CartItem= {
    id: number
    qty: number
}

const ShoppingCartContext = createContext ({} as ShoppingCartContext
) 
export function useShoppingCart () {
    return useContext(ShoppingCartContext)
}


export function ShoppingCartProvider ( {children}:ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
        "shopping-cart",
        []
    )

    //console.log(cartItems, "cartItems")
    const [isOpen, setIsOpen] = useState(false)

    function getItemsQty  (id:number) {
        return cartItems.find(item => item.id ===id)?.qty || 0
    }

     const cartQty = cartItems.reduce(
    (qty, item) => item.qty + qty,
    0
  )


    const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

    function increaseCartQty(id: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, qty: 1 }]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, qty: item.qty + 1 }
          } else {
            return item
          }
        })
      }
    })
  }


    function  decreaseCartQty(id: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.qty === 1) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, qty: item.qty - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

   function removeFromCart(id: number) {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }

    return (
        <ShoppingCartContext.Provider value={{cartItems, openCart, closeCart, cartQty, getItemsQty, increaseCartQty,decreaseCartQty,removeFromCart}}> 
        {children}
        {/* <ShoppingCart/> */}
    </ShoppingCartContext.Provider>
    )
}

