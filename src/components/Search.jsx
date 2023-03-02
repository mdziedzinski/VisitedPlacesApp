import React from "react";
import { TextField, Paper } from "@mui/material";

const Search = () => {
  return (
    <Paper elevation={5}>
      <TextField
        InputProps={{
          sx: {
            "& input": {
              textAlign: "center",
            },
          },
        }}
        placeholder="Search for a place..."
        fullWidth
        id="search"
        variant="standard"
      />
    </Paper>
  );
};

export default Search;
