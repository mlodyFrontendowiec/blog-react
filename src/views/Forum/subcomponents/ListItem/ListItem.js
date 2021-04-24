import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addComment } from "../../../../actions/forumAction";

const ListItem = ({ title, content, postId, id }) => {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const handleInputComment = (e) => {
    setComment(e.target.value);
  };
  const handleButtonAddComment = (e) => {
    e.preventDefault();
    dispatch(addComment({ comment, postId, id }));
    setComment("");
  };
  return (
    <StyledListItem>
      <StyledHeader>{title}</StyledHeader>
      <p>{content}</p>
      <StyledForm onSubmit={handleButtonAddComment}>
        <label>
          Dodaj komentarz:
          <StyledInput value={comment} onChange={handleInputComment} />
        </label>
        <StyledButton type="submit">Dodaj</StyledButton>
      </StyledForm>
    </StyledListItem>
  );
};

const StyledHeader = styled.h1`
  color: #0360eb;
  font-size: 25px;
`;

const StyledInput = styled.input`
  font-size: 15px;
  color: #0360eb;
  margin-bottom: 20px;
  outline: none;
  padding: 3px 6px;
  margin-left: 3px;
  border: 1px solid #0360eb;
  border-radius: 10px;
  box-shadow: 0px 8px 10px 5px rgba(0, 0, 255, 0.1);
`;

const StyledListItem = styled.li`
  width: 70%;
  height: 150px;
  border: 2px solid #0360eb;
  margin: 0 auto;
  margin-bottom: 20px;
  text-align: center;
  list-style: none;
  box-shadow: 0px 8px 10px 5px rgba(0, 0, 255, 0.1);
  border-radius: 15px;
  padding: 10px;
`;

const StyledForm = styled.form`
  margin-top: 50px;
`;
const StyledButton = styled.button`
  font-size: 14px;
  color: #0360eb;
  border: 2px solid #0360eb;
  padding: 4px 8px;
  cursor: pointer;
  margin-left: 10px;
  background-color: white;
  box-shadow: 0px 8px 10px 5px rgba(0, 0, 255, 0.1);
  text-shadow: 1px 1px 2px gray;
  border-radius: 10px;
  :hover {
    transition: 0.3s;
    color: white;
    background-color: #0360eb;
  }
`;

export default ListItem;
