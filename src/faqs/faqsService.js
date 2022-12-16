import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const faqsService = createApi({
  reducerPath: "addfaqs",
  tagTypes: ["sub_admins"],
  keepUnusedDataFor: 300,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.mooner.com.sg/user_management",
    prepareHeaders: (headers, { getState }) => {
      console.log("redux", "reducer");
      const {
        authSlice: { token },
      } = getState();
      // console.log("token", token);
      headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    addFAQ: builder.mutation({
      query: (formdata) => {
        console.log("redux", "reducer action");
        return {
          url: "admin_register_user/",
          method: "POST",
          body: formdata,
        };
      },
      invalidatesTags: ["sub_admins"],
    }),
    getSubAdmins: builder.query({
      query: (page) => {
        // console.log("redux", "reducer action");
        return {
          url: `sub_admins/?page=${page}`,
          method: "GET",
        };
      },
      providesTags: ["sub_admins"],
    }),
  }),
});
export const { useAddFAQMutation, useGetSubAdminsQuery } = faqsService;
