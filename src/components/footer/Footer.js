/** @jsx jsx */
// import React from "react";
import { jsx, Flex, Text, Link } from "theme-ui"
import { FaTwitter, FaGithub, FaLinkedin, FaBandcamp } from "react-icons/fa"
import { IconContext } from "react-icons"
import { useSpring, animated, config } from "react-spring"

const AFlex = animated(Flex)
export default function Footer() {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.molasses,
  })
  const date = new Date()

  return (
    <AFlex
      style={props}
      as="footer"
      sx={{
        textAlign: "center",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        position: "absolute",
        bottom: 0,
      }}
    >
      <Text sx={{ fontSize: [0, 1, 2, 3] }}>
        &copy;{date.getFullYear()} Jason Duncan. Built with Gatsby, Theme-UI,
        and React-Spring.
      </Text>
      <Flex sx={{ fontSize: ["2em", null, "4em", "6em", "8em"] }}>
        <IconContext.Provider
          value={{
            style: {
              margin: "10px",
            },
          }}
        >
          <Link
            href="https://twitter.com/JSON_Objects"
            target="_blank"
            variant="cardLink"
          >
            <FaTwitter />
          </Link>
          <Link
            href="https://github.com/jduncan1980"
            target="_blank"
            variant="cardLink"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/jason-duncan-five/"
            target="_blank"
            variant="cardLink"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://jasonduncan.bandcamp.com"
            target="_blank"
            variant="cardLink"
          >
            <FaBandcamp />
          </Link>
        </IconContext.Provider>
      </Flex>
    </AFlex>
  )
}
