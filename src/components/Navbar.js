import React, { useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import CartContext from "../store/cart-context";

import classes from "./Navbar.module.css";

const Navbar = () => {
  const cartContext = useContext(CartContext);
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <Link className={classes.link} to="/">
          Mobile Bazaar
        </Link>
      </div>
      <div className={classes.avatar}>
        <Avatar></Avatar> Login
      </div>
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
