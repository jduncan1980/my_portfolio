import React from "react";
import { Container, Text, Flex, Image } from "theme-ui";
import Footer from "src/components/footer/Footer";
import MainHeading from "../components/MainHeading";
import data from "../data/aboutData";
import image1 from "../images/jason1.jpg";
import image2 from "../images/jason2.jpg";
import image3 from "../images/jason3.jpg";

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
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "center",
          width: ["70%", null, null, "90%"],
        }}
      >
        {data.map((item, index) => {
          return (
            <React.Fragment key={`${item}-${index}`}>
              {index === 0 && <Image src={image1} variant="aboutImg" />}

              {index === 3 && <Image src={image2} variant="aboutImg" />}

              {index === 5 && <Image src={image3} variant="aboutImg" />}
              <Flex
                sx={{
                  justifyContent: index % 2 === 0 ? "flex-end" : "flex-start",
                  marginY: ["70px"],
                  padding: "25px 10px",
                  bg: index % 2 === 0 ? "primaryOpaque" : "secondaryOpaque",
                  transform: index % 2 === 0 ? "rotate(5deg)" : "rotate(-5deg)",
                  width: ["100%", "90%", "70%"],
                  alignSelf: index % 2 === 0 ? "flex-end" : "flex-start",
                  border: "2px solid black",
                }}
              >
                <Flex
                  sx={{
                    justifyContent: "center",
                    padding: "25px 10px",
                    bg: index % 2 === 0 ? "secondary" : "primary",
                    transform:
                      index % 2 === 0 ? "rotate(-5deg)" : "rotate(5deg)",
                    border: "2px solid black",
                    boxShadow: "10px 10px 48px 0px rgba(0,0,0,0.5)",
                  }}
                >
                  <Text
                    as="p"
                    sx={{
                      fontSize: [1, 2, 3],
                      width: ["95%", null, "90%"],
                      textAlign: "justify",
                      color: "white",
                      margin: "5%",
                    }}
                  >
                    {item}
                  </Text>
                </Flex>
              </Flex>
            </React.Fragment>
          );
        })}
      </Flex>
      <Footer />
    </Container>
  );
}

export default about;
