import React, { useState } from "react";
import { Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { DateField } from "@mui/x-date-pickers/DateField";

const DataPicker = () => {
  const [value, setValue] = useState(dayjs("2022-04-17"));
  return (
    <Box mt={2} width={"300px"}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateField
          width={"100%"}
          label="Expire Data"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default DataPicker;
