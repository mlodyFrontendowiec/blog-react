import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo>Blog</StyledLogo>
      <StyledNavigation>
        <StyledListContainer>
          <StyledLinkContainer>
            <StyledListLink to="/blog">Blog</StyledListLink>
          </StyledLinkContainer>
          <StyledLinkContainer>
            <StyledListLink to="/forum">Forum</StyledListLink>
          </StyledLinkContainer>
          <StyledLinkContainer>
            <StyledListLink to="/courses">Courses</StyledListLink>
          </StyledLinkContainer>
          <StyledLinkContainer>
            <StyledListLink to="/challenges">Challenges</StyledListLink>
          </StyledLinkContainer>
          <StyledLinkContainer>
            <StyledListLink to="/sign-in">Sign In</StyledListLink>
          </StyledLinkContainer>
        </StyledListContainer>
      </StyledNavigation>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  height: 60px;
  background-color: #0360eb;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StyledLogo = styled.h1`
  font-size: 30px;
  font-family: "Roboto", sans-serif;
  color: white;
  margin-left: 20px;
`;

const StyledNavigation = styled.nav`
  width: 40%;
  margin-right: 40px;
  @media (max-width: 1400px) {
    width: 50%;
  }
`;
const StyledListContainer = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLinkContainer = styled.li`
  width: 25%;
  text-align: center;
`;

const StyledListLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  :hover {
    color: gray;
    transition: 0.1s;
  }
`;
export default Header;
