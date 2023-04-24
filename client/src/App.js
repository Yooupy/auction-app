import React from "react";
import { Routes, Route } from "react-router-dom";
import { Auctions, Home } from "./pages/index.js";

import items from "./utils/items.js";

import Login from "./components/Auth/Login/index.jsx";
import Signup from "./components/Auth/Signup/index.jsx";

import AuthProvider from "./contexts/AuthContext.js";
import Navbar from "./components/Dashboard/Navbar";
import Profile from "./components/Users/Profile";
import NewItemForm from "./components/Items/NewItem";
import ItemDetails from "./components/Items/ItemDetail.js";
import NewUser from "./components/Users/NewUser/NewUser.jsx";
import Admin from "./components/Admin-Panel/index.jsx";
import NotFound from "./components/Dashboard/Main/404.jsx";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auctions" element={<Auctions />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/new-item" element={<NewItemForm />} />
          <Route path="/item/:id" element={<ItemDetails items={items} />} />
          <Route path="/new-user" element={<NewUser />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
