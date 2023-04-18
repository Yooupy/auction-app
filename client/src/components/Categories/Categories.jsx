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
          <ListItemText primary="Art" />
        </ListItem>
        <ListItem button className={styles.listItem}>
          <ListItemIcon>
            <FaStar />
          </ListItemIcon>
          <ListItemText primary="Books" />
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
          <ListItemText primary="Fashion" />
        </ListItem>
        <ListItem button className={styles.listItem}>
          <ListItemIcon>
            <FaStar />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button className={styles.listItem}>
          <ListItemIcon>
            <FaStar />
          </ListItemIcon>
          <ListItemText primary="Antiques" />
        </ListItem>
      </List>
    </div>
  );
};

export default Categories;
