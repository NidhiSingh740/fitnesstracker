import axios from "axios";

// Base URL for your API
const API = axios.create({
  baseURL: "http://localhost:8080/api/",
});

// Sign Up User
export const UserSignUp = async (data) => {
  try {
    const response = await API.post("/user/signup", data);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : { message: "Network error" };
  }
};

// Sign In User
export const UserSignIn = async (data) => {
  try {
    const response = await API.post("/user/signin", data);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : { message: "Network error" };
  }
};

// Get Dashboard Details
export const getDashboardDetails = async (token) => {
  try {
    const response = await API.get("/user/dashboard", {
      headers: { Authorization: `Bearer ${token}` },
    });
     // Log the response
    return response.data;
  } catch (error) {
    console.error("Error fetching dashboard details:", error);
    throw error.response ? error.response.data : { message: "Network error" };
  }
};

// Get Workouts for a Specific Date
export const getWorkouts = async (token, date) => {
  try {
    
    const response = await API.get(`/user/workout?date=${date}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
   
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : { message: "Network error" };
  }
};

// Add Workout
export const addWorkout = async (token, data) => {
  try {
   // alert("Sending workout data..."); // Optional: Add an alert before sending data
    const response = await API.post(`/user/workout`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    // Check for an error response, or if none, use a default error message
    const errorMessage = error.response?.data?.message || "Network error";
    throw new Error(errorMessage); // Throw the error to be caught in the outer try-catch
  }
};

