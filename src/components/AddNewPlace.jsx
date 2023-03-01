import React from "react";
import { Grid, Container } from "@mui/material";
import PlaceAutocompleteForm from "./Forms/PlaceAutocompleField";
import PlaceAutocompleteField from "./Forms/PlaceAutocompleField";
import NoteField from "./Forms/NoteField";

const AddNewPlace = ({ placeNameHandler, placeName }) => {
  return (
    <Grid
      sx={{ maxWidth: "100%" }}
      container
      spacing={0}
      style={{ backgroundColor: "yellow", color: "black" }}
    >
      <Grid item xs={6} padding={2}>
        <PlaceAutocompleteField />
      </Grid>
      <Grid item xs={6} padding={2}>
        <NoteField />
      </Grid>
      <Grid item xs={6}>
        1
      </Grid>
      <Grid item xs={6}>
        1
      </Grid>
    </Grid>
  );
};

export default AddNewPlace;
