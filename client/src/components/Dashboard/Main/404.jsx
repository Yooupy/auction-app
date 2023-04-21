import React from "react";
import { Typography, Button } from "@mui/material";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h2" gutterBottom>
        404 - Page not found
      </Typography>
      <img
        src="https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif"
        alt="Page not found"
        style={{ width: "300px", height: "300px", marginTop: "50px" }}
      />
      <Typography variant="body1" gutterBottom>
        Oops! The page you are looking for does not exist.
      </Typography>
      <Button variant="contained" color="primary" href="/">
        Go back to homepage
      </Button>
    </div>
  );
};

export default NotFound;
