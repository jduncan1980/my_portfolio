import React from "react";
import SEO from "src/components/seo";
import { Text, Container } from "theme-ui";
import MainHeading from "../components/MainHeading";
import Footer from "../components/footer/Footer";
import { Link } from "gatsby";

const NotFoundPage = () => (
  <Container
    sx={{
      alignItems: "center",
    }}
  >
    <SEO title="404: Not found" />
    <MainHeading>404- Not Found</MainHeading>
    <Text as="p" sx={{ fontSize: [3, 4], textAlign: "center" }}>
      Sorry, couldn't find that
    </Text>
    <Link to="/">
      <Text sx={{ fontSize: [2, 3] }}>Go Home</Text>
    </Link>
    <Footer />
  </Container>
);

export default NotFoundPage;
