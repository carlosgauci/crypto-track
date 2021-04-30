import {
  ADD_COIN,
  REMOVE_COIN,
  SET_COIN_DATA,
  CHANGE_CURRENCY,
  SET_LOADING,
  SET_SORTING,
} from "../constants/actionTypes";

const initState = {
  tracking: [
    "bitcoin",
    "ethereum",
    "binancecoin",
    "ripple",
    "tether",
    "cardano",
    "litecoin",
    "dogecoin",
  ],
  currency: {
    name: "eur",
    symbol: "€",
  },
  coinData: [],
  loading: false,
  sorting: {
    heading: "market_cap",
    order: false,
  },
};

export const coinReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_COIN:
      return { ...state, tracking: [...state.tracking, action.coin] };

    case REMOVE_COIN:
      return {
        ...state,
        tracking: state.tracking.filter((coin) => coin !== action.coin),
      };

    case SET_COIN_DATA:
      return { ...state, coinData: action.data };

    case CHANGE_CURRENCY:
      return {
        ...state,
        currency: { name: action.data.name, symbol: action.data.symbol },
      };

    case SET_LOADING:
      return { ...state, loading: action.loading };

    case SET_SORTING:
      return {
        ...state,
        sorting: action.data,
      };

    default:
      return state;
  }
};
