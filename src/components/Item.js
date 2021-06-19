import React, { useState, useContext } from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import Rating from "@material-ui/lab/Rating";
import CartContext from "../store/cart-context";

import classes from "./Item.module.css";

const Item = ({ item }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const cartContext = useContext(CartContext);
  return (
    <Card className={classes["item-container"]}>
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
          <Rating
            name="half-rating-read"
            precision={0.5}
            value={item.rating}
            size="small"
            readOnly
          />
        </div>
        <div className={classes.actions}>
          <Button
            className={classes.button}
            onClick={() => {
              cartContext.setCartItems((items) => {
                return [...items, item];
              });
              setOpen(true);
            }}
          >
            Add To Cart
          </Button>
          <Button className={classes.button}>View Item</Button>
        </div>
      </div>
    </Card>
  );
};

export default Item;
