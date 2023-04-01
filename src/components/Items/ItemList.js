import React from "react";
import { Grid } from "@mui/material";
import ItemCard from "./ItemCard";
import styles from "./ItemLists.module.scss";

const ItemList = ({ items }) => {
  return (
    <Grid container spacing={2} className={styles.itemList}>
      {items.map((item) => (
        <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
          <ItemCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemList;
