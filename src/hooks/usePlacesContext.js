import { useContext } from "react";
import PlacesContext from "../components/context/placesContext";

function usePlacesContext() {
  return useContext(PlacesContext);
}

export default usePlacesContext;
