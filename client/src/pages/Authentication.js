import React, { useState } from "react";
import styled from "styled-components";
import fit from "../utils/Images/fit.jpg"; // Ensure the image path is correct
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const Container = styled.div`
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  height: 100vh; /* Make the container fill the entire viewport */
  background-image: url(${fit}); /* Set the background image */
  background-size: cover; /* Ensure the image covers the entire container */
  background-position: center; /* Center the image */
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  gap: 16px;
  background: ${({ theme }) => theme.cardBackground || "#fff"};
  border-radius: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  margin-left: 90px; /* Adjust this value to shift the form to the right */
`;

const Text = styled.div`
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 16px;
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

const TextButton = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
`;

const Authentication = ({ setcurrentuser }) => {
  const [login, setLogin] = useState(false);
  return (
    <Container>
      <Right>
        {!login ? (
          <>
            <SignIn setcurrentuser={setcurrentuser} />
            <Text>
              Don't have an account?{" "}
              <TextButton onClick={() => setLogin(true)}>SignUp</TextButton>
            </Text>
          </>
        ) : (
          <>
            <SignUp />
            <Text>
              Already have an account?{" "}
              <TextButton onClick={() => setLogin(false)}>SignIn</TextButton>
            </Text>
          </>
        )}
      </Right>
    </Container>
  );
};

export default Authentication;
