import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const ItemCard = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  margin: theme.spacing(2),
  maxWidth: 300,
  height: 400,
  textAlign: "center",
}));

const ItemImage = styled("img")({
  objectFit: "contain",
  maxWidth: "100%",
  maxHeight: "60%",
});

const ItemName = styled(Typography)({
  fontWeight: "bold",
  marginBottom: "10px",
});

const ItemPrice = styled(Typography)({
  color: "#009688",
  fontWeight: "bold",
  marginBottom: "10px",
});

const ItemDescription = styled(Typography)({
  fontSize: "14px",
  textAlign: "justify",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  "-webkit-line-clamp": 4 /* number of lines to show */,
  "-webkit-box-orient": "vertical",
});

const Auctions = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:5000/items");
      setItems(response.data);
    }
    fetchData();
  }, []);

  const handleItemClick = (itemId) => {
    navigate(`/items/${itemId}`);
  };

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
      {items.map((item) => (
        <ItemCard key={item.id} onClick={() => handleItemClick(item.id)}>
          <ItemImage src={item.pictureUrl} alt="item picture" />
          <ItemName variant="h6">{item.name}</ItemName>
          <ItemPrice variant="subtitle1">${item.price}</ItemPrice>
          <ItemDescription variant="body2">{item.description}</ItemDescription>
        </ItemCard>
      ))}
    </Box>
  );
};

export default Auctions;
