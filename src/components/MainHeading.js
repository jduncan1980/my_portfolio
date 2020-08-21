import React from "react";
import { Heading, Flex } from "theme-ui";

function MainHeading(props) {
  return (
    <Flex
      sx={{
        bg: "primaryOpaque",
        minWidth: "80%",
        justifyContent: "center",
        alignItems: "center",
        margin: ["85px 0 25px 0", null, "150px 0 50px 0", "200px 0 100px 0"],
      }}
    >
      <Flex
        sx={{
          bg: "secondaryOpaque",
          transform: "skew(-10deg, -5deg)",
          minWidth: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Flex
          sx={{
            bg: "rgba(131,12,236,0.5)",
            transform: "skew(20deg, 10deg)",
            minWidth: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Heading
            as="h1"
            sx={{
              fontSize: [3, 4, 5, 6],
              textTransform: "capitalize",
              margin: ["15px 10px", null, "30px"],
              position: "relative",
              color: "muted",
              display: "inline",
              transform: "skew(-10deg, -5deg)",
              textShadow:
                "-1px -1px 0 #000,	1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000;",

              "&:before": {
                content: "attr(title)",
                position: "absolute",
                left: "5px",
                top: "5px",
                color: "gray",
                opacity: 0.5,
                zIndex: -1,
              },

              "&:after": {
                content: "attr(title)",
                position: "absolute",
                left: "9px",
                top: "9px",
                color: "black",
                opacity: 0.5,
                zIndex: -2,
              },
            }}
            title={props.children}
          >
            {props.children}&nbsp;&nbsp;
          </Heading>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default MainHeading;
