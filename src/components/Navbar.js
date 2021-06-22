import React, { useState, useContext } from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AuthContext from "../store/auth-context";
import CartContext from "../store/cart-context";
import { Link, useHistory } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";

import classes from "./Navbar.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const authContext = useContext(AuthContext);
  const cartContext = useContext(CartContext);
  const history = useHistory();
  return (
    <div className={classes.navbar}>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Log Out?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to log out from Mobile Bazaar?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button style={{ color: "#2874F0" }} onClick={handleClose} autoFocus>
            Cancel
          </Button>
          <Button
            style={{ color: "#2874F0" }}
            onClick={() => {
              authContext.logout();
              handleClose();
            }}
          >
            Log Out
          </Button>
        </DialogActions>
      </Dialog>
      <div className={classes.logo}>
        <Link to="/">
          <h1>Mobile Bazaar</h1>
        </Link>
      </div>
      <div className={classes.user}>
        {authContext.isLoggedIn && (
          <Button
            onClick={() => {
              setOpen(true);
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
            color="primary"
            badgeContent={cartContext.cartItems.length}
            showZero
          >
            <ShoppingCartIcon />
          </Badge>
          Cart
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
