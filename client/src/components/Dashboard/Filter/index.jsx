import React, { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Stack,
} from "@mui/material";
import styles from "./styles.module.scss";

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const Filter = ({ handleFilter, setSortBy }) => {
  const [searchText, setSearchText] = useState("");
  const [minBid, setMinBid] = useState(0);
  const [maxBid, setMaxBid] = useState(0);
  const [sortBy, setSortByLocal] = useState("default");

  const handleFilterDebounced = debounce(
    () => handleFilter(minBid, maxBid, searchText),
    500
  );

  const handleSortByChange = (e) => {
    setSortByLocal(e.target.value);
    setSortBy(e.target.value);
  };

  return (
    <Box sx={{ backgroundColor: "#f5f5f5", py: 2 }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        justifyContent="center"
        alignItems="center"
        className={styles.filter}
      >
        <TextField
          id="search"
          label="Search"
          variant="outlined"
          size="medium"
          sx={{ width: "400px" }}
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            handleFilterDebounced();
          }}
        />
        <FormControl variant="outlined" sx={{ width: "130px" }}>
          <InputLabel id="min-bid-label" sx={{ color: "black" }}>
            Min Bid
          </InputLabel>
          <Select
            labelId="min-bid-label"
            id="min-bid"
            value={minBid}
            onChange={(e) => {
              setMinBid(e.target.value);
              handleFilterDebounced();
            }}
          >
            <MenuItem value={0}>0</MenuItem>
            <MenuItem value={100}>100</MenuItem>
            <MenuItem value={200}>200</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" sx={{ width: "130px" }}>
          <InputLabel id="max-bid-label" sx={{ color: "black" }}>
            Max Bid
          </InputLabel>
          <Select
            labelId="max-bid-label"
            id="max-bid"
            value={maxBid}
            onChange={(e) => {
              setMaxBid(e.target.value);
              handleFilterDebounced();
            }}
          >
            <MenuItem value={0}>0</MenuItem>
            <MenuItem value={100}>100</MenuItem>
            <MenuItem value={200}>200</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" sx={{ width: "130px" }}>
          <InputLabel id="sort-by-label" sx={{ color: "black" }}>
            Sort By
          </InputLabel>
          <Select
            labelId="sort-by-label"
            id="sort-by"
            value={sortBy}
            onChange={(e) => {
              handleSortByChange(e);
              handleFilterDebounced();
            }}
          >
            <MenuItem value="default">Show All Items</MenuItem>
            <MenuItem value="asc">Price: Low to High</MenuItem>
            <MenuItem value="desc">Price: High to Low</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Box>
  );
};

export default Filter;
