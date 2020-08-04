/** @jsx jsx */
import { jsx, Flex, IconButton, Box, Heading } from "theme-ui"
import React, { useState } from "react"
import { MdMenu as MenuIcon } from "react-icons/md"
import NavLink from "src/components/header/NavLink"
import linkItems from "src/components/header/navLinkItems"
import background from "src/images/navbackground.png"
import MobileNav from "./MobileNav"

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleMobileMenu = () => {
    setNavbarOpen(!navbarOpen)
    if (navbarOpen) {
      document.body.style.overflow = "visible"
    } else {
      document.body.style.overflow = "hidden"
    }
  }

  return (
    <React.Fragment>
      <MobileNav handleMobileMenu={handleMobileMenu} show={navbarOpen} />
      <Flex
        as="nav"
        variant="navBarStyle"
        sx={{
          backgroundImage: `linear-gradient(90deg, rgba(19,9,46,0.7) 0%, rgba(30,35,44,0.5) 50%,rgba(9,18,46,0.7) 100%), url(${background})`,
        }}
        color="background"
      >
        <Heading as="h1" sx={{ marginLeft: "20px", fontSize: [2, 3, null, 4] }}>
          jasonduncan.xyz
        </Heading>
        <Box
          sx={{
            marginRight: "15px",
            display: ["none", "none", "inline-block", null, null],
          }}
        >
          {linkItems.map(link => {
            return (
              <NavLink
                key={link}
                to={link === "home" ? "/" : `/${link}`}
                name={link}
                linkStyle="links.navLink"
              />
            )
          })}
        </Box>

        <IconButton
          sx={{
            display: ["block", null, "none", null, null],
            paddingRight: 5,
            outline: "none",
          }}
          onClick={handleMobileMenu}
        >
          <MenuIcon />
        </IconButton>
      </Flex>
    </React.Fragment>
  )
}

export default Header
