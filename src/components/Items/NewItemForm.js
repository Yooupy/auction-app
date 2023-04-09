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
  const [categories, setCategories] = useState([]);
  const [hours, setHours] = useState(0);
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
      data.append("categories", JSON.stringify(categories));
      data.append("counter", hours);

      console.log(categories);

      await axios.post("https://auction-api-k5qg.onrender.com/items", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      navigate("/auctions");
    } catch (error) {
      console.error(error.config);
    }
  }
  function handleCategoryChange(event) {
    const { value } = event.target;
    if (categories.includes(value)) {
      setCategories(categories.filter((category) => category !== value));
    } else {
      setCategories([...categories, value]);
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
        <Box mt={2} display="flex">
          <Typography variant="subtitle1" mr={1}>
            Categories:
          </Typography>
          <label htmlFor="antiques">
            <input
              type="checkbox"
              id="antiques"
              name="categories"
              value="Antiques"
              onChange={handleCategoryChange}
            />
            Antiques
          </label>
          <label htmlFor="art">
            <input
              type="checkbox"
              id="art"
              name="categories"
              value="Art"
              onChange={handleCategoryChange}
            />
            Art
          </label>
          <label htmlFor="books">
            <input
              type="checkbox"
              id="books"
              name="categories"
              value="Books"
              onChange={handleCategoryChange}
            />
            Books
          </label>
          <label htmlFor="electronics">
            <input
              type="checkbox"
              id="electronics"
              name="categories"
              value="Electronics"
              onChange={handleCategoryChange}
            />
            Electronics
          </label>
          <label htmlFor="fashion">
            <input
              type="checkbox"
              id="fashion"
              name="categories"
              value="Fashion"
              onChange={handleCategoryChange}
            />
            Fashion
          </label>
          <label htmlFor="home">
            <input
              type="checkbox"
              id="home"
              name="categories"
              value="Home"
              onChange={handleCategoryChange}
            />
            Home
          </label>
        </Box>
        <TextField
          label="Hours"
          type="number"
          variant="outlined"
          margin="normal"
          fullWidth
          value={hours}
          onChange={(event) => setHours(event.target.value)}
          required
        />
        <Button
          type="submit"
          onClick={handleSubmit}
          variant="contained"
          sx={{ mt: 2 }}
        >
          Add Item
        </Button>
      </form>
    </Box>
  );
}
export default NewItemForm;
