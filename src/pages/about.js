import React from "react";
import { Container } from "theme-ui";
import Footer from "src/components/footer/Footer";
import MainHeading from "../components/MainHeading";
import data from "../data/aboutData";
import AboutCardContainer from "../components/AboutCardContainer/AboutCardContainer";

function about() {
  return (
    <Container
      sx={{
        alignItems: "center",
        flexDirection: "column",
        paddingBottom: ["200px", null, "200px"],
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
