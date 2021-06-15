import React from "react";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div>
      <Navbar />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
    </div>
  );
};

export default App;
