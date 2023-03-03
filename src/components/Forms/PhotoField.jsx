import React from "react";
import { TextField } from "@mui/material";

const PhotoField = () => {
  return (
    <TextField
      fullWidth
      label="Paste the url to your photo"
      placeholder="Leave it empty to generate a photo from Unsplash"
    ></TextField>
  );
};

export default PhotoField;
