import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders = {
    'x-rapidapi-host': process.env.REACT_APP_API_HOST,
    'x-rapidapi-key': process.env.REACT_APP_API_KEY
}
const baseURL = "https://coinranking1.p.rapidapi.com"

const createRequest = (url) => ({url, headers: cryptoApiHeaders}) // use this to add a headers to the query with the url


// export const coinsAPI = createApi({
//     reducerPath: 'avatarAPI',
//     baseQuery: fetchBaseQuery({ baseUrl: 'https://coinranking1.p.rapidapi.com/'}),
//     endpoints: (builder) => ({
//         getCoins: builder.query({
//         query: () => createRequest('coins')
//         })
//     })
//   })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseURL}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
        // query: (count) => createRequest(`coins?limit=${count}`)
        query: (count) => createRequest(`coins`)
        })
    })
  })

export const {useGetCryptosQuery} = cryptoApi; //redux toolkit provides the useGEtCr... hooks for you, It contains
// both fetching state, loading and data, it also cahes it.