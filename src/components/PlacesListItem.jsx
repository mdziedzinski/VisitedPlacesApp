import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";

const PlacesListItem = ({ place }) => {
  const date = new Date(place.date);
  const photoQuery = place.city;
  const [photo, setPhoto] = useState("");

  const fetchRequest = async () => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&photos?&query=${photoQuery}&client_id=${
        import.meta.env.VITE_REACT_APP_UNSPLASH_API_KEY
      }&per_page=1`
    );
    const dataJ = await data.json();
    const result = dataJ.results;
    const smallPhoto = result[0].urls.small;

    setPhoto(smallPhoto);
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  return (
    <Card>
      <CardMedia
        component="img"
        alt={place.note}
        height="140"
        image={photo ? photo : place.photo}
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
