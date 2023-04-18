import React, { useState, useEffect } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const ItemCard = ({ item }) => {
  const [timer, setTimer] = useState("");

  useEffect(() => {
    const endTime = new Date().getTime() + item.counter * 3600000;
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;
      if (distance < 0) {
        clearInterval(interval);
        setTimer("Closed");
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimer(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [item.counter]);

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
            {item.categories.length > 0 && (
              <Typography variant="subtitle1">
                Category{item.categories.length > 1 ? "ies" : ""}:{" "}
                {item.categories.map((category, index) => (
                  <span key={category}>
                    {category}
                    {index < item.categories.length - 1 ? ", " : ""}
                  </span>
                ))}
              </Typography>
            )}
            <Typography variant="subtitle1">Time Left: {timer}</Typography>
            <Typography
              variant="subtitle1"
              className={
                item.status === true ? styles.statusOpen : styles.statusClosed
              }
            >
              Status: {item.status === true ? "Open" : "Closed"}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default ItemCard;
