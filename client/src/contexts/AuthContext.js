import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    if (token) {
      axios
        .get("http://localhost:5000/users/user", {
          headers: { "auth-token": token },
        })
        .then((response) => {
          setUser(response.data);
          setIsLoggedIn(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:5000/users/login", {
        email,
        password,
      });
      const userData = response.data;
      const token = response.headers["auth-token"];
      localStorage.setItem("auth-token", token);
      setUser(userData);
      setIsLoggedIn(true);
      return { userData, token };
    } catch (error) {
      console.error("Error during login", error);
      throw new Error("Invalid email or password");
    }
  };

  const logout = () => {
    localStorage.removeItem("auth-token");
    setUser(null);
    setIsLoggedIn(false);
  };

  const value = {
    user,
    isLoggedIn,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
