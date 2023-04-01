
//this api will fetch data from rapid api
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '56d3212c27mshb589ed7ed14d201p1acdb5jsna676b1d18af3',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers:cryptoApiHeaders })


//here we form api
export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints: (builder) =>({
        getCryptos : builder.query({
            query: (count) => createRequest(`/coins?limit = ${count}`),
        })
    })
})

export const {
    useGetCryptosQuery,
} = cryptoApi; //comming from cryptoApi

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'X-RapidAPI-Key': '56d3212c27mshb589ed7ed14d201p1acdb5jsna676b1d18af3',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };