import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";
import PlacesList from "./components/PlacesList";
import Box from "@mui/material/Box";

const client = "https://63f67f8a59c944921f752b54.mockapi.io/api/users";

function App() {
  const [places, setPlaces] = useState("");

  useEffect(() => {
    fetch(client)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPlaces(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  console.log(places);
  return (
    <Box>
      <h1>Places I have been</h1>
      <PlacesList places={places} />
    </Box>
  );
}

export default App;
