import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";
import Aside from "../../components/Aside/Aside";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  let { type } = useParams();
  const history = useHistory();

  const { isUserLogged } = useSelector((state) => state.login);

  useEffect(() => {
    if (!isUserLogged) {
      history.push("/blog");
    }
  }, [isUserLogged]);

  return (
    <>
      <StyledAdminPanel>
        <StyledHeader>Admin Panel</StyledHeader>
        <StyledLink to="/blog">Go to site</StyledLink>
      </StyledAdminPanel>
      <Aside />
      <StyledButtonAdd>Add new content in {type}</StyledButtonAdd>
    </>
  );
};

const StyledAdminPanel = styled.header`
  width: 100%;
  height: 60px;
  background-color: #0360eb;
  color: white;
  display: flex;
  font-size: 10px;
  justify-content: space-between;
  align-items: center;
`;

const StyledButtonAdd = styled.button`
  position: absolute;
  left: 50%;
  top: 16%;
  transform: translateX(-50%);
  border: 2px solid #0360eb;
  padding: 5px 10px;
  background-color: white;
  color: #0360eb;
  cursor: pointer;
  outline: none;
  :hover {
    color: white;
    background-color: #0360eb;
  }
`;

const StyledHeader = styled.header`
  margin-left: 20px;
  font-size: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 16px;
  margin-right: 20px;
`;

export default AdminPanel;
