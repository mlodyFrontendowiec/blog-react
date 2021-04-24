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
          <input value={comment} onChange={handleInputComment} />
        </label>
        <button type="submit">Dodaj</button>
      </StyledForm>
    </StyledListItem>
  );
};

const StyledHeader = styled.h1`
  color: #0360eb;
  font-size: 25px;
  text-shadow: 1px 1px 2px gray;
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

export default ListItem;
