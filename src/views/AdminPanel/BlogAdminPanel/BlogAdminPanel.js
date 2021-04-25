import React from "react";
import styled from "styled-components";
import BlogForm from "./subcomponents/BlogAdminForm";

const BlogAdminPanel = () => {
  return (
    <StyledListContainer>
      <BlogForm />
    </StyledListContainer>
  );
};

const StyledListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export default BlogAdminPanel;
