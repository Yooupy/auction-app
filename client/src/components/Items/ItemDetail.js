import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./ItemDetails.module.scss";

const ItemDetails = ({ item, onBidClick }) => {
  return (
    <Card className={styles.itemDetails}>
      <CardMedia
        component="img"
        height="200"
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
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          onClick={onBidClick}
          className={styles.bidButton}
        >
          Bid
        </Button>
        <Link to="/">Go Back</Link>
      </CardActions>
    </Card>
  );
};

export default ItemDetails;
