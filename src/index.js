import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./store/cart-context";
import { AuthContextProvider } from "./store/auth-context";

import "./index.css";

ReactDOM.render(
  <AuthContextProvider>
    <CartContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartContextProvider>
  </AuthContextProvider>,
  document.getElementById("root")
);
