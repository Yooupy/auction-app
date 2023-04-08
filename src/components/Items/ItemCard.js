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
            className={styles.cardMedia}
          />
          <CardContent className={styles.cardContent}>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              className={styles.description}
            >
              {item.description}
            </Typography>
            <Typography variant="subtitle1" className={styles.currentBid}>
              Starting Bid: {item.startingBid}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default ItemCard;
