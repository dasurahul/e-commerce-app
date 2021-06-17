import React, { useContext } from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AuthContext from "../store/auth-context";
import CartContext from "../store/cart-context";
import { Link, useHistory } from "react-router-dom";

import classes from "./Navbar.module.css";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const cartContext = useContext(CartContext);
  const history = useHistory();
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <Link to="/">
          <h1>Mobile Bazaar</h1>
        </Link>
      </div>
      <div className={classes.user}>
        {authContext.isLoggedIn && (
          <Button
            onClick={() => {
              authContext.logout();
            }}
          >
            Log Out
          </Button>
        )}
        {!authContext.isLoggedIn && (
          <Button
            onClick={() => {
              history.push("/signin");
            }}
          >
            Log In
          </Button>
        )}
      </div>
      <div className={classes.cart}>
        <Link to="/cart">
          <Badge
            color="error"
            badgeContent={cartContext.cartItems.length}
            showZero
          >
            <ShoppingCartIcon />
          </Badge>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
