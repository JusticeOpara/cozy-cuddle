import { RootState } from "./index";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
  reducerPath: "baseApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl:  "https://dummyjson.com",

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
