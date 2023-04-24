import React, { useEffect, useState } from "react";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

const ListItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:5000/items/");
        const data = await response.json();
        setItems(data);
      } catch (err) {
        console.error("Failed to fetch items:", err);
      }
    };

    fetchItems();
  }, []);

  return (
    <Box>
      <List>
        {items.map((item) => (
          <ListItem key={item.id} divider>
            <ListItemText
              primary={`Name: ${item.name}`}
              secondary={`Description: ${item.description}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ListItems;
