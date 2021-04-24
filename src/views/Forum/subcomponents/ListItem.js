import React from "react";
import styled from "styled-components";

const ListItem = ({ title, content }) => {
  return (
    <StyledListItem>
      <StyledHeader>{title}</StyledHeader>
      <p>{content}</p>
      <StyledForm>
        <label>
          Dodaj komentarz: <input />
        </label>
        <button type="submit">Dodaj</button>
      </StyledForm>
    </StyledListItem>
  );
};

const StyledHeader = styled.h1`
  color: #0360eb;
`;

const StyledListItem = styled.li`
  width: 70%;
  height: 150px;
  border: 2px solid #0360eb;
  margin: 0 auto;
  margin-bottom: 20px;
  text-align: center;
  list-style: none;
`;

const StyledForm = styled.form`
  margin-top: 50px;
`;

export default ListItem;
