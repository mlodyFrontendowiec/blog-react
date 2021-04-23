import React from "react";
import styled from "styled-components";

const AdminPanel = () => {
  return (
    <StyledAdminPanel>
      <h1>Admin Panel</h1>
    </StyledAdminPanel>
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

export default AdminPanel;
