import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Medium } from '../types/medium';

const apiSlice = createApi({
  reducerPath: 'feed api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.rss2json.com/v1/',
  }),
  tagTypes: ['Feed'],
  endpoints: builder => ({
    getFeed: builder.query<Medium, void>({
      query: () =>
        'api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40rafaelinacio.articles',
      providesTags: ['Feed'],
    }),
  }),
});

export const { useGetFeedQuery } = apiSlice;
export { apiSlice };
