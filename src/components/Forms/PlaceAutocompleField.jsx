import React from "react";
import { TextField } from "@mui/material";
import { useRef } from "react";
import { usePlacesWidget } from "react-google-autocomplete";
import { useFormContext, Controller } from "react-hook-form";
import usePlacesContext from "../../hooks/usePlacesContext";
import AutoComplete from "react-google-autocomplete";

const PlaceAutocompleteField = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name="place"
      control={control}
      defaultValue=""
      rules={{ required: true }}
      render={({ field: { onChange } }) => (
        <AutoComplete
          required
          language="en"
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#333333",
            color: "white",
            borderRadius: 5,
            border: "1px solid #717171",
            fontSize: "1rem",
            "&:hover": { border: "10px solid #f00" },
          }}
          apiKey={import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY}
          onPlaceSelected={(place) => onChange(place.address_components)}
        />
      )}
    />
  );
};

export default PlaceAutocompleteField;
