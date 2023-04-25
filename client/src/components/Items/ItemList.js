import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import ItemCard from "./ItemCard";
import styles from "./styles.module.scss";

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/items", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.log(err));
  }, []);

  if (!Array.isArray(items)) {
    return <div>No items found</div>;
  }

  return (
    <Grid container spacing={2} className={styles.itemList}>
      {items.map((item) => (
        <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
          <div className={styles.itemCardWrapper}>
            <ItemCard key={item.id} item={item} />
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemList;
