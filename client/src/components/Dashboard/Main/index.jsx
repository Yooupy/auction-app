import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import Categories from "../Filter/Categories";
import Filter from "../Filter";
import ItemList from "../../Items/ItemList";
import styles from "./styles.module.scss";
import items from "../../../utils/items";

const Main = () => {
  const [filteredItems, setFilteredItems] = useState(items);
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    let sortedItems = [...filteredItems];
    if (sortBy === "asc") {
      sortedItems.sort((a, b) => a.startingBid - b.startingBid);
    } else if (sortBy === "desc") {
      sortedItems.sort((a, b) => b.startingBid - a.startingBid);
    }
    setFilteredItems(sortedItems);
  }, [sortBy, filteredItems]);

  const handleFilter = (minBid, maxBid) => {
    let filtered = items.filter(
      (item) => item.startingBid >= minBid && item.startingBid <= maxBid
    );
    setFilteredItems(filtered);
  };

  const handleSearch = (searchText) => {
    let filtered = items.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div className={styles.container}>
      <Grid container spacing={4}>
        {/* Left side container */}
        <Grid item xs={12} md={2}>
          <Categories />
        </Grid>

        {/* Right side container */}
        <Grid item xs={12} md={10}>
          <div className={styles.filter}>
            <Typography variant="h5">Filter</Typography>
            <Filter
              handleFilter={handleFilter}
              handleSearch={handleSearch}
              setSortBy={setSortBy}
            />
          </div>
          <ItemList items={filteredItems} setFilteredItems={setFilteredItems} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
