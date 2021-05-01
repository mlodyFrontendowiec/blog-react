import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ChallengeForm from "./subcomponents/ChallengeAdminForm";
import ChallengeListItemAdmin from "./subcomponents/ChallengeListItemAdmin";

const ChallengesAdminPanel = () => {
  const challenges = useSelector((state) => state.challenge);
  console.log(challenges);

  const challengeListComponent = challenges.map((content, index) => (
    <ChallengeListItemAdmin {...content} key={index} />
  ));

  return (
    <StyledListContainer>
      <ChallengeForm />
      {challengeListComponent}
    </StyledListContainer>
  );
};

const StyledListContainer = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 0 auto;
`;

export default ChallengesAdminPanel;
