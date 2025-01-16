import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: ${({ theme }) => theme.bg_secondary};
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  margin: 0 10px;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Header = () => {
  return (
    <Navbar>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/tutorials">Tutorials</NavLink>
    </Navbar>
  );
};

export default Header;
