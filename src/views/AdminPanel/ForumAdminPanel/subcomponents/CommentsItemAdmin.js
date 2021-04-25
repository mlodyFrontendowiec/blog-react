import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { removeComment } from "../../../../actions/forumAction";

const CommentItemAdmin = ({ comment, date, id, postId }) => {
  const commentDate = new Date(date);

  return (
    <StyledCommentItem>
      <StyledParagraphComent>{comment}</StyledParagraphComent>
      <p>{commentDate.toDateString()}</p>
    </StyledCommentItem>
  );
};

export default CommentItemAdmin;

const StyledCommentItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  border: 2px solid #0360eb;
  border-radius: 10px;
  margin-top: 10px;
  font-size: 15px;
  padding: 5px 10px;
`;
const StyledParagraphComent = styled.p`
  display: block;
  height: auto;
  width: 50%;
`;

const StyledButton = styled.button`
  border: 2px solid #0360eb;
  padding: 2px 6px;
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
