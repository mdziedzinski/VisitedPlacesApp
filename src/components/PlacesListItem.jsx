import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const PlacesListItem = ({ place }) => {
  const date = new Date(place.date);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <Card>
      <CardMedia
        component="img"
        alt={place.note}
        height="140"
        image={place.photo}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {place.city}, {place.country}
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          visited on {date.toLocaleDateString()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {place.note}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Delete</Button>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
  );
};

export default PlacesListItem;