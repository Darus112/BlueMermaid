import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./components/styles/Navbar.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./context/StateProvider";
import { initialState } from "./context/initialState";
import reducer from "./context/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <BrowserRouter>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </BrowserRouter>
  </React.Fragment>
);
