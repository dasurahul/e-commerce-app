import React, { useState, useContext } from "react";
import CartItem from "../components/CartItem";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import CartContext from "../store/cart-context";

const Cart = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const [number, setNumber] = useState(0);
  const cartContext = useContext(CartContext);
  const cartItems = cartContext.cartItems;
  const total = cartContext.cartItems.reduce((total, item) => {
    return total + item.price;
  }, number);
  const removeHandler = () => {
    setShow(true);
  };
  const handleShow = () => {
    setShow(false);
  };
  const increaseHandler = (price) => {
    setNumber((number) => number + price);
  };
  const decreaseHandler = (price) => {
    setNumber((number) => number - price);
  };
  let content = cartItems.map((item) => {
    return (
      <CartItem
        key={item.id}
        item={item}
        onIncrease={increaseHandler}
        onDecrease={decreaseHandler}
        onRemove={removeHandler}
      />
    );
  });

  if (cartItems.length === 0) {
    content = (
      <section style={{ textAlign: "center", margin: "100px 0" }}>
        <p>No items in the cart</p>
      </section>
    );
  }

  return (
    <div style={{ margin: "40px 0" }}>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Items removed from cart
        </Alert>
      </Snackbar>
      <Snackbar open={show} autoHideDuration={3000} onClose={handleShow}>
        <Alert onClose={handleShow} severity="success">
          Item removed from cart
        </Alert>
      </Snackbar>
      <h1
        style={{ textAlign: "center", fontWeight: "400", marginBottom: "40px" }}
      >
        Your Cart
      </h1>
      {content}
      {cartItems.length > 0 && (
        <hr
          style={{
            width: "90%",
            maxWidth: "600px",
            margin: "0 auto",
            marginTop: "40px",
            marginBottom: "20px",
          }}
        />
      )}
      {cartItems.length > 0 && (
        <div
          style={{
            width: "90%",
            maxWidth: "600px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
          }}
        >
          <div style={{ fontWeight: "500" }}>Total</div>
          <div style={{ fontWeight: "500" }}>{total}</div>
        </div>
      )}
      {cartItems.length > 0 && (
        <div
          style={{
            textAlign: "center",
            margin: "10px 0",
          }}
        >
          <Button
            onClick={() => {
              cartContext.setCartItems([]);
              setOpen(true);
            }}
          >
            Clear Cart
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
