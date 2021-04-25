import React from "react";
import styled from "styled-components";

const CommentItem = ({ comment, date }) => {
  const commentDate = new Date(date);
  return (
    <StyledCommentItem>
      <p>{comment}</p>
      <StyledParagraphComent>{comment}</StyledParagraphComent>
      {/* <p>{commentDate.toDateString("DD/MM")}</p> */}
    </StyledCommentItem>
  );
};

export default CommentItem;

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
