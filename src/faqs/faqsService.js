import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const faqsService = createApi({
  reducerPath: "addfaqs",
  //   tagTypes: ["items"],
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
    }),
    getSubAdmins: builder.mutation({
      query: (page) => {
        // console.log("redux", "reducer action");
        return {
          url: `sub_admins/?page=${page}`,
          method: "GET",
        };
      },
    }),
  }),
});
export const { useAddFAQMutation, useGetSubAdminsMutation } = faqsService;
