import React, { useRef, useState } from "react";
import {
  Input,
  TextField,
  Box,
  Paper,
  TextareaAutosize,
  Rating,
} from "@mui/material";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { usePlacesWidget } from "react-google-autocomplete";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

const AddNewPlace = ({ placeName, placeNameHandler }) => {
  const { ref: materialRef } = usePlacesWidget({
    apiKey: import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY,
    onPlaceSelected: (place) => {
      console.log(place);
      placeNameHandler(place.formatted_address);
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
      <label style={{ color: "black" }} htmlFor="city-input">
        City name
      </label>
      <TextField
        id="city-input"
        required
        color="info"
        label="Type a city..."
        placeholder="City name"
        variant="outlined"
        inputRef={materialRef}
        onChange={handleCity}
        style={{ margin: 20 }}
      />
      <label style={{ color: "black" }} htmlFor="note-input">
        Make a note
      </label>
      <TextareaAutosize
        id="note-input"
        label="Make a note"
        placeholder="What you loved about it?"
        style={{
          backgroundColor: "white",
          borderRadius: 5,
          fontSize: "1rem",
          color: "black",
          margin: 20,
          height: "50px",
        }}
      />
      <label style={{ color: "black" }} htmlFor="rating-input">
        Rate this place
      </label>
      <StyledRating
        name="customized-color"
        defaultValue={3}
        getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
        precision={1}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />

      <p>{placeName}</p>
    </Box>
  );
};

export default AddNewPlace;
