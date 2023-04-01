import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./ItemCard.module.scss";

const ItemCard = ({ item }) => {
  return (
    <Card className={styles.itemCard}>
      <Link to={`/items/${item.id}`}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={item.imageUrl}
            alt={item.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {item.description}
            </Typography>
            <Typography variant="h6">Current Bid: {item.currentBid}</Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default ItemCard;
