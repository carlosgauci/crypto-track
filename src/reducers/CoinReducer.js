import {
  ADD_COIN,
  REMOVE_COIN,
  SET_COIN_DATA,
  CHANGE_CURRENCY,
  SET_LOADING,
} from "../constants/actionTypes";

const initState = {
  tracking: ["bitcoin", "ethereum", "ripple", "litecoin", "dogecoin"],
  currency: {
    name: "usd",
    symbol: "$",
  },
  coinData: [],
  loading: false,
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

    default:
      return state;
  }
};
