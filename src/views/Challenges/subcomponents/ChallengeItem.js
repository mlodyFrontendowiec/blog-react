import styled from "styled-components";

const ChallengeListItem = ({ title, content, imageUrl }) => {
  return (
    <StyledListItem>
      <StyledHeader>{title}</StyledHeader>
      <StyledParagraph>{content}</StyledParagraph>
    </StyledListItem>
  );
};

const StyledHeader = styled.h1`
  color: #0360eb;
  font-size: 25px;
  margin-bottom: 20px;
`;

const StyledParagraph = styled.p`
  margin-top: 20px;
`;

const StyledListItem = styled.li`
  width: 70%;
  border: 2px solid #0360eb;
  margin: 0 auto;
  margin-bottom: 20px;
  text-align: center;
  list-style: none;
  box-shadow: 0px 8px 10px 5px rgba(0, 0, 255, 0.1);
  border-radius: 15px;
  padding: 10px;
  margin-top: 20px;
`;

export default ChallengeListItem;
