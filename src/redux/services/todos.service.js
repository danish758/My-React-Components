import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const toDoService = createApi({
  reducerPath: "toDos",
  keepUnusedDataFor: 5,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getToDos: builder.query({
      query: (page) => {
        return {
          url: `todos/?_start=${page}&_limit=10`,
          method: "GET",
        };
      },
    }),
  }),
});
export const { useGetToDosQuery } = toDoService;
