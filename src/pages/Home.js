import React from "react";
import { Container } from "@mui/material";
import Banner from "../components/Banner/Banner";
import Filter from "../components/Filter/Filter";
import ItemList from "../components/Items/ItemList";
import items from "../utils/items";

const Home = () => {
  return (
    <>
      <Banner />
      <Filter />
      <Container sx={{ mt: 4 }}>
        <ItemList items={items} />
      </Container>
    </>
  );
};

export default Home;
