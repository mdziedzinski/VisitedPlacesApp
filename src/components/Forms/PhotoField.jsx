import React from "react";
import { TextField } from "@mui/material";

const PhotoField = () => {
  return (
    <TextField
      fullWidth
      label="Paste an url to a photo"
      placeholder="Leave it empty to generate a photo"
      margin="2"
    ></TextField>
  );
};

export default PhotoField;
