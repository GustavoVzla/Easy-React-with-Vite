import axios from "axios";
const API_URL = "http://localhost:5000/panels";

export const getPanels = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching panels", error);
    return [];
  }
};
