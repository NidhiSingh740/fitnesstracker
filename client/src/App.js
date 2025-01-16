import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./utils/Theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Authentication from "./pages/Authentication";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import Tutorials from "./pages/Tutorials";
import DietPlanner from "./pages/DietPlanner";
import Home from "./pages/Home";
import RecipeDetails from "./components/RecipeDetails";
import Contact from "./components/Contact/Contact"; // Correct import path

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  transition: all 0.2s ease;
`;

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <ThemeProvider theme={lightTheme}>
      <Router>
        {currentUser ? (
          <Container>
            <Navbar currentUser={currentUser} setcurrentuser={setCurrentUser} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/workouts" element={<Workouts />} />
              <Route path="/tutorials" element={<Tutorials />} />
              <Route path="/diet-planner" element={<DietPlanner />} />
              <Route path="/diet-planner/recipe/:id" element={<RecipeDetails />} />
              <Route path="/contact" element={<Contact />} /> {/* Corrected Contact route */}
            </Routes>
          </Container>
        ) : (
          <Container>
            <Authentication setcurrentuser={setCurrentUser} />
          </Container>
        )}
      </Router>
    </ThemeProvider>
  );
}

export default App;
