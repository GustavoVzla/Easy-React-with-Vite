import axios from "axios";

const API_URL = "https://icanhazdadjoke.com";

export const fetchJoke = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: { Accept: "application/json" },
    });
    return response.data.joke;
  } catch (error) {
    console.error("Error fetching joke:", error);
    return "Oops! Something went wrong. Try again later.";
  }
};
