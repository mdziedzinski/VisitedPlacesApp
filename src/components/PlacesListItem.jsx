import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import { Rating } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Skeleton from "@mui/material/Skeleton";
import unsplashAPI from "./unsplashAPI";
import { useState, useEffect } from "react";
import usePlacesContext from "../hooks/usePlacesContext";

const PlacesListItem = ({ place }) => {
  const { deletePlaceById } = usePlacesContext();
  const [photo, setPhoto] = useState("");

  const date = new Date(place.date);

  const handleDeleteClick = () => {
    deletePlaceById(place.id);
  };

  return (
    <>
      {place.city ? (
        <Card>
          <CardMedia
            component="img"
            alt={place.alt_description}
            height="140"
            image={place.photo}
          />
          <CardContent>
            {place.photo.includes("unsplash") && (
              <Typography variant="caption" display="block" gutterBottom>
                Photo generated from
                <Link href="https://unsplash.com/"> Unsplash</Link>
              </Typography>
            )}
            <Typography gutterBottom variant="h5" component="div">
              {place.city}, {place.country}
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
              visited on {date.toLocaleDateString()}
            </Typography>
            <Typography display="block" gutterBottom>
              <Rating
                readOnly
                value={place.rating}
                icon={<FavoriteIcon color="error" />}
                emptyIcon={<FavoriteBorderIcon />}
                style={{ margin: 5 }}
              />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {place.note}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleDeleteClick}>
              Delete
            </Button>
            <Button size="small">Edit</Button>
          </CardActions>
        </Card>
      ) : (
        <>
          <Skeleton variant="rectangular" height="140px" width="100%" />
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="text" width="100%" />
          <CardActions>
            <Button size="small" onClick={handleDeleteClick}>
              Delete
            </Button>
            <Button size="small">Edit</Button>
          </CardActions>
        </>
      )}
    </>
  );
};

export default PlacesListItem;
