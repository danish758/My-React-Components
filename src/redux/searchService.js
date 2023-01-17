import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const searchService = createApi({
  reducerPath: "search",
  tagTypes: ["search"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
    // prepareHeaders: (headers, { getState }) => {
    //   const {
    //     authSlice: { token },
    //   } = getState();
    //   // console.log("token", token);
    //   headers.set("authorization", `Bearer ${token}`);
    //   return headers;
    // },
  }),
  endpoints: (builder) => ({
    getSearchResult: builder.query({
      query: (params) => {
        // console.log("redux", "reducer action");
        return {
          url: `users/search?q=${params.filterName}&limit=${params.limit}`,
          method: "GET",
        };
      },
      //   providesTags: ["sub_admins"],
    }),
  }),
});
export const { useGetSearchResultQuery } = searchService;
