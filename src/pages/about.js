import React from "react";
import { Container } from "theme-ui";
import Footer from "src/components/footer/Footer";
import MainHeading from "../components/MainHeading";
import data from "../data/aboutData";
import AboutCardContainer from "../components/AboutCard/AboutCardContainer";

function about() {
  return (
    <Container
      sx={{
        alignItems: "center",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <MainHeading>Me.</MainHeading>
      <AboutCardContainer data={data} />
      <Footer />
    </Container>
  );
}

export default about;
