import React from "react";
import { TextField } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

const NoteField = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name="note"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          label="Make a note"
          placeholder="I loved it because..."
        />
      )}
    />
  );
};

export default NoteField;
