import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import BlogListItem from "./subcomponents/BlogItem";

const Blog = () => {
  const blog = useSelector((state) => state.blog);
  const postListComponent = blog.map((item) => (
    <BlogListItem {...item} postId={item.id} key={item.id} />
  ));

  return (
    <>
      <Header />
      <StyledListContainer>{postListComponent}</StyledListContainer>
    </>
  );
};

const StyledListContainer = styled.ul`
  margin-top: 20px;
`;

export default Blog;
