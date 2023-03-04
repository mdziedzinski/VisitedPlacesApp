import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import axios from "axios";
import Skeleton from "@mui/material/Skeleton";

import { useState, useEffect } from "react";

const PlacesListItem = ({ place }) => {
  const date = new Date(place.date);
  const photoQuery = place.city;

  const [photo, setPhoto] = useState("");

  const getImages = async () => {
    const response = await axios
      .get(`https://api.unsplash.com/search/photos`, {
        headers: {
          Authorization: `Client-ID ${
            import.meta.env.VITE_REACT_APP_UNSPLASH_API_KEY
          }`,
        },
        params: {
          query: `${photoQuery}`,
          count: 1,
          per_page: 1,
          page: 1,
        },
      })
      .catch(function (error) {
        console.log(error.response);
      });

    setPhoto(response.data.results[0]);

    return response;
  };

  useEffect(() => {
    getImages();
  }, [photoQuery]);

  return (
    <>
      {photo ? (
        <Card>
          <CardMedia
            component="img"
            alt={place.note}
            height="140"
            image={photo ? photo.urls.small : place.photo}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {place.city}, {place.country}
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
              visited on {date.toLocaleDateString()}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Photo by{" "}
              <Link href={photo.user.links.html}>{photo.user.first_name}</Link>{" "}
              on
              <Link href="https://unsplash.com/"> Unsplash</Link>
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
      ) : (
        <>
          <Skeleton variant="rectangular" height="140px" width="100%" />
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="text" width="100%" />
        </>
      )}
    </>
  );
};

export default PlacesListItem;
