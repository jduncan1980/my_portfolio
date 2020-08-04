import React from "react";
import { Container } from "theme-ui";
import MainHeading from "../components/MainHeading";
import ContactForm from "../components/ContactForm";
import Footer from "../components/footer/Footer";

function contact() {
  return (
    <Container
      sx={{
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <MainHeading>Get In Touch.</MainHeading>
      <ContactForm />
      <Footer />
    </Container>
  );
}

export default contact;
