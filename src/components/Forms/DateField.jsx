import React from "react";
import { TextField } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

const DateField = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name="date"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          required
          id="date"
          fullWidth
          label="Pick the date"
          placeholder="When was it?"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
      )}
    />
  );
};

export default DateField;
