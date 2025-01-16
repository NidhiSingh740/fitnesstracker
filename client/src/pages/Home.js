import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.primary};
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
`;

const NavButton = styled(Link)`
  text-decoration: none;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primary_hover};
  }
`;

const Home = () => {
  return (
    <Container>
      <Title>Welcome to FitTrack</Title>
      <Subtitle>Your ultimate fitness tracker to achieve your goals</Subtitle>
      <ButtonGroup>
        <NavButton to="/dashboard">Go to Dashboard</NavButton>
        <NavButton to="/workouts">Explore Workouts</NavButton>
        <NavButton to="/tutorials">View Tutorials</NavButton>
      </ButtonGroup>
    </Container>
  );
};

export default Home;
