/** @jsx jsx */
// import React from "react";
import { jsx, Container } from "theme-ui";
import ProjectCardContainer from "src/components/projectCard/ProjectCardContainer";
import MainHeading from "../components/MainHeading";
import Footer from "../components/footer/Footer";

function projects() {
  return (
    <Container
      id="projectsContainer"
      sx={{
        alignItems: "center",
      }}
    >
      <MainHeading>Some Projects.</MainHeading>
      <ProjectCardContainer />
      <Footer />
    </Container>
  );
}

export default projects;
