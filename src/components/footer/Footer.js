/** @jsx jsx */
// import React from "react";
import { jsx, Flex, Text, Link } from "theme-ui";
import { FaTwitter, FaGithub, FaLinkedin, FaBandcamp } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useSpring, animated, config } from "react-spring";

const AFlex = animated(Flex);
export default function Footer() {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.molasses,
  });
  const date = new Date();

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
      <Text sx={{ fontSize: [1, 2, 3, 4] }}>
        &copy;{date.getFullYear()} Jason Duncan. Built with Gatsby, Theme-UI,
        and React-Spring.
      </Text>
      <Flex>
        <IconContext.Provider
          value={{
            style: {
              width: "50px",
              height: "auto",
              margin: "10px",
            },
          }}
        >
          <Link href="https://twitter.com/JSON_Objects" variant="cardLink">
            <FaTwitter />
          </Link>
          <Link href="https://github.com/jduncan1980" variant="cardLink">
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/jason-duncan-five/"
            variant="cardLink"
          >
            <FaLinkedin />
          </Link>
          <Link href="https://jasonduncan.bandcamp.com" variant="cardLink">
            <FaBandcamp />
          </Link>
        </IconContext.Provider>
      </Flex>
    </AFlex>
  );
}
