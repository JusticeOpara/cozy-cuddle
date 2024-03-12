import { configureStore } from "@reduxjs/toolkit";
import { baseApi }  from "./index.api"
import authReducer from "./auth/auth.slice"
import cartReducer from './cart/cart.slice'
import productReducer from "./products/product.slice";


export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authReducer,
    product: productReducer,
    cart: cartReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware), // need for cache
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


