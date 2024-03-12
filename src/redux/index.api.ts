import { RootState } from "./index";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = 'https://dummyjson.com';

export const baseApi = createApi({
  reducerPath: "baseApi",

  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,

    prepareHeaders: (headers, api) => {
      const { auth } = api.getState() as RootState;
      if (auth.token) {
        headers.set("Authorization", `Bearer ${auth.token}`);
      }
      return headers;
    },
  }),

  endpoints: (build) => ({}),// keslint-disable-line @typescript-eslint/no-unused-vars
});

// export const productsApi = createApi({
//   reducerPath:"products",
//   baseQuery: fetchBaseQuery({baseUrl:"https://dummyjson.com"}),
//   endpoints:(builder)=>({
//     getAllProduct : builder.query({
//       query: () => '/products'
//     })
//   })

// })

// export const { useGetAllProductQuery} = productsApi
