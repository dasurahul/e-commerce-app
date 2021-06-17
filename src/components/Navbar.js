import React, { useContext } from "react";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link, useHistory } from "react-router-dom";
import CartContext from "../store/cart-context";
import AuthContext from "../store/auth-context";

import classes from "./Navbar.module.css";

const Navbar = () => {
  const history = useHistory();
  const cartContext = useContext(CartContext);
  const authContext = useContext(AuthContext);
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <Link className={classes.link} to="/">
          Mobile Bazaar
        </Link>
      </div>
      {authContext.isLoggedIn && (
        <Button
          className={classes.right}
          style={{ color: "white", fontSize: "16px" }}
          onClick={() => {
            authContext.logout();
          }}
        >
          Log out
        </Button>
      )}
      {!authContext.isLoggedIn && (
        <Button
          onClick={() => {
            history.push("/signin");
          }}
          style={{ color: "white", fontSize: "16px" }}
          className={classes.right}
        >
          Log In
        </Button>
      )}
      <div>
        <Link className={classes.link} to="/cart">
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
