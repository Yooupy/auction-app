import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";
import styles from "./NewItem.module.scss";

function NewItemForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startingBid, setStartingBid] = useState(0);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      if (!name || !description || !startingBid || !image) {
        throw new Error("Please fill in all fields and select an image.");
      }

      const data = new FormData();
      data.append("image", image);
      data.append("name", name);
      data.append("description", description);
      data.append("startingBid", startingBid);

      await axios.post("http://localhost:5000/items", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      navigate("/auctions");
    } catch (error) {
      console.error(error.config);
    }
  }

  return (
    <Box className={styles.formContainer}>
      <Typography variant="h4" gutterBottom>
        Add Item
      </Typography>
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          margin="normal"
          fullWidth
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <TextField
          label="Description"
          multiline
          rows={4}
          variant="outlined"
          margin="normal"
          fullWidth
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />
        <TextField
          label="Starting Bid"
          type="number"
          variant="outlined"
          margin="normal"
          fullWidth
          value={startingBid}
          onChange={(event) => setStartingBid(event.target.value)}
          required
        />
        <label htmlFor="image" className={styles.fileInputLabel}>
          Image:
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          className={styles.fileInput}
          onChange={(event) => setImage(event.target.files[0])}
          required
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Add Item
        </Button>
      </form>
    </Box>
  );
}

export default NewItemForm;
