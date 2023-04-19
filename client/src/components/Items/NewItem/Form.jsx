import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import styles from "../styles.module.scss";
import UploadFile from "./UploadFile";
import DataPicker from "./DataPicker";
import Categories from "./Categories";

const Form = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startingBid, setStartingBid] = useState(0);
  // const [image, setImage] = useState(null);
  const [categories, setCategories] = useState([]);
  // const [hours, setHours] = useState(0);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      // if (!name || !description || !startingBid || !image || !hours) {
      //   throw new Error("Please fill in all fields and select an image.");
      // }

      const data = new FormData();
      // data.append("image", image);
      data.append("name", name);
      data.append("description", description);
      data.append("startingBid", startingBid);
      data.append("categories", JSON.stringify(categories));

      // create a Date object from the selected expiration date

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
  function handleCategoryChange(event) {
    const { value } = event.target;
    if (categories.includes(value)) {
      setCategories(categories.filter((category) => category !== value));
    } else {
      setCategories([...categories, value]);
    }
  }
  return (
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
      <DataPicker />
      <UploadFile />
      {/* <input
      type="file"
      id="image"
      accept="image/*"
      className={styles.fileInput}
      onChange={(event) => setImage(event.target.files[0])}
      required
    /> */}
      <Categories handleCategoryChange={handleCategoryChange} />
      <Button
        type="submit"
        onClick={handleSubmit}
        variant="contained"
        sx={{ mt: 2 }}
      >
        Add Item
      </Button>
    </form>
  );
};

export default Form;
