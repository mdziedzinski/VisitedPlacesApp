import { createContext, useState } from "react";
import axios from "axios";

const Provider = ({ children }) => {
  const [places, setPlaces] = useState([]);
  const [placeName, setPlaceName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const placesApi = "https://63f67f8a59c944921f752b54.mockapi.io/api/users";

  const fetchPlaces = async () => {
    const response = await axios.get(placesApi);
    const placesFetched = response.data;
    setPlaces(placesFetched);
  };

  const placeNameHandler = (input) => {
    setPlaceName(input);
  };

  const searchPlacesHandler = (searchInput) => {
    setSearchTerm(searchInput);
  };

  const createPlace = async (title) => {
    const response = await axios.post(placesApi, {
      title,
    });
    const updatedPlaces = [...places, response.data];
    setBooks(updatedPlaces);
  };

  const deletePlaceById = async (id) => {
    await axios.delete(`${placesApi}${id}`);
    const updatedPlaces = places.filter((place) => {
      return place.id !== id;
    });
    setBooks(updatedPlaces);
  };

  const editPlaceById = async (id, newTitle) => {
    const response = await axios.put(`${placesApi}${id}`, {
      title: newTitle,
    });
    const updatedPlaces = places.map((place) => {
      if (book.id === id) {
        return { ...places, ...response.data };
      }
      return place;
    });

    setBooks(updatedPlaces);
  };

  const valueToShare = {
    places,
    deletePlaceById,
    editPlaceById,
    createPlace,
    fetchPlaces,
  };

  return (
    <PlacesContext.Provider value={valueToShare}>
      {children}
    </PlacesContext.Provider>
  );
};

const PlacesContext = createContext();

export { Provider };
export default PlacesContext;
