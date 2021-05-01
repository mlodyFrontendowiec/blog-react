import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import ChallengeListItem from "./subcomponents/ChallengeItem";

const Challenges = () => {
  const challenges = useSelector((state) => state.challenge);

  const courseListComponent = challenges.map((content, index) => (
    <ChallengeListItem {...content} key={index} admin={false} />
  ));
  return (
    <>
      <Header />
      {courseListComponent.length !== 0 ? (
        courseListComponent
      ) : (
        <StyledParagraph>there are no challenges now</StyledParagraph>
      )}
    </>
  );
};

const StyledParagraph = styled.p`
  font-size: 20px;
  text-align: center;
  margin-top: 10px;
`;
export default Challenges;
