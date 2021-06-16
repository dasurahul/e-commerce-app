import React, { useState, useContext } from "react";
import StarRateIcon from "@material-ui/icons/StarRate";
import Button from "@material-ui/core/Button";
import CartContext from "../store/cart-context";
import classes from "./Item.module.css";

const Item = ({ item }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const cartContext = useContext(CartContext);
  return (
    <div className={classes["item-container"]}>
      <div>
        <img className={classes.img} src={item.img} alt={item.name} />
      </div>
      <div className={classes["details-container"]}>
        <div className={classes.details}>
          <div className={classes.name}>{item.name}</div>
          <div>&#8377;{item.price}</div>
          <div className={classes.stars}>
            {item.rating} <StarRateIcon className={classes.star} />
          </div>
        </div>
        <div className={classes.actions}>
          <Button
            disabled={addedToCart}
            onClick={() => {
              cartContext.setCartItems((items) => {
                return [...items, item];
              });
              setAddedToCart(true);
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
