import React from "react";
import { Box, Typography } from "@mui/material";
import newItemsCategories from "../../../utils/newItemCategories";
const Categories = ({ handleCategoryChange }) => {
  return (
    <>
      <Typography mt={2} textAlign={"center"}>
        Categories
      </Typography>
      <Box mt={1} display="flex">
        {newItemsCategories.map((category) => (
          <label htmlFor={category.toLowerCase()}>
            <input
              type="checkbox"
              id={category.toLowerCase()}
              name="categories"
              value={category}
              onChange={handleCategoryChange}
            />
            {category}
          </label>
        ))}
      </Box>
    </>
  );
};

export default Categories;
