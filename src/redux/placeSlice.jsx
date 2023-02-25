import { createSlice } from "@reduxjs/toolkit";

const placeSlice = createSlice({
  name: "places",
  initialState: [
    {
      id: 411,
      title: "city1",
      rating: 10,
    },
    {
      id: 414,
      title: "city2",
      rating: 9,
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newPlace = {
        id: Date.now(),
        title: action.payload.title,
        rating: action.payload.rating,
      };
      state.push(newPlace);
    },
  },
});

export const { addPlace } = placeSlice.actions;

export default placeSlice.reducer;
