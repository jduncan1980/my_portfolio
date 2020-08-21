/** @jsx jsx */
// import React from "react";
import { Link } from "gatsby";
import { jsx, Box, Heading, Text } from "theme-ui";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Wobble = animated(Box);

export default function WorkLink() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  return (
    <Wobble
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
      sx={{
        bg: "muted",
        paddingX: "5%",
        borderRadius: "10px",
        transition: "background-color 3s ease",
        "&:hover": {
          bg: "secondary",
        },
      }}
    >
      <Link
        to="/projects"
        sx={{
          textDecoration: "none",
        }}
      >
        <Heading
          as="h3"
          sx={{
            fontSize: [5, 7],
            color: "white",
            textShadow:
              "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
            color: "rgba(178,119,227,1)",
            marginTop: "30px",
            textAlign: "center",
            transition: "all .4s ease",
            "&:hover": {
              transform: "scale(1.1)",
              color: "accent",
            },
          }}
        >
          See My Work...
        </Heading>
        <Text
          sx={{ textAlign: "center", marginTop: ["2%", "4%"], color: "accent" }}
        >
          Click here...
        </Text>
      </Link>
    </Wobble>
  );
}
