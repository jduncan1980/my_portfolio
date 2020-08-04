import React from "react"
import { Container, Heading, Text, Flex } from "theme-ui"
import SEO from "src/components/seo"
import MainHeading from "src/components/MainHeading"
import { FaReact, FaJs, FaHtml5, FaCss3 } from "react-icons/fa"
import { IconContext } from "react-icons"
import Footer from "../components/footer/Footer"

const IndexPage = () => (
  <Container
    sx={{
      alignItems: "center",
      flexDirection: "column",
      minHeight: "100vh",
    }}
  >
    <SEO title="Home" />
    <MainHeading>You Are Here.</MainHeading>
    <Heading
      as="h2"
      sx={{
        fontSize: [3, 4, 5, 6],
        textAlign: "center",
        marginBottom: "100px",
      }}
    >
      Hi. I'm Jason, and I build things.
    </Heading>
    {/* <Text as="p"></Text> */}
    <Flex
      sx={{
        justifyContent: ["center", "space-between"],
        alignItems: "center",
        flexWrap: "wrap",
        paddingBottom: ["200px", null, "250px", null, "300px"],
        fontSize: ["8em", null, null, "10em"],
      }}
    >
      <IconContext.Provider
        value={{
          style: {
            margin: "30px",
          },
        }}
      >
        <FaReact />
        <FaHtml5 />
        <FaCss3 />
        <FaJs />
      </IconContext.Provider>
    </Flex>
    <Footer />
  </Container>
)

export default IndexPage
