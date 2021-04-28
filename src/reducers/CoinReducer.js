import { ADD_COIN, REMOVE_COIN, SET_COIN_DATA } from "../constants/actionTypes";

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

    default:
      return state;
  }
};
