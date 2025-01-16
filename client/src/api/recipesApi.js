import axios from "axios";

const API_BASE_URL = "https://api.spoonacular.com/recipes/complexSearch"; // Replace with your API
const API_KEY = "f9e4826c7a9c41be9234eec55d91f66a"; // Replace with your API key

// Fetch all recipes based on category
export const fetchRecipesByCategory = async (category) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/complexSearch`, {
      params: {
        apiKey: API_KEY,
        query: category,
        number: 10, // Number of results to fetch
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};

// Fetch detailed recipe info by ID
export const fetchRecipeDetails = async (recipeId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${recipeId}/information`, {
      params: { apiKey: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching recipe details:", error);
    return null;
  }
};
