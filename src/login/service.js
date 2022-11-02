import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loginService = createApi({
  reducerPath: "login",
  //   tagTypes: ["items"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.mooner.com.sg/account",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (formdata) => ({
        url: "admin_login/",
        method: "POST",
        body: formdata,
      }),
      //   console.log("data")
    }),
  }),
});
export const { useLoginMutation } = loginService;
