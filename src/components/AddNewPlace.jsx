import React from "react";
import { Grid, Container, Rating, Button, Box, Paper } from "@mui/material";
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
      <Paper elevation={12}>
        <Container>
          <Grid sx={{ maxWidth: "100%", marginBlock: 3 }} container spacing={0}>
            <Grid item xs={4} padding={2}>
              <PlaceAutocompleteField placeNameHandler={placeNameHandler} />
            </Grid>
            <Grid item xs={4} padding={2}>
              <DateField />
            </Grid>
            <Grid item xs={4} padding={2}>
              <RatingField />
            </Grid>
            <Grid item xs={6} padding={2}>
              <NoteField />
            </Grid>
            <Grid item xs={6} padding={2}>
              <PhotoField />
            </Grid>
            <Grid justifyContent="center" xs={12} padding={2}>
              <Button fullWidth color="secondary" variant="contained" type="submit">
                Save memory
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </form>
  );
};

export default AddNewPlace;
