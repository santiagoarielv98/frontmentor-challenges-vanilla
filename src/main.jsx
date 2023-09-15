import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";

import configureStore from "./store/configureStore";

import "./index.css";
import "semantic-ui-css/semantic.css";

const store = configureStore();
const rootEl = document.getElementById("root");

ReactDOM.createRoot(rootEl).render(
  <Provider store={store}>
    <App />
  </Provider>
);
