import React from "react";
import Button from "@material-ui/core/Button";
import CartItem from "../components/CartItem";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      img: "https://m.media-amazon.com/images/I/71hEzQGO5qL._AC_UL480_FMwebp_QL65_.jpg",
      name: "Redmi 9 Power",
      price: 10499,
      rating: 4,
    },
    {
      id: 2,
      img: "https://m.media-amazon.com/images/I/71OGzLCrjZS._AC_UL480_FMwebp_QL65_.jpg",
      name: "Redmi Note 10",
      price: 12499,
      rating: 4,
    },
    {
      id: 3,
      img: "https://m.media-amazon.com/images/I/61IhTtJUXJL._AC_UL480_FMwebp_QL65_.jpg",
      name: "Oppo A31",
      price: 11490,
      rating: 4,
    },
    {
      id: 4,
      img: "https://m.media-amazon.com/images/I/71BRHXBME2L._AC_UL480_FMwebp_QL65_.jpg",
      name: "Vivo Y51A",
      price: 17990,
      rating: 4,
    },
  ];
  return (
    <div style={{ marginBottom: "40px" }}>
      <h1 style={{ textAlign: "center", margin: "40px 0", fontWeight: "400" }}>
        Your Cart
      </h1>
      {cartItems.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
      <hr
        style={{
          width: "90%",
          maxWidth: "500px",
          margin: "0 auto",
          marginTop: "40px",
          marginBottom: "20px",
        }}
      />
      <div
        style={{
          width: "90%",
          maxWidth: "500px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <div>Total</div>
        <div>1000</div>
      </div>
      <div
        style={{
          textAlign: "center",
          margin: "10px 0",
        }}
      >
        <Button>Clear Cart</Button>
      </div>
    </div>
  );
};

export default Cart;
