import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { coinReducer } from "./reducers/CoinReducer";
import App from "./components/App";
import "./index.css";
import { loadState, saveState } from "./localStorage";

// Get state from local storage
const persistedState = loadState();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  coinReducer,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
);

// Save to local storage on state change
store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
