import {
  ADD_COIN,
  REMOVE_COIN,
  SET_COIN_DATA,
  CHANGE_CURRENCY,
  SET_LOADING,
} from "../constants/actionTypes";

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

// Change currency
export const changeCurrency = (name, symbol) => {
  return { type: CHANGE_CURRENCY, data: { name, symbol } };
};

// Set loading state
export const setLoading = (loading) => {
  return { type: SET_LOADING, loading };
};

// Fetch coin data from the CoinGecko API
export const fetchCoinData = (currency, watchList) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          vs_currency: currency.name,
          ids: watchList.join(),
        },
      }
    );
    dispatch(setCoinData(response.data));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    console.log(error);
  }
};
