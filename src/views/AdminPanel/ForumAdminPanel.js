import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ListItemAdmin from "./subcomponents/ListItemAdmin";

const ForumAdminPanel = () => {
  const forum = useSelector((state) => state.forum);
  const postListComponent = forum.map((item) => (
    <ListItemAdmin key={item.id} {...item} />
  ));
  return <StyledListContainer>{postListComponent}</StyledListContainer>;
};

const StyledListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default ForumAdminPanel;
