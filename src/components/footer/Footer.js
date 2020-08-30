/** @jsx jsx */
// import React from "react";
import { jsx, Flex, Text, Link, Box } from "theme-ui";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";
import FooterLink from "./FooterLink";

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
      <FooterLink
        href="https://twitter.com/JSON_Objects"
        name="Twitter"
        icon={<FaTwitter />}
      />
      <FooterLink
        href="https://github.com/jduncan1980"
        name="Github"
        icon={<FaGithub />}
      />
      <FooterLink
        href="https://www.linkedin.com/in/jason-duncan-five"
        name="LinkedIn"
        icon={<FaLinkedin />}
      />
    </Flex>
  );
}
