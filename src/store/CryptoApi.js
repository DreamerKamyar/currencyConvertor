import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiHeaders = {
  "X-RapidAPI-Key": "1a5bbd4a53msh279ba85ee01bb41p1778f0jsneae1d35b7929",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};
const baseURL = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => {
  return {
    url,
    headers: apiHeaders,
  };
};

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getAllCoins: builder.query({
      query: () => createRequest(`/coins?limit=200`),
    }),
    getCoinPrice: builder.query({
      query: (symbol) => createRequest(`/price?fsym=${symbol}&tsyms=USD`),
    }),
  }),
});

export const { useGetAllCoinsQuery, useGetCoinPrice } = cryptoApi;
