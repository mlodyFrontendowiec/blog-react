import React, { useState } from "react";
import styled from "styled-components";
import { addContent } from "../../../../actions/blogAction";
import { useDispatch } from "react-redux";

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const dispatch = useDispatch();

  const handleInputTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleInputContent = (e) => {
    setContent(e.target.value);
  };
  const handleInputImage = (e) => {
    setImageUrl(e.target.value);
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (title.length === 0 && content.length === 0) return;
    dispatch(addContent({ title, content, imageUrl }));
    setTitle("");
    setContent("");
    setImageUrl("");
  };

  return (
    <StyledFormContainer>
      <StyledHeaderForm>Add new post</StyledHeaderForm>
      <StyledForm onSubmit={handleSubmitForm}>
        <StyledLabel>
          Title:
          <StyledInput type="text" onChange={handleInputTitle} value={title} />
        </StyledLabel>
        <StyledLabel style={{ display: "flex" }}>
          Content:
          <StyledTextarea
            cols="26.5"
            rows="7"
            type="password"
            onChange={handleInputContent}
            value={content}
          />
        </StyledLabel>
        <StyledLabel>
          Image url:
          <StyledInput
            type="text"
            onChange={handleInputImage}
            value={imageUrl}
          />
        </StyledLabel>
        <StyledButton>Add to blog</StyledButton>
      </StyledForm>
    </StyledFormContainer>
  );
};

const StyledFormContainer = styled.div`
  width: 380px;
  height: 380px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  border: 2px solid #0360eb;
  border-radius: 15px;
  box-shadow: 0px 8px 10px 5px rgba(0, 0, 255, 0.1);
`;
const StyledLabel = styled.label``;

const StyledHeaderForm = styled.h2`
  color: white;
  margin-bottom: 20px;
  color: #0360eb;
  margin-top: 10px;
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
  padding: 3px 6px;
  margin-left: 3px;
  border: 1px solid #0360eb;
  border-radius: 10px;
  box-shadow: 0px 8px 10px 5px rgba(0, 0, 255, 0.1);
`;
const StyledTextarea = styled.textarea`
  padding: 3px 6px;
  font-size: 16px;
  color: #0360eb;
  margin-bottom: 20px;
  resize: none;
  outline: none;
  margin-left: 3px;
  border: 1px solid #0360eb;
  border-radius: 10px;
  box-shadow: 0px 8px 10px 5px rgba(0, 0, 255, 0.1);
`;

const StyledButton = styled.button`
  font-size: 14px;
  color: #0360eb;
  border: 2px solid #0360eb;
  padding: 4px 8px;
  cursor: pointer;
  margin-top: 20px;
  background-color: white;
  box-shadow: 0px 8px 10px 5px rgba(0, 0, 255, 0.1);
  text-shadow: 1px 1px 2px gray;
  border-radius: 10px;
  :hover {
    transition: 0.3s;
    color: white;
    background-color: #0360eb;
  }
`;

export default BlogForm;
