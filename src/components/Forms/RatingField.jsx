import React, { useState } from "react";
import { Stack } from "@mui/system";
import { Rating } from "@mui/material";
import { Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const RatingField = () => {
  const [value, setValue] = useState(0);
  // console.log({ value });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={2} justifyContent="center" alignItems="center">
      <Typography margin="5" component="legend">
        Rate the experience
      </Typography>
      <Rating
              icon={<FavoriteIcon color='error' />}
        emptyIcon={<FavoriteBorderIcon/>}
        style={{ margin: 5 }}
        value={value}
        onChange={handleChange}
      />
    </Stack>
  );
};

export default RatingField;
