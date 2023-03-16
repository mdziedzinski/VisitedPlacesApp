import { useContext } from "react";
import PlacesContext from "../components/context/places";

function usePlacesContext() {
  return useContext(PlacesContext);
}

export default usePlacesContext;
