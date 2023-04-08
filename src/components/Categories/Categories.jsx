import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import styles from "./Categories.module.scss";
import { FaStar } from "react-icons/fa";

const Categories = () => {
  return (
    <div className={styles.categories}>
      <Typography variant="h5" component="h2" className={styles.title}>
        Categories
      </Typography>
      <List component="nav" className={styles.list}>
        <ListItem button className={styles.listItem}>
          <ListItemIcon>
            <FaStar />
          </ListItemIcon>
          <ListItemText primary="Top Items" />
        </ListItem>
        <ListItem button className={styles.listItem}>
          <ListItemIcon>
            <FaStar />
          </ListItemIcon>
          <ListItemText primary="Popular Items" />
        </ListItem>
        <ListItem button className={styles.listItem}>
          <ListItemIcon>
            <FaStar />
          </ListItemIcon>
          <ListItemText primary="New Items" />
        </ListItem>
        <ListItem button className={styles.listItem}>
          <ListItemIcon>
            <FaStar />
          </ListItemIcon>
          <ListItemText primary="Ends Soon" />
        </ListItem>
        <ListItem button className={styles.listItem}>
          <ListItemIcon>
            <FaStar />
          </ListItemIcon>
          <ListItemText primary="Electronics" />
        </ListItem>
        <ListItem button className={styles.listItem}>
          <ListItemIcon>
            <FaStar />
          </ListItemIcon>
          <ListItemText primary="Home & Garden" />
        </ListItem>
        <ListItem button className={styles.listItem}>
          <ListItemIcon>
            <FaStar />
          </ListItemIcon>
          <ListItemText primary="Sports & Outdoors" />
        </ListItem>
        <ListItem button className={styles.listItem}>
          <ListItemIcon>
            <FaStar />
          </ListItemIcon>
          <ListItemText primary="Fashion" />
        </ListItem>
        <ListItem button className={styles.listItem}>
          <ListItemIcon>
            <FaStar />
          </ListItemIcon>
          <ListItemText primary="Toys & Games" />
        </ListItem>
      </List>
    </div>
  );
};

export default Categories;
