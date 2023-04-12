

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders  = {
    'X-BingApis-SDK': 'true',
      'X-RapidAPI-Key': '56d3212c27mshb589ed7ed14d201p1acdb5jsna676b1d18af3',
      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({url, headers : cryptoNewsHeaders});

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) =>({
        getCryptoNews : builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});

//to get the data about homepage
export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;


// const options = {
//     method: 'GET',
//     url: 'https://bing-news-search1.p.rapidapi.com/news',
//     params: {safeSearch: 'Off', textFormat: 'Raw'},
//     headers: {
//       'X-BingApis-SDK': 'true',
//       'X-RapidAPI-Key': '56d3212c27mshb589ed7ed14d201p1acdb5jsna676b1d18af3',
//       'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
//     }
//   };