import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import BlogForm from "./subcomponents/BlogAdminForm";
import BlogListItemAdmin from "./subcomponents/BlogListItemAdmin";

const BlogAdminPanel = () => {
  const blog = useSelector((state) => state.blog);

  const blogListComponent = blog.map((content, index) => (
    <BlogListItemAdmin {...content} key={index} />
  ));
  return (
    <StyledListContainer>
      <BlogForm />
      {blogListComponent}
    </StyledListContainer>
  );
};

const StyledListContainer = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 0 auto;
`;

export default BlogAdminPanel;
