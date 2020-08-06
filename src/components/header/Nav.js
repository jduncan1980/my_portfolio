/** @jsx jsx */
import { jsx, Flex, IconButton } from "theme-ui";
import React from "react";
import { MdMenu as MenuIcon } from "react-icons/md";
import NavLink from "src/components/header/NavLink";
import linkItems from "src/components/header/navLinkItems";

export default function Nav({ handleMobileMenu }) {
  return (
    <React.Fragment>
      <Flex
        as="nav"
        sx={{
          marginRight: "15px",
          display: ["none", "none", "inline-block"],
        }}
      >
        {linkItems.map(link => {
          return (
            <NavLink
              key={link}
              to={link === "home" ? "/" : `/${link}`}
              name={link}
              styles={{
                fontSize: [null, null, 2, 3, 4],
                padding: 2,
              }}
            />
          );
        })}
      </Flex>

      <IconButton
        sx={{
          display: ["block", null, "none"],
          paddingRight: "3rem",
          outline: "none",
          fontSize: 2,
        }}
        onClick={handleMobileMenu}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
}
