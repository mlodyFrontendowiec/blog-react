import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ForumForm from "./subcomponents/ForumForm/forumForm.js";
import Header from "../../components/Header/Header";
import ListItem from "./subcomponents/ListItem/ListItem";
const Forum = () => {
  const { isUserLogged } = useSelector((state) => state.login);

  const forum = useSelector((state) => state.forum);
  const postListComponent = forum.map((item) => (
    <ListItem {...item} postId={item.id} key={item.id} />
  ));

  const ForumView = isUserLogged ? (
    <>
      <ForumForm />
      <ul>{postListComponent}</ul>
    </>
  ) : (
    <StyledParagraph>
      You must be logged in to add posts and see the posts
    </StyledParagraph>
  );

  return (
    <>
      <Header />
      {ForumView}
    </>
  );
};

const StyledParagraph = styled.p`
  font-size: 20px;
  color: #0360eb;
  text-align: center;
  margin-top: 20px;
`;

export default Forum;
