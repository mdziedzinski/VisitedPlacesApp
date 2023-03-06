import axios from "axios";

const unsplashAPI = async (query, setstate) => {
  const response = await axios
    .get(`https://api.unsplash.com/search/photos`, {
      headers: {
        Authorization: `Client-ID ${
          import.meta.env.VITE_REACT_APP_UNSPLASH_API_KEY
        }`,
      },
      params: {
        query: `${query}`,
        count: 1,
        per_page: 1,
        page: 1,
      },
    })
    .catch(function (error) {
      console.log(error.response);
    });

  setstate(response.data.results[0]);

  return response;
};

export default unsplashAPI;
