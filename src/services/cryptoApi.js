
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders  = {
    'X-RapidAPI-Key': '56d3212c27mshb589ed7ed14d201p1acdb5jsna676b1d18af3',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers : cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) =>({
        getCryptos : builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails : builder.query({
            query: (coinId) => createRequest(`/coins?limit=${coinId}`),
        }),
        // Note: Change the coin price history endpoint from this - `coin/${coinId}/history/${timeperiod} to this - `coin/${coinId}/history?timeperiod=${timeperiod}`
        getCryptoHistory: builder.query({
        query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
        }),
        // Note: To access this endpoint you need premium plan
        getExchanges: builder.query({
        query: () => createRequest('/exchanges'),
        }),
    }),
});

//to get the data about homepage
export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery, useGetExchangesQuery,
    useGetCryptoHistoryQuery,
} = cryptoApi;



//no.of endpoints create more request


//---from rapid-api -> coinranking----
/*const options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins',
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    'tiers[0]': '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '50',
    offset: '0'
  },
  headers: {
    'X-RapidAPI-Key': '56d3212c27mshb589ed7ed14d201p1acdb5jsna676b1d18af3',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
};*/
