import React from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
  Stack,
} from "@mui/material";
import styles from "./Filter.module.scss";

const Filter = () => {
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
          sx={{ width: "60%" }}
        />
        <TextField
          id="news"
          label="News"
          variant="outlined"
          size="medium"
          sx={{ width: "60%" }}
        />
        <FormControl variant="outlined" sx={{ width: "60%" }}>
          <InputLabel id="min-bid-label" sx={{ color: "black" }}>
            Min Bid
          </InputLabel>
          <Select labelId="min-bid-label" id="min-bid">
            <MenuItem value={0}>0</MenuItem>
            <MenuItem value={100}>100</MenuItem>
            <MenuItem value={200}>200</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" sx={{ width: "60%" }}>
          <InputLabel id="max-bid-label" sx={{ color: "black" }}>
            Max Bid
          </InputLabel>
          <Select labelId="max-bid-label" id="max-bid">
            <MenuItem value={100}>100</MenuItem>
            <MenuItem value={200}>200</MenuItem>
            <MenuItem value={300}>300</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#3f51b5", color: "white" }}
        >
          Filter
        </Button>
      </Stack>
    </Box>
  );
};

export default Filter;
