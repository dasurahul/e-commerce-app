import React, { useState, useContext } from "react";
import StarRateIcon from "@material-ui/icons/StarRate";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import CartContext from "../store/cart-context";

import classes from "./Item.module.css";

const Item = ({ item }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const cartContext = useContext(CartContext);
  return (
    <div className={classes["item-container"]}>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Item added to cart
        </Alert>
      </Snackbar>
      <div>
        <img className={classes.img} src={item.img} alt={item.name} />
      </div>
      <div className={classes["details-container"]}>
        <div className={classes.details}>
          <div className={classes.name}>{item.name}</div>
          <div>&#8377;{item.price}</div>
          <div className={classes.stars}>
            {item.rating} <StarRateIcon />
          </div>
        </div>
        <div className={classes.actions}>
          <Button
            onClick={() => {
              cartContext.setCartItems((items) => {
                return [...items, item];
              });
              setOpen(true);
            }}
          >
            Add To Cart
          </Button>
          <Button>View Item</Button>
        </div>
      </div>
    </div>
  );
};

export default Item;
