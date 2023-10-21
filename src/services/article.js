import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        preparedHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'e58de64dfamsh3f48fc8b1d9459ap10c52bjsncaf00aad1e6c');
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })
});

export const { useLazyGetSummaryQuery } = articleApi;