import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  CardContent,
  CardMedia,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import styles from "./styles.module.scss";

const ItemCard = ({ item }) => {
  const [timer, setTimer] = useState("");
  const [bidAmount, setBidAmount] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const storedEndTime = localStorage.getItem(`endTime-${item.id}`);
    const storedNow = localStorage.getItem(`now-${item.id}`);

    let endTime, now;
    if (storedEndTime && storedNow) {
      endTime = Number(storedEndTime);
      now = Number(storedNow);
    } else {
      endTime = new Date().getTime() + item.counter * 3600000;
      now = new Date().getTime();
      localStorage.setItem(`endTime-${item.id}`, endTime);
      localStorage.setItem(`now-${item.id}`, now);
    }

    const distance = endTime - now;
    if (distance < 0) {
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

    const interval = setInterval(() => {
      const now = new Date().getTime();
      localStorage.setItem(`now-${item.id}`, now);
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
  }, [item.counter, item.id]);

  const handleBidChange = (event) => {
    setBidAmount(event.target.value);
  };

  const handleBidSubmit = async (event) => {
    event.preventDefault();
    console.log(`Submitted bid of ${bidAmount} for item ${item.id}`);

    // POST request to the backend
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userId, // Pass the user ID
        bidAmount: bidAmount,
      }),
    };

    try {
      const response = await fetch(
        `http://localhost:5000/items/${item._id}/bids`,
        requestOptions
      );
      if (response.status === 201) {
        const updatedItem = await response.json();
        console.log("Bid placed successfully:", updatedItem);
        setBidAmount(""); // Clear the bid amount input field
      } else if (response.status === 400) {
        const errorMessage = await response.text();
        console.log("Error placing bid:", errorMessage);
      } else {
        console.log("Error placing bid:", response.status);
      }
    } catch (err) {
      console.error("Error placing bid:", err);
    }
  };
  return (
    <div className={styles.itemCard}>
      <Link to={`/item/${item._id}`}>
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
      </Link>
      <form onSubmit={handleBidSubmit} className={styles.bidForm}>
        <TextField
          id="bidAmount"
          label="Enter bid amount"
          type="number"
          variant="outlined"
          value={bidAmount}
          onChange={handleBidChange}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          // disabled={timer === "Closed"}
        >
          Place Bid
        </Button>
      </form>
    </div>
  );
};
export default ItemCard;
