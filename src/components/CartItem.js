import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import CartContext from "../store/cart-context";

import classes from "./CartItem.module.css";

const CartItem = ({ item }) => {
  const cartContext = useContext(CartContext);
  return (
    <div className={classes["container"]}>
      <div className={classes["item-container"]}>
        <img className={classes.img} src={item.img} alt={item.name} />
        <div className={classes.details}>
          <div className={classes.name}>{item.name}</div>
          <div>&#8377;{item.price}</div>
          <Button
            className={classes.button}
            onClick={() => {
              cartContext.setCartItems((cartItems) => {
                return cartItems.filter((cartItem) => {
                  return cartItem.id !== item.id;
                });
              });
            }}
          >
            remove
          </Button>
        </div>
        <div className={classes.actions}>
          <Button>
            <KeyboardArrowUpIcon />
          </Button>
          1
          <Button>
            <KeyboardArrowDownIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
