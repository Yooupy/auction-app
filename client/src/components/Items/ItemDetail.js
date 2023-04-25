import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import styles from "./styles.module.scss";

const ItemDetails = ({ onBidClick }) => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/items/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

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
          {item.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {item.description}
        </Typography>
        <Typography variant="h6">Starting Bid: {item.startingBid}</Typography>
        <Typography variant="h6">Current Bid: {item.currentBid}</Typography>
        <Typography variant="h6">Time Left: {item.timer}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          onClick={onBidClick}
          className={styles.bidButton}
          disabled={item.timer === "Closed"}
        >
          Place Bid
        </Button>
        <Link to="/">Go Back</Link>
      </CardActions>
    </Card>
  );
};

export default ItemDetails;
