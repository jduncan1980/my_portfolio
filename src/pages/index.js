import React from "react";
import { Container, Heading, Text, Flex } from "theme-ui";
import SEO from "src/components/seo";
import MainHeading from "src/components/MainHeading";
import { FaReact, FaJs, FaHtml5, FaCss3 } from "react-icons/fa";
import { IconContext } from "react-icons";
import Footer from "../components/footer/Footer";

const IndexPage = () => (
  <Container
    sx={{
      alignItems: "center",
    }}
  >
    <SEO title="Home" />
    <MainHeading>You Are Here.</MainHeading>

    <Heading
      as="h2"
      sx={{
        fontSize: [2, 3, 4],
        textAlign: "center",
        marginY: ["3%"],
        padding: ".5rem",
        // marginBottom: "100px",
      }}
    >
      Hi. I'm Jason, and I build things.
    </Heading>

    <Flex
      sx={{
        justifyContent: ["center", "space-between"],
        alignItems: "center",
        flexWrap: "wrap",
        fontSize: [3, 4],
      }}
    >
      <IconContext.Provider
        value={{
          style: {
            margin: "0 15px 0 15px",
          },
        }}
      >
        <FaReact />
        <FaHtml5 />
        <FaCss3 />
        <FaJs />
      </IconContext.Provider>
    </Flex>
    <Text
      sx={{ fontSize: [1, 2, 3], textAlign: "center", padding: ["2rem 1rem"] }}
    >
      This is my little corner of the internet, where I can show off my work. I
      am a fairly new to development, having about 2 years of experience, and am
      currently on month 6 of boot-camp. I am passionate about designing
      beautiful and functional web pages.
    </Text>

    <Footer />
  </Container>
);

export default IndexPage;
