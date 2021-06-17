import React, { useState } from "react";

const AuthContext = React.createContext();

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState("");
  const isLoggedIn = token ? true : false;
  const login = (token) => {
    setToken(token);
  };

  const logout = () => {
    setToken("");
  };

  const value = {
    token,
    isLoggedIn,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContext;
