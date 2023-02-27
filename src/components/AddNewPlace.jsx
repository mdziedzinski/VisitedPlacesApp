import React, { useRef, useState } from "react";
import { Input, TextField, Box, Paper } from "@mui/material";

import Autocomplete, { usePlacesWidget } from "react-google-autocomplete";

const AddNewPlace = () => {
  const [city, setCity] = useState("");

  const { ref: materialRef } = usePlacesWidget({
    apiKey: import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY,
    onPlaceSelected: (place) => {
      console.log(place);
      setCity(place.formatted_address);
    },
    inputAutocompleteValue: "country",
  });

  const handleCity = (e) => {
    console.log(e);
  };

  return (
    <Box
      sx={{
        display: "flex",

        alignItems: "center",

        margin: "20px",
        padding: "20px",
        borderRadius: 3,
        backgroundColor: "white",
      }}
    >
      <TextField
        required
        color="info"
        label="Type a city..."
        placeholder="City name"
        variant="outlined"
        inputRef={materialRef}
        onChange={handleCity}
      />
      <TextField
        required
        color="info"
        label="Type a city..."
        placeholder="City name"
        variant="outlined"
        inputRef={materialRef}
        onChange={handleCity}
      />

      <p>{city}</p>
    </Box>
  );
};

export default AddNewPlace;
