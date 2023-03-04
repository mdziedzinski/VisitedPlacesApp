import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";
import PlacesList from "./components/PlacesList";
import Box from "@mui/material/Box";
import { createApi } from "unsplash-js";
import AddNewPlace from "./components/AddNewPlace";
import { Typography, Container } from "@mui/material";
import Search from "./components/Search";

const client = "https://63f67f8a59c944921f752b54.mockapi.io/api/users";

function App() {
  const [places, setPlaces] = useState("");
  const [placeName, setPlaceName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const placeNameHandler = (input) => {
    setPlaceName(input);
  };

  const searchPlacesHandler = (searchInput) => {
    setSearchTerm(searchInput);
  };

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

  return (
    <Box bgcolor="slategray">
      <Container>
        <Typography textAlign="center" variant="h1">
          My travels
        </Typography>
        <Search searchPlacesHandler={searchPlacesHandler} />
        <AddNewPlace
          placeNameHandler={placeNameHandler}
          placeName={placeName}
        />
        <PlacesList places={places} searchTerm={searchTerm} />
      </Container>
    </Box>
  );
}

export default App;
