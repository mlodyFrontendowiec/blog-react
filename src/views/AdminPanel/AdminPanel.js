import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Aside from "../../components/Aside/Aside";

const AdminPanel = () => {
  let { type } = useParams();

  return (
    <>
      <StyledAdminPanel>
        <h1>Admin Panel</h1>
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
  justify-content: center;
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

export default AdminPanel;
