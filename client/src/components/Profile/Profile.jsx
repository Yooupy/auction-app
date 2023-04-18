import React, { useState, useContext } from "react";
import { Box, Button, TextField, Typography, Divider } from "@mui/material";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import ItemList from "../Items/ItemList";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`${apiUrl}/${user._id}`, {
        name,
        email,
        password,
      });
      const updatedUser = response.data;
      setName(updatedUser.name);
      setEmail(updatedUser.email);
      setPassword("");
      setConfirmPassword("");
      setError(null);
    } catch (error) {
      console.error("Error during profile update", error);
      setError("Failed to update profile.");
    }
  };

  const handleFetchItems = async () => {
    try {
      const response = await axios.get(`${apiUrl}/${user._id}`);
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items", error);
      setError("Failed to fetch items.");
    }
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h4" gutterBottom>
        Profile
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            label="Name"
            variant="outlined"
            margin="normal"
            value={name}
            onChange={handleNameChange}
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={handlePasswordChange}
          />
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {error && (
            <Typography variant="subtitle2" color="error">
              {error}
            </Typography>
          )}
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Save Changes
          </Button>
        </Box>
      </form>
      <Divider sx={{ my: 4 }} />
      <Typography variant="h5" gutterBottom>
        Your balance:{" "}
        {user && (
          <Typography variant="h5" gutterBottom>
            Your balance: ${user?.balance?.toFixed(2) ?? "N/A"}
          </Typography>
        )}
      </Typography>
      <Typography variant="h5" gutterBottom>
        Your items:
      </Typography>
      {user?.items?.length > 0 ? (
        <ItemList items={user.items} />
      ) : (
        <p>You have no items.</p>
      )}
    </Box>
  );
};

export default Profile;
