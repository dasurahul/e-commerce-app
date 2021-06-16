import React, { useState } from "react";

const CartContext = React.createContext();

export const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const total = cartItems.reduce((total, item) => {
    return total + item.price;
  }, 0);
  const value = {
    cartItems,
    setCartItems,
    total,
  };
  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};

export default CartContext;
