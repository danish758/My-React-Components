import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const searchService = createApi({
  reducerPath: "search",
  tagTypes: ["search"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.mooner.com.sg/mooner_faqs/",
    prepareHeaders: (headers, { getState }) => {
      const {
        authSlice: { token },
      } = getState();
      // console.log("token", token);
      headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSearchResult: builder.query({
      query: (searchKey) => {
        // console.log("redux", "reducer action");
        return {
          url: `search_faqs/?&search=${searchKey}`,
          method: "GET",
        };
      },
      //   providesTags: ["sub_admins"],
    }),
  }),
});
export const { useGetSearchResultQuery } = searchService;
