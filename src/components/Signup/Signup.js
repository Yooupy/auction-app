import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import styles from "./Signup.module.scss";

const useStyles = makeStyles({
  textField: {
    marginBottom: "1rem",
  },
  button: {
    marginTop: "1rem",
  },
});

function Signup() {
  const navigate = useNavigate();
  const classes = useStyles();

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
    const response = await fetch("http://localhost:5000/users", {
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
          className={classes.textField}
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <TextField
          label="Email"
          variant="outlined"
          className={classes.textField}
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <TextField
          label="Password"
          variant="outlined"
          className={classes.textField}
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <Button variant="contained" className={classes.button} type="submit">
          Signup
        </Button>
      </form>
    </div>
  );
}

export default Signup;
