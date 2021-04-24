import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ForumForm from "../../components/ForumForm/forumForm";
import Header from "../../components/Header/Header";
import ListItem from "./subcomponents/ListItem";
const Forum = () => {
  const { isUserLogged } = useSelector((state) => state.login);

  const forum = useSelector((state) => state.forum);

  const FormComponent = isUserLogged ? (
    <ForumForm />
  ) : (
    <StyledParagraph>
      You must be logged in to add posts and see the posts
    </StyledParagraph>
  );

  const postListComponent = forum.map((item) => <ListItem {...item} />);

  return (
    <>
      <Header />
      {FormComponent}
      <ul>{postListComponent}</ul>
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
