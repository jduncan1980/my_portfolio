import React from "react";
import { FaReact, FaJs, FaHtml5, FaCss3 } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Flex } from "theme-ui";

export default function TechIcons() {
  return (
    <Flex
      sx={{
        justifyContent: ["center", "space-between"],
        alignItems: "center",
        flexWrap: "wrap",
        fontSize: [4, 5, 6, 7],
      }}
    >
      <IconContext.Provider
        value={{
          style: {
            margin: "0 15px 0 15px",
          },
        }}
      >
        <FaReact />
        <FaHtml5 />
        <FaCss3 />
        <FaJs />
      </IconContext.Provider>
    </Flex>
  );
}
