import React from "react";
import { MuiFileInput } from "mui-file-input";
import { Typography } from "@mui/material";

const UploadFile = () => {
  const [file, setFile] = React.useState(null);

  const handleChange = (newFile) => {
    setFile(newFile);
  };

  return (
    <>
      <Typography mt={2} textAlign={"center"}>
        Image
      </Typography>
      <MuiFileInput value={file} onChange={handleChange} />{" "}
    </>
  );
};
export default UploadFile;
