import React from "react";
import { TextField, Paper } from "@mui/material";
import { useRef } from "react";

const Search = ({ searchPlacesHandler, searchTerm }) => {
  const inputRef = useRef("");

  const handleSearchInput = (event) => {
    event.preventDefault();
    searchPlacesHandler(inputRef.current.value);
  };

  return (
    <Paper elevation={5}>
      <form onSubmit={handleSearchInput}>
        <TextField
          InputProps={{
            sx: {
              "& input": {
                textAlign: "center",
              },
            },
          }}
          inputRef={inputRef}
          placeholder="Type a place and press enter..."
          fullWidth
          id="search"
          variant="standard"
        />
      </form>
    </Paper>
  );
};

export default Search;
