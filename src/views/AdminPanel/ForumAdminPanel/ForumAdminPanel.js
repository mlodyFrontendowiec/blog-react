import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { removeComment } from "../../../actions/forumAction";
import ListItemAdmin from "./subcomponents/ListItemAdmin";

const ForumAdminPanel = () => {
  const forum = useSelector((state) => state.forum);

  const dispatch = useDispatch();

  const postListComponent = forum.map((item, index) => (
    <ListItemAdmin {...item} key={index} />
  ));

  const handleRemoveComment = () => {
    dispatch(removeComment());
  };
  return (
    <StyledListContainer>
      <StyledButtonRemove onClick={handleRemoveComment}>
        Remove all comments
      </StyledButtonRemove>
      {postListComponent}
    </StyledListContainer>
  );
};

const StyledListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const StyledButtonRemove = styled.button`
  border: 2px solid #0360eb;
  margin-top: 20px;
  margin-left: 20px;
  padding: 5px 10px;
  background-color: white;
  color: #0360eb;
  cursor: pointer;
  outline: none;
  box-shadow: 0px 8px 10px 5px rgba(0, 0, 255, 0.1);
  border-radius: 15px;
  width: 140px;

  :hover {
    transition: 0.2s;
    color: white;
    background-color: #0360eb;
  }
`;

export default ForumAdminPanel;
