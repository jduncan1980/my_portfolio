import React from "react"
import { Flex, Text } from "theme-ui"

export default function AboutCard({ item, index }) {
  return (
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
          transform: index % 2 === 0 ? "rotate(-5deg)" : "rotate(5deg)",
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
  )
}
