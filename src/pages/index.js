import React from "react";
import { Container, Heading, Text, Flex } from "theme-ui";
import SEO from "src/components/seo";
import MainHeading from "src/components/MainHeading";
import { FaReact, FaJs, FaHtml5, FaCss3 } from "react-icons/fa";
import { IconContext } from "react-icons";
import Footer from "../components/footer/Footer";

const IndexPage = () => (
  <Flex
    sx={{
      flexDirection: "column",
      alignItems: "space-between",
      position: "relative",
    }}
  >
    <SEO title="Home" />

    <Container
      sx={{
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <MainHeading>You Are Here.</MainHeading>
      <Heading as="h2" sx={{ fontSize: [3, 4, 5, 6], textAlign: "center" }}>
        Hi. I'm Jason, and I build things.
      </Heading>
      <Text as="p"></Text>
      <Flex
        sx={{
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginBottom: "200px",
        }}
      >
        <IconContext.Provider
          value={{
            style: {
              width: "100px",
              height: "auto",
              margin: "10px",
            },
          }}
        >
          <FaReact />
          <FaHtml5 />
          <FaCss3 />
          <FaJs />
        </IconContext.Provider>
      </Flex>
    </Container>
    <Footer />
  </Flex>
);

export default IndexPage;
