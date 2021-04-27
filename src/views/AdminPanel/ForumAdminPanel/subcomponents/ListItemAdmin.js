import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deletePost } from "../../../../actions/forumAction";
import CommentsAdmin from "./CommentsAdmin";

const ListItemAdmin = ({ title, content, id }) => {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(deletePost({ id }));
  };

  return (
    <StyledListItem>
      <StyledHeader>{title}</StyledHeader>
      <p>{content}</p>
      <CommentsAdmin postId={id} />
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
  font-size: 25px;
`;

const StyledButtonAdd = styled.button`
  margin-top: -20px;
  border: 2px solid #0360eb;
  padding: 5px 10px;
  background-color: white;
  color: #0360eb;
  cursor: pointer;
  outline: none;
  box-shadow: 0px 8px 10px 5px rgba(0, 0, 255, 0.1);
  border-radius: 15px;

  :hover {
    transition: 0.2s;
    color: white;
    background-color: #0360eb;
  }
`;
const StyledListItem = styled.li`
  width: 60%;
  border: 2px solid #0360eb;
  margin: 0 auto;
  margin-bottom: 20px;
  text-align: center;
  list-style: none;
  margin-top: 10px;
  box-shadow: 0px 8px 10px 5px rgba(0, 0, 255, 0.1);
  border-radius: 15px;
  padding: 10px;
`;

const StyledForm = styled.form`
  margin-top: 20px;
`;

export default ListItemAdmin;
