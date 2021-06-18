import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import CartContext from "../store/cart-context";

import classes from "./CartItem.module.css";

const CartItem = ({ item, onRemove, onIncrease, onDecrease }) => {
  const [numberOfItems, setNumberOfItems] = useState(1);
  const cartContext = useContext(CartContext);

  return (
    <div className={classes["container"]}>
      <div className={classes["item-container"]}>
        <img className={classes.img} src={item.img} alt={item.name} />
        <div className={classes.details}>
          <div className={classes.name}>{item.name}</div>
          <div>&#8377;{item.price}</div>
          <Button
            style={{ padding: "0px" }}
            color="secondary"
            onClick={() => {
              cartContext.setCartItems((cartItems) => {
                return cartItems.filter((cartItem) => {
                  return cartItem.id !== item.id;
                });
              });
              onRemove();
            }}
          >
            Remove
          </Button>
        </div>
        <div className={classes.actions}>
          <Button
            onClick={() => {
              setNumberOfItems((number) => {
                return number + 1;
              });
              onIncrease(item.price);
            }}
          >
            <KeyboardArrowUpIcon style={{ color: "#2874F0" }} />
          </Button>
          {numberOfItems}
          <Button
            onClick={() => {
              if (numberOfItems !== 1) {
                setNumberOfItems((number) => {
                  return number - 1;
                });
                onDecrease(item.price);
              }
            }}
          >
            <KeyboardArrowDownIcon style={{ color: "#2874F0" }} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
