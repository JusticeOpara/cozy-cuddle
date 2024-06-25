import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { baseApi }  from "./index.api"
import authReducer from "./auth/auth.slice"
import cartReducer from './cart/cart.slice'
import productReducer from "./products/product.slice";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist/es/constants";

// Combine your slice reducers into a single root reducer
const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  auth: authReducer,
  product: productReducer,
  cart: cartReducer,
});


const persistConfig = {
  key: "root",
  storage, 
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
 
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },}).concat(baseApi.middleware), // need for cache
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;





