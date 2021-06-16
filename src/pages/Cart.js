import React, { useContext } from "react";
import CartItem from "../components/CartItem";
import Button from "@material-ui/core/Button";
import CartContext from "../store/cart-context";

const Cart = () => {
  const cartContext = useContext(CartContext);
  const cartItems = cartContext.cartItems;
  const total = cartContext.cartItems.reduce((total, item) => {
    return total + item.price;
  }, 0);
  let content = cartItems.map((item) => {
    return <CartItem key={item.id} item={item} />;
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
