import axios from "axios";

const unsplashAPI = async (term) => {
  const response = await axios
    .get(`https://api.unsplash.com/search/photos`, {
      headers: {
        Authorization: `Client-ID ${
          import.meta.env.VITE_REACT_APP_UNSPLASH_API_KEY
        }`,
      },
      params: {
        query: term,
        count: 1,
        per_page: 1,
        page: 1,
      },
    })
    .catch(function (error) {
      console.log(error.response);
    });

  return await response.data.results[0].urls.small;
};

export default unsplashAPI;
