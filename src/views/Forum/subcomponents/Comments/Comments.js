import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CommentItem from "./CommentItem";

const Comments = ({ postId }) => {
  const forum = useSelector((state) => state.forum);
  console.log(forum);
  let commentItemsComponent = [];
  forum.forEach((element) => {
    if (element.id === postId) {
      commentItemsComponent = element.comments.map((item, index) => (
        <CommentItem {...item} key={index} />
      ));
    }
  });

  return <StyledCommentsWrapper>{commentItemsComponent}</StyledCommentsWrapper>;
};

const StyledCommentsWrapper = styled.ul`
  width: 70%;
  margin: 0 auto;
  border: 2px solid #0360eb;
  padding: 10px;
  margin-top: 10px;
  border-radius: 15px;
`;

export default Comments;
