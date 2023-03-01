import React from "react";
import { Grid, Container, Rating } from "@mui/material";
import PlaceAutocompleteForm from "./Forms/PlaceAutocompleField";
import PlaceAutocompleteField from "./Forms/PlaceAutocompleField";
import NoteField from "./Forms/NoteField";
import RatingField from "./Forms/RatingField";
import PhotoField from "./Forms/PhotoField";
import DateField from "./Forms/DateField";

const AddNewPlace = ({ placeNameHandler, placeName }) => {
  return (
    <Grid
      sx={{ maxWidth: "100%" }}
      container
      spacing={0}
      style={{ backgroundColor: "yellow", color: "black" }}
    >
      <Grid item xs={4} padding={2}>
        <PlaceAutocompleteField />
      </Grid>
      <Grid item xs={4} padding={2}>
        <DateField />
      </Grid>
      <Grid item xs={4} padding={2}>
        <RatingField />
      </Grid>
      <Grid item xs={12} padding={2}>
        <NoteField />
      </Grid>
      <Grid item xs={12} padding={2}>
        <PhotoField />
      </Grid>
    </Grid>
  );
};

export default AddNewPlace;
