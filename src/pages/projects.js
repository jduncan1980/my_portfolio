/** @jsx jsx */
// import React from "react";
import { jsx, Container } from "theme-ui";
import ProjectCardContainer from "src/components/projectCard/ProjectCardContainer";
import MainHeading from "src/components/MainHeading";
import Footer from "src/components/footer/Footer";
import SEO from "src/components/seo";

function projects() {
  return (
    <Container
      id="projectsContainer"
      sx={{
        alignItems: "center",
      }}
    >
      <SEO title="Portfolio Projects" />
      <MainHeading>Projects.</MainHeading>
      <ProjectCardContainer />
      <Footer />
    </Container>
  );
}

export default projects;
