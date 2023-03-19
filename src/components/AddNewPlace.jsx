import React from "react";
import {
  Grid,
  Container,
  Rating,
  Button,
  Box,
  Paper,
  TextField,
} from "@mui/material";
import PlaceAutocompleteField from "./Forms/PlaceAutocompleField";
import NoteField from "./Forms/NoteField";
import RatingField from "./Forms/RatingField";
import PhotoField from "./Forms/PhotoField";
import DateField from "./Forms/DateField";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  place: yup.string().required(),
  date: yup.date().required(),
  photo: yup.string().max(50),
  rating: yup.number(),
  note: yup.string().max(300),
});

const AddNewPlace = () => {
  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Paper elevation={12}>
          <Container>
            <Grid
              sx={{ maxWidth: "100%", marginBlock: 3 }}
              container
              spacing={0}
            >
              <Grid item xs={4} padding={2}>
                <PlaceAutocompleteField />
              </Grid>
              <Grid item xs={4} padding={2}>
                <DateField name="date" />
              </Grid>
              <Grid item xs={4} padding={2}>
                <RatingField name="rating" />
              </Grid>
              <Grid item xs={6} padding={2}>
                <NoteField name="note" />
              </Grid>
              <Grid item xs={6} padding={2}>
                <PhotoField name="photo" />
              </Grid>
              <Grid item justifyContent="center" xs={12} padding={2}>
                <Button
                  fullWidth
                  color="secondary"
                  variant="contained"
                  type="submit"
                >
                  Save memory
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </form>
    </FormProvider>
  );
};

export default AddNewPlace;
