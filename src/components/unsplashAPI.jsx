import axios from "axios";

const unsplashAPI = async (query) => {
  const response = await axios
    .get(`https://api.unsplash.com/search/photos`, {
      headers: {
        Authorization: `Client-ID ${
          import.meta.env.VITE_REACT_APP_UNSPLASH_API_KEY
        }`,
      },
      params: {
        query: query,
        count: 1,
        per_page: 1,
        page: 1,
      },
    })
    .catch(function (error) {
      console.log(error.response);
    });

  const unsplashPhoto = response.data.results[0];
  console.log(unsplashPhoto);
  return response;
};

export default unsplashAPI;
