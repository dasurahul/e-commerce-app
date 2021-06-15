import React from "react";
import Button from "@material-ui/core/Button";

import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import classes from "./CartItem.module.css";

const CartItem = ({ item }) => {
  console.log(item);
  return (
    <div className={classes["container"]}>
      <div className={classes["item-container"]}>
        <img className={classes.img} src={item.img} alt={item.name} />
        <div className={classes.details}>
          <div className={classes.name}>{item.name}</div>
          <div className={classes.price}>{item.price}</div>
          <Button className={classes.button}>remove</Button>
        </div>
        <div className={classes.actions}>
          <KeyboardArrowUpIcon />
          1
          <KeyboardArrowDownIcon />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
