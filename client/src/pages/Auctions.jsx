import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import ItemList from "../components/Items/ItemList";

const Auctions = () => {
  const [items, setItems] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`${apiUrl}/items`);
      setItems(response.data);
    }
    fetchData();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: 4,
      }}
    >
      <ItemList items={items} />
    </Box>
  );
};

export default Auctions;
