import React from "react";
import Navbar from "./components/Navbar";
import { Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

import Footer from "./components/Footer";

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
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
      <Footer />
    </div>
  );
};

export default App;
