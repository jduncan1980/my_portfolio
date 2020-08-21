/** @jsx jsx */
// import React from "react";
import { jsx, Flex, Text, Link, Box } from "theme-ui";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Footer() {
  const date = new Date();

  return (
    <Flex
      as="footer"
      sx={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        position: "absolute",
        bottom: 0,
        fontSize: [1, 2, null, 3],
      }}
    >
      <Text sx={{ marginX: ["10px", "40px"], marginBottom: "10px" }}>
        &copy;{date.getFullYear()} Jason Duncan.
      </Text>
      <IconContext.Provider
        value={{
          style: {
            margin: "0 15px",
          },
        }}
      >
        <Link
          href="https://twitter.com/JSON_Objects"
          target="_blank"
          variant="iconLink"
        >
          <FaTwitter />
        </Link>
        <Link
          href="https://github.com/jduncan1980"
          target="_blank"
          variant="iconLink"
        >
          <FaGithub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/jason-duncan-five/"
          target="_blank"
          variant="iconLink"
        >
          <FaLinkedin />
        </Link>
      </IconContext.Provider>
    </Flex>
  );
}
