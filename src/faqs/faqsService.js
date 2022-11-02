import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const faqsService = createApi({
  reducerPath: "addfaqs",
  //   tagTypes: ["items"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.mooner.com.sg/user_management",
    prepareHeaders: (headers, { getState }) => {
      // console.log("getState", headers, getState());
      const {
        authSlice: { token },
      } = getState();
      // console.log("token", token);
      headers.set("authorization", `Bearer ${token}`);
      console.log("headers", headers);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    addFAQ: builder.mutation({
      query: (formdata) => ({
        url: "admin_register_user/",
        method: "POST",
        body: formdata,
      }),
      //   console.log("data")
    }),
  }),
});
export const { useAddFAQMutation } = faqsService;
