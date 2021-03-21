import React from "react";
import { Container, Heading, Text, Flex, Image } from "theme-ui";
import SEO from "src/components/seo";
import Footer from "../components/footer/Footer";
import avatar from "src/images/avatar.png";
import TechIcons from "../components/icons/TechIcons";
import WorkLink from "../components/WorkLink";

const IndexPage = () => (
  <Container
    sx={{
      alignItems: "center",
    }}
  >
    <SEO title="Home" />

    <Flex
      sx={{
        marginTop: ["60px", "100px"],
        alignItems: "center",
        flexDirection: ["column-reverse", null, null, "row"],
      }}
    >
      <Image src={avatar} sx={{ minHeight: "300px" }} alt="Developer Avatar" />

      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Heading as="h2" variant="indexHeading">
          Hi. I'm Jason, and I build things.
        </Heading>
        <TechIcons />
      </Flex>
    </Flex>

    <Text
      sx={{
        fontSize: [1, null, 2],
        textAlign: "center",
        padding: ["2rem 1rem"],
        marginTop: [0, "30px"],
        width: ["100%", null, "60%"],
      }}
    >
      This is my little corner of the internet, where I can show off my work. I
      am a fairly new to development, with 2 years of experience under my belt.
      I recently completed a full-stack bootcamp (Lambda School). I am excited
      about designing beautiful and functional web pages, writing clean code,
      and keeping up with the newest technologies.
    </Text>
    <WorkLink />
    <Footer />
  </Container>
);

export default IndexPage;
