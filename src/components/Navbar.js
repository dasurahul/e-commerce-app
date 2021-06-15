import React from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>Mobile Bazaar</div>
      <div>
        <Link className={classes.link} to="/cart">
          <Badge color="error" badgeContent={0} showZero>
            <ShoppingCartIcon />
          </Badge>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
