import React from "react";
import { Box, Flex } from "theme-ui";
import { animated, useSpring, config } from "react-spring";

const Spring = animated(Box);

export default function SentAnimation() {
  const animation = useSpring({
    from: { transform: "rotateX(180deg)" },
    to: { transform: "rotateX(0deg)" },
    config: config.molasses,
  });
  return (
    <Flex
      sx={{
        alignItems: "center",
        justifyContent: "center",
        zIndex: -10,
        padding: "20px",
      }}
    >
      <Spring
        sx={{
          bg: "#e9e9e9",
          minHeight: "200px",
          minWidth: "300px",
          position: "relative",
          zIndex: 1,
          boxShadow: "10px 10px 18px -5px rgba(0,0,0,0.53)",
          margin: ["100px 0 120px 0", "100px 0 200px 0"],
        }}
      >
        <Spring
          style={animation}
          sx={{
            bg: "",
            width: 0,
            height: 0,
            borderLeft: "150px solid transparent",
            borderRight: "150px solid transparent",
            borderTop: "120px solid #e2e2e2",
            filter: "drop-shadow(0 0 0.075rem black)",
            transformStyle: "preserve-3d",
            zIndex: 2,
            perspective: "1000px",
            position: "absolute",
            transformOrigin: "center top",
          }}
        />
        <Spring
          sx={{
            bg: "",
            width: 0,
            height: 0,
            borderLeft: "150px solid transparent",
            borderRight: "150px solid transparent",
            borderTop: "120px solid #d3c5f1",
            zIndex: -1,
          }}
        />
      </Spring>
    </Flex>
  );
}
