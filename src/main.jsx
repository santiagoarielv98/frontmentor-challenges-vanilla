import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";

import configureStore from "./store/configureStore";

import "./index.css";
import "semantic-ui-css/semantic.css";

const store = configureStore();
const rootEl = document.getElementById("root");

ReactDOM.create(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootEl
);
