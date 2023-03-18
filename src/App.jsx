import { useEffect } from "react";
import PlacesList from "./components/PlacesList";
import Box from "@mui/material/Box";
import AddNewPlace from "./components/AddNewPlace";
import { Typography, Container } from "@mui/material";
import Search from "./components/Search";
import usePlacesContext from "./hooks/usePlacesContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


function App() {
  const { fetchPlaces } = usePlacesContext();
  useEffect(() => {
    fetchPlaces();
  }, []);

  return (
    <Box bgcolor="slategray">
      <Container>
        <Typography textAlign="center" variant="h1">
          My travels
        </Typography>
        <Search />
        <AddNewPlace />
        <PlacesList />
      </Container>
    </Box>
  );
}

export default App;
