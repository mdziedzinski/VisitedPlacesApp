import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";
import PlacesList from "./components/PlacesList";
import Box from "@mui/material/Box";
import { createApi } from "unsplash-js";

const client = "https://63f67f8a59c944921f752b54.mockapi.io/api/users";

function App() {
  const [places, setPlaces] = useState("");

  useEffect(() => {
    fetchClient();
  }, []);

  const fetchClient = async () => {
    const data = await fetch(
      `https://63f67f8a59c944921f752b54.mockapi.io/api/users`
    );
    const dataRes = await data.json();

    setPlaces(dataRes);
  };

  console.log(places);
  // console.log(photo);

  return (
    <Box>
      <h1>Places I have been</h1>
      <PlacesList places={places} />
    </Box>
  );
}

export default App;
