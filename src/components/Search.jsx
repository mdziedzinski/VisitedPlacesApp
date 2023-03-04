import React from "react";
import { TextField, Paper } from "@mui/material";
import { useRef } from "react";

const Search = ({ searchPlacesHandler }) => {
  const inputRef = useRef("");

  const handleSearchInput = (event) => {
    if (event.key === "Enter") {
      searchPlacesHandler(inputRef.current.value);
    }
  };

  return (
    <Paper elevation={5}>
      <TextField
        // onChange={handleSearchInput}
        InputProps={{
          sx: {
            "& input": {
              textAlign: "center",
            },
          },
        }}
        inputRef={inputRef}
        onKeyDown={handleSearchInput}
        placeholder="Type a place and press enter..."
        fullWidth
        id="search"
        variant="standard"
      />
    </Paper>
  );
};

export default Search;
