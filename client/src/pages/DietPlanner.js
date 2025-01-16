import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled Components

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  background-color: #f8f9fa; /* Light gray background */
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #4caf50; /* Green color */
  margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
`;

const Button = styled.button`
  background-color: ${(props) =>
    props.active ? "rgb(7, 117, 12)" : "#4caf50"}; /* Active button color */
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.active ? "rgb(7, 117, 12)" : "rgb(7, 100, 10)"}; /* Hover behavior */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #4caf50;
  }
`;

const RecipeList = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allows wrapping if there are too many recipes */
  justify-content: center; /* Centers the recipes horizontally */
  gap: 20px; /* Adds spacing between recipes */
  width: 100%;
`;

const RecipeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 15px;
  max-width: 300px;
  text-align: center;
`;

const RecipeTitle = styled.h3`
  font-size: 1.2rem;
  color: #333; /* Dark gray */
  margin-bottom: 10px;
`;

const RecipeImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const ViewDetailsLink = styled(Link)`
  text-decoration: none;
  color: light blue; /* Green text */
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

function DietPlanner() {
  const [recipes, setRecipes] = useState([]);
  const [mealType, setMealType] = useState("All"); // Track active button

  // Fetch recipes from Spoonacular API
  const fetchRecipes = async (type = "") => {
    try {
      const apiKey = "f9e4826c7a9c41be9234eec55d91f66a"; // Replace with your real API key from the environment
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true&type=${type}`
      );
      const data = await response.json();
      setRecipes(data.results);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  // Fetch all recipes on initial render
  useEffect(() => {
    fetchRecipes();
  }, []);

  // Handle button click
  const handleButtonClick = (type) => {
    setMealType(type); // Set the active button
    fetchRecipes(type === "All" ? "" : type.toLowerCase()); // Fetch recipes for the selected type
  };

  return (
    <Container>
      <Title>Diet Plan</Title>

      {/* Meal Type Buttons */}
      <ButtonGroup>
        <Button
          active={mealType === "All"}
          onClick={() => handleButtonClick("All")}
        >
          All
        </Button>
        <Button
          active={mealType === "Breakfast"}
          onClick={() => handleButtonClick("Breakfast")}
        >
          Breakfast
        </Button>
        <Button
          active={mealType === "Lunch"}
          onClick={() => handleButtonClick("Lunch")}
        >
          Lunch
        </Button>
        <Button
          active={mealType === "Dinner"}
          onClick={() => handleButtonClick("Dinner")}
        >
          Dinner
        </Button>
      </ButtonGroup>

      {/* Recipe List */}
      <RecipeList>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id}>
            <RecipeTitle>{recipe.title}</RecipeTitle>
            <RecipeImage src={recipe.image} alt={recipe.title} />
            <ViewDetailsLink to={`/diet-planner/recipe/${recipe.id}`}>
              View Details
            </ViewDetailsLink>
          </RecipeCard>
        ))}
      </RecipeList>
    </Container>
  );
}

export default DietPlanner;
