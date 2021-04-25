import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Aside = () => {
  return (
    <StyledAside>
      <StyledAsideLink to="/admin/blog">Blog</StyledAsideLink>
      <StyledAsideLink to="/admin/forum">Forum</StyledAsideLink>
      <StyledAsideLink to="/admin/courses">Courses</StyledAsideLink>
      <StyledAsideLink to="/admin/challenges">Challenges</StyledAsideLink>
    </StyledAside>
  );
};
const StyledAside = styled.aside`
  width: 300px;
  height: 1000px;
  background-color: #0360eb;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledAsideLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin-top: 10px;
  font-size: 20px;
  :hover {
    color: gray;
  }
`;

export default Aside;
