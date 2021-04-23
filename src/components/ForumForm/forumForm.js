import React, { useState } from "react";
import styled from "styled-components";

const ForumForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleInputTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleInputContent = (e) => {
    setContent(e.target.value);
  };
  const handleSubmitForm = () => {};
  return (
    <StyledFormContainer>
      <StyledHeaderForm>Add new post</StyledHeaderForm>
      <StyledForm onSubmit={handleSubmitForm}>
        <label>
          Title:
          <StyledInput type="text" onChange={handleInputTitle} value={title} />
        </label>
        <label style={{ display: "flex" }}>
          Content:
          <StyledTextarea
            type="password"
            onChange={handleInputContent}
            value={content}
          />
        </label>
        <StyledButton>Add post</StyledButton>
      </StyledForm>
    </StyledFormContainer>
  );
};

const StyledFormContainer = styled.div`
  width: 350px;
  height: 350px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  border: 2px solid #0360eb;
`;

const StyledHeaderForm = styled.h2`
  color: white;
  margin-bottom: 20px;
  color: #0360eb;
`;

const StyledForm = styled.form`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 20px;
  color: #0360eb;
`;

const StyledInput = styled.input`
  font-size: 20px;
  color: #0360eb;
  margin-bottom: 20px;
  outline: none;
`;
const StyledTextarea = styled.textarea`
  font-size: 16px;
  color: #0360eb;
  margin-bottom: 20px;
  resize: none;
  outline: none;
  width: 205px;
  height: 150px;
`;

const StyledButton = styled.button`
  font-size: 14px;
  color: #0360eb;
  border: 2px solid #0360eb;
  padding: 4px 8px;
  cursor: pointer;
  margin-top: 20px;
  background-color: white;
  :hover {
    transition: 0.2s;
    color: white;
    background-color: #0360eb;
  }
`;

export default ForumForm;
