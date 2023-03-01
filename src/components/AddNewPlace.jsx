import React, { useRef, useState } from "react";
import {
  Grid,
  Container,
  Input,
  TextField,
  Box,
  Paper,
  TextareaAutosize,
  Rating,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { usePlacesWidget } from "react-google-autocomplete";
import { Formik, Form } from "formik";
import TextFieldWrapper from "./Forms/TextFieldWrapper";
import * as Yup from "yup";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

const AddNewPlace = ({ placeName, placeNameHandler }) => {
  const INITIAL_FORM_STATE = {
    placeName: "",
    placeNote: "",
    placeRating: "",
    placePhoto: "",
  };
  const FORM_VALIDATION = Yup.object().shape({
    placeName: Yup.string().required("Required"),
  });

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
    <Grid>
      <Grid>
        <Container sx={{ bgcolor: "white" }}>
          <Formik
            initialValues={{ ...INITIAL_FORM_STATE }}
            validationSchema={FORM_VALIDATION}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h2" style={{ color: "black" }}>
                    Add memories
                  </Typography>
                </Grid>
                {/* <Grid item xs={6}>
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
                </Grid> */}

                <Grid item xs={6}>
                  <TextFieldWrapper
                    name="placeName"
                    inputRef={materialRef}
                    label="Place Name"
                   
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextFieldWrapper name="placeNote" label="Place Note" />
                </Grid>

                <Grid item xs={12}>
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
                </Grid>

                <Grid item xs={12}>
                  <StyledRating
                    name="customized-color"
                    defaultValue={3}
                    getLabelText={(value) =>
                      `${value} Heart${value !== 1 ? "s" : ""}`
                    }
                    precision={1}
                    icon={<FavoriteIcon fontSize="inherit" />}
                    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                  />
                </Grid>

                <Grid item xs={12}>
                  <label style={{ color: "black" }} htmlFor="photo-input">
                    Upload a photo
                  </label>
                </Grid>
              </Grid>
            </Form>
          </Formik>

          <p>{placeName}</p>
        </Container>
      </Grid>
    </Grid>
  );
};

export default AddNewPlace;
