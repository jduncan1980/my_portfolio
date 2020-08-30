import React from "react";
import { Container } from "theme-ui";
import MainHeading from "../components/MainHeading";
import ContactForm from "../components/contactForm/ContactForm";
import Footer from "../components/footer/Footer";
import SEO from "src/components/seo";

function contact() {
  return (
    <Container
      sx={{
        alignItems: "center",
        flexDirection: "column",
        overflow: "visible",
      }}
    >
      <SEO title="Contact Me" />
      <MainHeading>Get In Touch.</MainHeading>
      <ContactForm />
      <Footer />
    </Container>
  );
}

export default contact;
