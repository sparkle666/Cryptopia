import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
//create the headers
const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '961a0eee00msh1fc236b67b9e866p1c3974jsn0199a8bbfa9b'
  }
// creating a url
const url = 'https://bing-news-search1.p.rapidapi.com'
// create a utility function to take in a url and add headers to it
const createRequest = (url) => ({
    url,
    headers: cryptoNewsHeaders
})

// the api slics
export const cryptoNewsApi = createApi(
      {
          reducerPath: "newsApi",
          baseQuery: fetchBaseQuery({baseUrl: url}),
          endpoints: (builder) => ({
              getCryptoNews: builder.query({
                  query: ({newsCategory, count})=> createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
              })
          })
      }
  )

export const {useGetCryptoNewsQuery} = cryptoNewsApi