import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {RootState} from "store/store";
import Config from "react-native-config";

// const BASE_URL = Config.API_URL;
// console.log(Config.API_URL);
const BASE_URL = "http://localhost:5001/api";

export const globalApi = createApi({
  reducerPath: "globalApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, {getState}) => {
      const token = (getState() as RootState).login.accessToken;

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      if (endpoint !== "uploadDriverDocuments") {
        headers.set("Content-Type", "application/json");
      }

      return headers;
    },
  }),
  tagTypes: ["Auth", "User", "Ride", "Wallet", "Rating", "Transaction"],
  endpoints: () => ({}),
});
