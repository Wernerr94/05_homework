//  key = 2677d9ddf63a8facb0aaeee9651ede60
import axios from 'axios';
const apiKey = "e5b7e5dc222b7259d53673d3f6744a91";
async function getTrends() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
async function getMovieById(id) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
async function getMovieByQuery(query) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
async function getCastById(id) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
async function getReviewById(id) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}&language=en-US&page=1`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const api = {
  getTrends,
  getMovieById,
  getMovieByQuery,
  getCastById,
  getReviewById,
};

export default api;
