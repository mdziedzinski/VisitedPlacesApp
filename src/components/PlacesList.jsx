import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import usePlacesContext from "../hooks/usePlacesContext";

import PlacesListItem from "./PlacesListItem";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const PlacesList = () => {
  const { places, searchTerm } = usePlacesContext();
  return (
    <Grid container spacing={2}>
      {places &&
        places
          .filter(
            (place) =>
              place.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
              place.country.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((place) => (
            <Grid xs={12} sm={4} key={place.id}>
              <Item>
                <PlacesListItem place={place} />
              </Item>
            </Grid>
          ))}
    </Grid>
  );
};

export default PlacesList;
