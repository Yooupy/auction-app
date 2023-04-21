import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import styles from "./styles.module.scss";

function Signup() {
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`${apiUrl}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      navigate("/login");
    } else {
      console.error("Failed to create user");
    }
  };

  return (
    <div className={styles["signup-container"]}>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          sx={{ borderRadius: 0 }}
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          sx={{ borderRadius: 0 }}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          sx={{ borderRadius: 0 }}
        />
        <Button variant="contained" type="submit" sx={{ borderRadius: 0 }}>
          Signup
        </Button>
      </form>
    </div>
  );
}

export default Signup;
