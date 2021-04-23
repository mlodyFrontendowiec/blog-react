import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { LogoutUser } from "../../actions/loginAction";

const Header = () => {
  const { isUserLogged } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const logOutUser = () => {
    dispatch(LogoutUser());
  };

  const loginComponent = isUserLogged ? (
    <StyledLinkContainer>
      <StyledListLinkLogOut onClick={logOutUser}>Log out</StyledListLinkLogOut>
    </StyledLinkContainer>
  ) : (
    <StyledLinkContainer>
      <StyledListLink
        to={{ pathname: "/login" }}
        activeStyle={{ color: "grey" }}
      >
        Log in
      </StyledListLink>
    </StyledLinkContainer>
  );

  return (
    <StyledHeader>
      <StyledLogo>Blog</StyledLogo>
      <StyledNavigation>
        <StyledListContainer>
          <StyledLinkContainer>
            <StyledListLink
              to={{ pathname: "/blog" }}
              activeStyle={{ color: "grey" }}
            >
              Blog
            </StyledListLink>
          </StyledLinkContainer>
          <StyledLinkContainer>
            <StyledListLink
              to={{ pathname: "/forum" }}
              activeStyle={{ color: "grey" }}
            >
              Forum
            </StyledListLink>
          </StyledLinkContainer>
          <StyledLinkContainer>
            <StyledListLink
              to={{ pathname: "/courses" }}
              activeStyle={{ color: "grey" }}
            >
              Courses
            </StyledListLink>
          </StyledLinkContainer>
          <StyledLinkContainer>
            <StyledListLink
              to={{ pathname: "/challenges" }}
              activeStyle={{ color: "grey" }}
            >
              Challenges
            </StyledListLink>
          </StyledLinkContainer>
          {loginComponent}
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
const StyledListLinkLogOut = styled.button`
  text-decoration: none;
  color: white;
  cursor: pointer;
  border: none;
  background: none;
  font-size: 16px;
  outline: none;
  :hover {
    color: gray;
    transition: 0.1s;
  }
`;
export default Header;
