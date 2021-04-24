import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addComment } from "../../../actions/forumAction";

const ListItem = ({ title, content, postId, id }) => {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const handleInputComment = (e) => {
    setComment(e.target.value);
  };
  const handleButtonAddComment = (e) => {
    e.preventDefault();
    dispatch(addComment({ comment, postId, id }));
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
