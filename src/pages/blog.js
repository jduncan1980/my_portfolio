import React from "react";
import { Container } from "theme-ui";
import MainHeading from "../components/MainHeading";
import Footer from "../components/footer/Footer";

function blog() {
  return (
    <Container
      sx={{
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <MainHeading>Blog.</MainHeading>
      <p>coming soon...</p>
      <Footer />
    </Container>
  );
}

export default blog;
