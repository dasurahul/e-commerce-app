import React, { useState } from "react";

const CartContext = React.createContext();

export const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const value = {
    cartItems,
    setCartItems,
  };
  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};

export default CartContext;
