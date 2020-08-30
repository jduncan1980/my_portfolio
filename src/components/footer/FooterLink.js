/** @jsx jsx */
import React from "react";
import { jsx, Flex, Link } from "theme-ui";

export default function FooterLink(props) {
  return (
    <Link href={props.href} target="_blank" rel="noopener" variant="iconLink">
      <Flex sx={{ flexDirection: "column", alignItems: "center" }}>
        {props.icon}
        <span sx={{ fontSize: "10px" }}>{props.name}</span>
      </Flex>
    </Link>
  );
}
