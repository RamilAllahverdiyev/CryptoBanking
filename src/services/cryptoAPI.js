import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const cryptoAPIHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '8deb780d12msh733b2f36721c73ep1e8e63jsna2534949c3e5'
}
const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoAPIHeaders})

export const cryptoAPI = createApi({
    reducerPath: 'cryptoAPI',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) =>({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        })
    })
})
export const{
    useGetCryptosQuery,
} = cryptoAPI;