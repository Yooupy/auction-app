import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewItemForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startingBid, setStartingBid] = useState(0);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  // async function handleSubmit(event) {
  //   event.preventDefault();
  //   try {
  //     if (!name || !description || !startingBid || !image) {
  //       throw new Error("Please fill in all fields and select an image.");
  //     }
  //     const data = new FormData();
  //     data.append("file", image);
  //     data.append("upload_preset", "fazgsp33");
  //     const res = await axios.post(
  //       "https://api.cloudinary.com/v1_1/dxizpycly/image/upload",
  //       data
  //     );
  //     const newItem = {
  //       name,
  //       description,
  //       startingBid,
  //       imageUrl: res.data.secure_url,
  //     };
  //     await axios.post("http://localhost:5000/items", newItem, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });
  //     navigate("/auctions");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      if (!name || !description || !startingBid || !image) {
        throw new Error("Please fill in all fields and select an image.");
      }
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "fazgsp33");
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dxizpycly/image/upload",
        data
      );
      const newItem = {
        name,
        description,
        startingBid,
        imageUrl: res.data.secure_url,
      };
      await axios.post("http://localhost:5000/items", newItem);
      navigate("/auctions");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h2>Add Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="startingBid">Starting Bid:</label>
          <input
            type="number"
            id="startingBid"
            value={startingBid}
            onChange={(event) => setStartingBid(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(event) => setImage(event.target.files[0])}
          />
        </div>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default NewItemForm;
