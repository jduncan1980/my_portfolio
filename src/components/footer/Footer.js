/** @jsx jsx */
// import React from "react";
import { jsx, Flex, Text, Link } from "theme-ui";
import { FaTwitter, FaGithub, FaLinkedin, FaBandcamp } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Footer() {
  const date = new Date();

  return (
    <Flex
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
      <Flex sx={{ fontSize: [1, 2, 3, 4] }}>
        <IconContext.Provider
          value={{
            style: {
              margin: "0 12px",
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
      <Text sx={{ fontSize: [0, 1, 2, 3], marginBottom: "10px" }}>
        &copy;{date.getFullYear()} Jason Duncan. Built with Gatsby, Theme-UI,
        and React-Spring.
      </Text>
    </Flex>
  );
}
