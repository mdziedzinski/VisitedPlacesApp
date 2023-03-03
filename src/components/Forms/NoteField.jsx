import React from "react";
import { TextField } from "@mui/material";

const NoteField = () => {
  return (
    <TextField
      fullWidth
      label="Make a note"
      placeholder="I loved it because..."
    />
  );
};

export default NoteField;
