import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CourseItem from "./subcomponents/CourseListItemAdmin";
import CoursesForm from "./subcomponents/CoursesAdminForm";

const CoursesAdminPanel = () => {
  const courses = useSelector((state) => state.course);

  const courseListComponent = courses.map((content, index) => (
    <CourseItem {...content} key={index} />
  ));

  return (
    <StyledListContainer>
      <CoursesForm />
      {courseListComponent}
    </StyledListContainer>
  );
};
const StyledListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export default CoursesAdminPanel;
