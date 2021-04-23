import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ForumForm from "../../components/ForumForm/forumForm";
import Header from "../../components/Header/Header";
const Forum = () => {
  const { isUserLogged } = useSelector((state) => state.login);

  const FormComponent = isUserLogged ? (
    <ForumForm />
  ) : (
    <StyledParagraph>
      You must be logged in to add posts and see the posts
    </StyledParagraph>
  );

  return (
    <>
      <Header />
      {FormComponent}
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
