import React, { useState } from "react";
import { Grid, Paper, Button, Typography } from "@mui/material";
import styles from "./styles.module.scss";
// import ItemList from "../Items/ItemList";
import ListItems from "../Items/ForAdmin/ListItems";
import UserList from "../Users/UserList";
import Wallet from "../Users/Wallet/Wallet";
import AdminProfile from "./AdminProfile";

const options = [
  { name: "List of Items", component: <ListItems /> },
  { name: "List of Users", component: <UserList /> },
  { name: "Website Wallet", component: <Wallet /> },
  { name: "Admin Profile", component: <AdminProfile /> },
];

const Admin = () => {
  const [activeOptionIndex, setActiveOptionIndex] = useState(0);

  const handleOptionClick = (optionIndex) => {
    setActiveOptionIndex(optionIndex);
  };

  const renderRightSide = () => {
    const selectedOption = options[activeOptionIndex];
    return (
      <Paper className={styles.rightSide}>
        <Typography variant="h4">{selectedOption.name}</Typography>
        {selectedOption.component}
      </Paper>
    );
  };

  return (
    <Grid container>
      <Grid item md={3} sm={4} xs={12}>
        <Paper className={styles.leftSide}>
          <Typography variant="h4">Admin Dashboard</Typography>
          {options.map((option, index) => (
            <Button
              key={index}
              variant="contained"
              color="primary"
              className={`${styles.optionButton} ${
                activeOptionIndex === index ? styles.activeOption : ""
              }`}
              onClick={() => handleOptionClick(index)}
            >
              {option.name}
            </Button>
          ))}
        </Paper>
      </Grid>
      <Grid item md={9} sm={8} xs={12}>
        {renderRightSide()}
      </Grid>
    </Grid>
  );
};

export default Admin;
