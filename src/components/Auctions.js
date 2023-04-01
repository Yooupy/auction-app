import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemCard from "../components/ItemCard.js";
import Filter from "../components/Filter.js";
import { Grid } from "@mui/material";

function Auctions() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:5000/items");
      setItems(response.data);
      setFilteredItems(response.data);
    }

    fetchData();
  }, []);

  const handleFilter = (searchTerm, newsOnly, minBid, maxBid) => {
    let filtered = items.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!newsOnly || item.isNew) &&
        (minBid === "" || item.currentBid >= minBid) &&
        (maxBid === "" || item.currentBid <= maxBid)
      );
    });
    setFilteredItems(filtered);
  };

  return (
    <div>
      <h1>Auctions</h1>
      <Filter onFilter={handleFilter} />
      {filteredItems.length === 0 ? (
        <p>No items available for auction.</p>
      ) : (
        <Grid container spacing={2}>
          {filteredItems.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
              <ItemCard item={item} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default Auctions;
