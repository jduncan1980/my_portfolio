/** @jsx jsx */
import { jsx } from "theme-ui";
// import React from "react";
import { Link } from "gatsby";

const activeLinkStyle = {
  transform: "scale(1.2)",
  color: "#ccb81e",
};

export default function NavLink({ name, to, styles }) {
  return (
    <Link
      to={to}
      activeStyle={activeLinkStyle}
      sx={{ variant: "links.navLink", ...styles }}
    >
      {name}
    </Link>
  );
}
