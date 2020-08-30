/** @jsx jsx */
import { jsx, Flex, Heading } from "theme-ui";
import React, { useState } from "react";

import background from "src/images/navbackground.png";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleMobileMenu = () => {
    setNavbarOpen(!navbarOpen);
    if (navbarOpen) {
      document.body.style.overflow = "visible";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  if (navbarOpen) {
    return <MobileNav handleMobileMenu={handleMobileMenu} show={navbarOpen} />;
  }

  return (
    <Flex
      as="header"
      sx={{
        backgroundImage: `linear-gradient(90deg, rgba(19,9,46,0.9) 0%, rgba(30,35,44,0.7) 50%,rgba(9,18,46,0.9) 100%), url(${background})`,
        alignItems: "center",
        justifyContent: "space-between",
        position: "fixed",
        top: 0,
        width: "100%",
        paddingY: "1rem",
        zIndex: 9998,
        boxShadow: " 0px -2px 25px 0px rgba(0,0,0,0.55)",
      }}
      color="background"
    >
      <Heading
        as="span"
        sx={{ marginLeft: "1.5rem", fontSize: [2, null, null, 3] }}
      >
        jasonduncan.xyz
      </Heading>
      <Nav handleMobileMenu={handleMobileMenu} show={navbarOpen} />
    </Flex>
  );
};

export default Header;
