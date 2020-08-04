import React from "react"
import { Heading, Flex } from "theme-ui"

function MainHeading(props) {
  return (
    <Flex
      sx={{
        bg: "primaryOpaque",
        minWidth: "80%",
        justifyContent: "center",
        alignItems: "center",
        margin: ["100px 0 25px 0", null, "150px 0 50px 0", "200px 0 100px 0"],
      }}
    >
      <Flex
        sx={{
          // padding: "10%",
          bg: "secondaryOpaque",
          transform: "skew(-10deg, -5deg)",
          minWidth: "100%",
          justifyContent: "center",
          alignItems: "center",
          // paddingY: ["5%"],
        }}
      >
        <Flex
          sx={{
            // padding: "10%",
            bg: "rgba(97, 62, 142, .75)",
            transform: "skew(20deg, 10deg)",
            minWidth: "100%",
            justifyContent: "center",
            alignItems: "center",
            // paddingY: ["5%"],
          }}
        >
          <Heading as="h1" variant="mainHeading" title={props.children}>
            {props.children}&nbsp;&nbsp;
          </Heading>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default MainHeading
