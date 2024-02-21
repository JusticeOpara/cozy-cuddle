import { configureStore } from "@reduxjs/toolkit";
import { baseApi }  from "./index.api"
import authReducer from "./auth/auth-slice"
import cartReducer from './cart/cart-slice'

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authReducer,
    cart: cartReducer
  },
  middleware:getDefultMiddleware => 
      getDefultMiddleware({
        serializableCheck:false,
      }).concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
