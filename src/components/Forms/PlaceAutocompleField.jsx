import React from "react";
import { TextField } from "@mui/material";
import { useRef } from "react";
import { usePlacesWidget } from "react-google-autocomplete";
import { useFormContext, Controller } from "react-hook-form";
import usePlacesContext from "../../hooks/usePlacesContext";

const PlaceAutocompleteField = () => {
  const { placeNameHandler, placeName } = usePlacesContext();

  const { ref: materialRef } = usePlacesWidget({
    apiKey: import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY,

    onPlaceSelected: (place) => {
      console.log(place);
      placeNameHandler(place.formatted_address);
    },
    inputAutocompleteValue: "country",
  });

  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name="place"
      control={control}
      render={({ field: { inputRef, ...field } }) => (
        <TextField
          {...field}
          fullWidth
          required
          label="Type a city..."
          placeholder="New York..."
          variant="outlined"
          // value={placeName}
          inputRef={materialRef}
        />
      )}
    />
  );
};

export default PlaceAutocompleteField;
