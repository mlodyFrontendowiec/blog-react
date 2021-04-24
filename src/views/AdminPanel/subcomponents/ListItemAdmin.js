import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deletePost } from "../../../actions/forumAction";

const ListItemAdmin = ({ title, content, id }) => {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(deletePost({ id }));
    console.log("ok");
  };

  return (
    <StyledListItem>
      <StyledHeader>{title}</StyledHeader>
      <p>{content}</p>
      <StyledForm>
        <StyledButtonAdd type="button" onClick={handleButtonClick}>
          Remove Post
        </StyledButtonAdd>
      </StyledForm>
    </StyledListItem>
  );
};

const StyledHeader = styled.h1`
  color: #0360eb;
`;

const StyledButtonAdd = styled.button`
  margin-top: -20px;
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
const StyledListItem = styled.li`
  width: 60%;
  height: 120px;
  border: 2px solid #0360eb;
  margin: 0 auto;
  margin-bottom: 20px;
  text-align: center;
  list-style: none;
  margin-top: 10px;
`;

const StyledForm = styled.form`
  margin-top: 20px;
`;

export default ListItemAdmin;
