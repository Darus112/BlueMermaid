import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./components/styles/Navbar.css";
import "./index.css";

import { AnimatePresence } from "framer-motion";

import { BrowserRouter } from "react-router-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
import myReducers from "./context/reducers";

const myStore = createStore(
  myReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <BrowserRouter>
      <Provider store={myStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.Fragment>
);
