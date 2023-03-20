import React from "react";
import { TextField } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

const PhotoField = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name="photo"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          label="Paste the url to your photo"
          placeholder="Leave it empty to generate a photo from Unsplash"
        />
      )}
    />
  );
};

export default PhotoField;
