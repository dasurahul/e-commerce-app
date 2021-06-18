import React, { useState, useContext } from "react";
import CartItem from "../components/CartItem";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import AuthContext from "../store/auth-context";
import CartContext from "../store/cart-context";
import { useHistory } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";

const Cart = () => {
  const history = useHistory();
  const authContext = useContext(AuthContext);
  const cartContext = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleShow = () => {
    setShow(false);
  };
  const removeHandler = () => {
    setShow(true);
  };
  const increaseHandler = (price) => {
    setNumber((number) => number + price);
  };
  const decreaseHandler = (price) => {
    setNumber((number) => number - price);
  };
  const closeDialog = () => {
    setOpenDialog(false);
  };
  const cartItems = cartContext.cartItems;
  const total = cartContext.cartItems.reduce((total, item) => {
    return total + item.price;
  }, number);
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
      <section style={{ textAlign: "center", margin: "40px 0" }}>
        <p>No items in the cart</p>
      </section>
    );
  }

  return (
    <div style={{ padding: "40px 0" }}>
      <Dialog open={openDialog} onClose={closeDialog}>
        <DialogTitle>Thank You</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Thank You for shopping with us. Have a good day.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            style={{ color: "#2874F0" }}
            onClick={() => {
              closeDialog();
              history.push("/");
            }}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          All Items removed from cart
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
            backgroundColor: "#2874F0",
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
            alignItems: "center",
            padding: "20px",
          }}
        >
          <div style={{ fontWeight: "500" }}>Total &#8377;{total}</div>
          <div style={{ textAlign: "center" }}>
            <Button
              variant="contained"
              style={{ color: "#fff", backgroundColor: "#2874F0" }}
              onClick={() => {
                if (authContext.isLoggedIn) {
                  setOpenDialog(true);
                  cartContext.setCartItems([]);
                } else {
                  history.push("/signin");
                }
              }}
            >
              Buy Now
            </Button>
          </div>
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
            color="secondary"
            variant="contained"
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
