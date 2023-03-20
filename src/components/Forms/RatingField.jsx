import React, { useState } from "react";
import { Stack } from "@mui/system";
import { Rating } from "@mui/material";
import { Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useFormContext, Controller } from "react-hook-form";

const RatingField = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name="rating"
      control={control}
      defaultValue=""
      render={({ field: { onChange } }) => (
        <Stack spacing={2} justifyContent="center" alignItems="center">
          <Typography margin="5" component="legend">
            Rate the experience
          </Typography>
          <Rating
         
            onChange={onChange}
            icon={<FavoriteIcon color="error" />}
            emptyIcon={<FavoriteBorderIcon />}
            style={{ margin: 5 }}
          />
        </Stack>
      )}
    />
  );
};

export default RatingField;
