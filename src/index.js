import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom";
import App from "./App";

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <Router>
    <App />
  </Router>
);
