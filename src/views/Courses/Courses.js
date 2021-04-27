import React from "react";
import Header from "../../components/Header/Header";
import { useSelector } from "react-redux";

import CourseItem from "../AdminPanel/CoursesAdminPanel/subcomponents/CourseListItemAdmin";

const Courses = () => {
  const courses = useSelector((state) => state.course);
  const courseListComponent = courses.map((content, index) => (
    <CourseItem {...content} key={index} admin={false} />
  ));

  return (
    <>
      <Header />
      {courseListComponent}
    </>
  );
};

export default Courses;
