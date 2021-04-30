import {
  ADD_COIN,
  REMOVE_COIN,
  SET_COIN_DATA,
  CHANGE_CURRENCY,
  SET_LOADING,
  SET_SORTING,
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

// Sort the data and set it to state
export const setCoinData = (data, sorting) => {
  // Sort compare function
  const compare = (a, b) => {
    // Ascending
    if (sorting.order) {
      if (a[sorting.heading] > b[sorting.heading]) {
        return 1;
      } else {
        return -1;
      }
    } else {
      // Descending
      if (a[sorting.heading] > b[sorting.heading]) {
        return -1;
      } else {
        return 1;
      }
    }
  };

  const sortedData = [...data].sort(compare);

  return { type: SET_COIN_DATA, data: sortedData };
};

// Change currency
export const changeCurrency = (name, symbol) => {
  return { type: CHANGE_CURRENCY, data: { name, symbol } };
};

// Set loading state
export const setLoading = (loading) => {
  return { type: SET_LOADING, loading };
};

// Set sorting settings to state
export const setSorting = (heading, order) => {
  return { type: SET_SORTING, data: { heading, order } };
};

// Fetch coin data from the CoinGecko API
export const fetchCoinData = (currency, watchList, sorting) => async (
  dispatch
) => {
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
    await dispatch(setCoinData(response.data, sorting));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    console.log(error);
  }
};
