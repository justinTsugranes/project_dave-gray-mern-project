import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  // change baseURL for prod
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }),
  // cached data
  tagTypes: ['Note', 'User'],
  // details for endpoints
  endpoints: (builder) => ({}),
})
