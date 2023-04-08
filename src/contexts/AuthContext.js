import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    if (token) {
      axios
        .get("http://localhost:5000/users/", {
          headers: { "auth-token": token },
        })
        .then((response) => {
          setUser(response.data);
          setIsLoggedIn(true);
        })
        .catch((error) => {
          console.error("Error during auto-login", error);
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
    } catch (error) {
      console.error("Error during login", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("auth-token");
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
