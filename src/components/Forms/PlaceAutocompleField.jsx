import React from "react";
import { TextField } from "@mui/material";
import usePlacesContext from "../../hooks/usePlacesContext";
import { usePlacesWidget } from "react-google-autocomplete";

const PlaceAutocompleteField = () => {
  const { placeNameHandler } = usePlacesContext();
  const { ref: materialRef } = usePlacesWidget({
    apiKey: import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY,
    onPlaceSelected: (place) => {
      placeNameHandler(place.formatted_address);
    },
    inputAutocompleteValue: "country",
  });

  return (
    <TextField
      fullWidth
      required
      label="Type a city..."
      placeholder="New York..."
      variant="outlined"
      inputRef={materialRef}
    />
  );
};

export default PlaceAutocompleteField;
