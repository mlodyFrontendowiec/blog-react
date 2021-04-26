import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import BlogForm from "./subcomponents/BlogAdminForm";
import BlogListItemAdmin from "./subcomponents/BlogListItemAdmin";

const BlogAdminPanel = () => {
  const blog = useSelector((state) => state.blog);

  const dispatch = useDispatch();

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
  flex-direction: column;
  margin: 0 auto;
`;

export default BlogAdminPanel;
