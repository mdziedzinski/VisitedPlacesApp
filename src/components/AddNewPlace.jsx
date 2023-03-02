import React from "react";
import { Grid, Container, Rating, Button } from "@mui/material";
import PlaceAutocompleteForm from "./Forms/PlaceAutocompleField";
import PlaceAutocompleteField from "./Forms/PlaceAutocompleField";
import NoteField from "./Forms/NoteField";
import RatingField from "./Forms/RatingField";
import PhotoField from "./Forms/PhotoField";
import DateField from "./Forms/DateField";

const onSubmit = (e) => {
  e.preventDefault();
  console.log("submitted");
};

const AddNewPlace = ({ placeNameHandler, placeName }) => {
  return (
    <form onSubmit={onSubmit}>
      <Grid
        sx={{ maxWidth: "100%", marginBlock: 3 }}
        container
        spacing={0}
        style={{
          backgroundColor: "grey",
          color: "black",
        }}
      >
        <Grid item xs={4} padding={2}>
          <PlaceAutocompleteField placeNameHandler={placeNameHandler} />
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
        <Grid item xs={4} padding={2}>
          <Button variant="contained" type="submit">Add memory</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddNewPlace;
