import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import NewUser from "./pages/NewUser";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Auctions from "./pages/Auctions.js";
import AuthProvider from "./contexts/AuthContext.js";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
// import Footer from "./components/Footer/Footer";
import "./App.css";
import NewItemForm from "./components/Items/NewItemForm.js";

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
        </Routes>
        {/* <Footer /> */}
      </div>
    </AuthProvider>
  );
}

export default App;
