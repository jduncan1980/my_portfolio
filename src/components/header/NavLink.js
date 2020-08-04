/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Link } from "gatsby";

const activeLinkStyle = {
  transform: "scale(1.2)",
  color: "#ccb81e",
};

export default function NavLink(props) {
  return (
    <React.Fragment>
      <Link
        to={props.to}
        activeStyle={activeLinkStyle}
        sx={{ variant: `${props.linkStyle}` }}
      >
        {props.name}
      </Link>
    </React.Fragment>
  );
}
