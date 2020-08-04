/** @jsx jsx */
// import React from "react";
import { jsx, Container } from "theme-ui";
import CardContainer from "src/components/projectCard/CardContainer";
import MainHeading from "../components/MainHeading";
import Footer from "../components/footer/Footer";

function projects() {
  return (
    <Container
      id="projectsContainer"
      sx={{
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <MainHeading>Some Projects.</MainHeading>
      <CardContainer />
      <Footer />
    </Container>
  );
}

export default projects;
