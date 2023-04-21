import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Auctions, NewUser } from "./pages/index.js";

import Login from "./components/Auth/Login/index.jsx";
import Signup from "./components/Auth/Signup/index.jsx";

import AuthProvider from "./contexts/AuthContext.js";
import Navbar from "./components/Dashboard/Navbar";
import Profile from "./components/Users/Profile";
// import Footer from "./components/Footer/Footer";
import "./App.css";
import NewItemForm from "./components/Items/NewItem";
import Admin from "./components/Admin-Panel/index.jsx";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-user" element={<NewUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/auctions/new" element={<NewItemForm />} />
          <Route path="/auctions" element={<Auctions />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </AuthProvider>
  );
}

export default App;
