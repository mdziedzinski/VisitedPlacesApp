import React from "react";
import { TextField } from "@mui/material";

const DateField = () => {
  return (
    <TextField
      required
      id="date"
      fullWidth
      label="Pick the date"
      placeholder="When was it?"
      type="date"
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default DateField;
