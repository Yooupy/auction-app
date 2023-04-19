import { Box, Typography } from "@mui/material";
import styles from "../styles.module.scss";
import Form from "./Form";

function NewItemForm() {
  return (
    <Box className={styles.formContainer}>
      <Typography variant="h4" gutterBottom>
        Add Item
      </Typography>
      <Form />
    </Box>
  );
}
export default NewItemForm;
