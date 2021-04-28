import { ADD_COIN, REMOVE_COIN, SET_COIN_DATA } from "../constants/actionTypes";

import axios from "axios";

// Add a coin to the watch list
export const addCoin = (coin) => {
  return { type: ADD_COIN, coin };
};

// Remove a coin from the watch list
export const removeCoin = (coin) => {
  return { type: REMOVE_COIN, coin };
};

// Set the fetched coin data in the redux store
export const setCoinData = (data) => {
  return { type: SET_COIN_DATA, data };
};

// Fetch coin data from the CoinGecko API
export const fetchCoinData = (watchList) => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          vs_currency: "usd",
          ids: watchList.join(),
        },
      }
    );
    dispatch(setCoinData(response.data));
  } catch (error) {
    console.log(error);
  }
};
