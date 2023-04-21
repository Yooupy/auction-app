import React from "react";
import { Typography } from "@mui/material";
import styles from "./styles.module.scss";
import Category from "./Category";

const Categories = () => {
  return (
    <div className={styles.categories}>
      <Typography variant="h5" component="h2" className={styles.title}>
        Categories
      </Typography>
      <Category />
    </div>
  );
};

export default Categories;
