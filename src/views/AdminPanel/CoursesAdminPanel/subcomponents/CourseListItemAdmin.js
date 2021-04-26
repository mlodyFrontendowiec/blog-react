import React from "react";
import styled from "styled-components";

const CourseItem = ({ title, content, price, startDate, endDate }) => {
  return (
    <StyledContentContainer>
      <StyledListItem>
        <StyledHeader>{title}</StyledHeader>
        <StyledParagraph>{content}</StyledParagraph>
        <StyledPrice>Price:{price}$</StyledPrice>
        <StyledDateContainer>
          <StyledDate>Start Date: {startDate}</StyledDate>
          <StyledDate>End Date: {endDate}</StyledDate>
        </StyledDateContainer>
      </StyledListItem>
    </StyledContentContainer>
  );
};
const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const StyledParagraph = styled.p``;

const StyledPrice = styled.p`
  font-weight: bold;
  margin-top: 10px;
`;

const StyledDate = styled.p`
  font-weight: bold;
`;

const StyledDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const StyledListItem = styled.li`
  width: 80%;
  border: 2px solid #0360eb;
  margin: 0 auto;
  margin-bottom: 20px;
  text-align: center;
  list-style: none;
  margin-top: 10px;
  box-shadow: 0px 8px 10px 5px rgba(0, 0, 255, 0.1);
  border-radius: 15px;
  padding: 10px;
`;
const StyledHeader = styled.h1`
  color: #0360eb;
  font-size: 25px;
`;

export default CourseItem;
