import React from "react";
// import { Container } from "@mui/material";
import Banner from "../components/Banner";
// import Filter from "../components/Filter/Filter";
// import ItemList from "../components/Items/ItemList";
// import items from "../utils/items";
import Main from "../components/Main";

const Home = () => {
  return (
    <>
      <Banner />
      <Main />
      {/* <Filter />
      <Container sx={{ mt: 4 }}>
        <ItemList items={items} />
      </Container> */}
    </>
  );
};

export default Home;
