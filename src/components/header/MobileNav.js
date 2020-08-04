/** @jsx jsx */

import { jsx, Flex, Close, Box } from "theme-ui"
import NavLink from "src/components/header/NavLink"
import items from "src/components/header/navLinkItems"
import { useTransition, animated, config } from "react-spring"

const Menu = animated(Flex)

export default function MobileNav({ handleMobileMenu, show }) {
  const transition = useTransition(show, null, {
    from: {
      transform: "translateX(-100%)",
      opacity: 0,
    },
    enter: {
      transform: "translateX(0)",
      opacity: 1,
    },
    leave: {
      transform: "translateX(100%)",
      opacity: 0,
    },
    unique: true,
    config: config.wobbly,
    reset: true,
  })

  return transition.map(({ item, key, props }) =>
    item ? (
      <Menu variant="mobileNavMenu" style={props} key={key} as="nav">
        <Close
          sx={{ position: "absolute", top: 30, right: 25, color: "white" }}
          onClick={handleMobileMenu}
        />
        {items.map(link => {
          return (
            <Box
              role="navigation"
              key={link}
              onClick={handleMobileMenu}
              onKeyPress={handleMobileMenu}
              sx={{
                padding: 2,
                backgroundColor: "rgba(255,255,255,.04)",
                borderRadius: "15px",
              }}
            >
              <NavLink
                key={link}
                to={link === "home" ? "/" : `/${link}`}
                name={link}
                linkStyle="links.mobileNavLink"
              />
            </Box>
          )
        })}
      </Menu>
    ) : null
  )
}
