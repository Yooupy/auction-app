import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import ItemList from "../Items/ItemList";
import UserList from "../Users/UserList";
import Wallet from "../Wallet/Wallet";
import AdminProfile from "./AdminProfile";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("items");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const { isLoggedIn, user, login, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = loginData;
    if (email === "admin@mail.com" && password === "TestAdmin1234") {
      login({ email: "admin@mail.com" });
    } else {
      alert("Invalid email or password");
    }
    setLoginData({ email: "", password: "" });
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case "items":
        return <ItemList />;
      case "users":
        return <UserList />;
      case "wallet":
        return <Wallet />;
      case "profile":
        return <AdminProfile />;
      default:
        return <ItemList />;
    }
  };

  if (!isLoggedIn || !user || user.email !== "admin@mail.com") {
    return (
      <div className={styles.admin}>
        <h2>Please login as an admin to access this page</h2>
        <form className={styles.loginForm} onSubmit={handleLogin}>
          <label>Email:</label>
          <input
            type="email"
            value={loginData.email}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
            required
          />
          <label>Password:</label>
          <input
            type="password"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            required
          />
          <button type="submit">Log In</button>
        </form>
      </div>
    );
  }

  return (
    <div className={styles.admin}>
      <div className={styles.sidebar}>
        <div
          className={`${styles.tab} ${
            activeTab === "items" ? styles.active : ""
          }`}
          onClick={() => handleTabClick("items")}
        >
          <span>List of Items</span>
        </div>
        <div
          className={`${styles.tab} ${
            activeTab === "users" ? styles.active : ""
          }`}
          onClick={() => handleTabClick("users")}
        >
          <span>List of Users</span>
        </div>
        <div
          className={`${styles.tab} ${
            activeTab === "wallet" ? styles.active : ""
          }`}
          onClick={() => handleTabClick("wallet")}
        >
          <span>Website Wallet</span>
        </div>
        <div
          className={`${styles.tab} ${
            activeTab === "profile" ? styles.active : ""
          }`}
          onClick={() => handleTabClick("profile")}
        >
          <span>Admin Profile</span>
        </div>
        <div className={styles.logout} onClick={handleLogout}>
          Logout
        </div>
      </div>
      <div className={styles.content}>{renderActiveTab()}</div>
    </div>
  );
};
export default Admin;
