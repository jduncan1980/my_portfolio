/** @jsx jsx */
import { jsx, Card, Heading, Text, Image, Flex, Link } from "theme-ui";
import { useState } from "react";
import { useSpring, animated } from "react-spring";

const Flip = animated(Flex);

function ProjectCard({ info }) {
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <Card
      onClick={() => setFlipped(state => !state)}
      sx={{
        marginBottom: [5],
        width: ["85vw", null, "80vw", "40vw", "35vw"],
        height: ["95vw", "90vw", null, "42vw", "37vw"],
        position: "relative",
        filter: [null, null, "saturate(.25)"],
        transition: "all 1s ease",
        fontSize: [0, 1, 2, null, 3],

        "&:hover": {
          transform: [null, null, "scale(1.05)"],
          filter: [null, null, "saturate(2)"],
        },
      }}
    >
      {/*Card Front */}
      <Flip
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          cursor: "pointer",
          willChange: "transform, opacity, boxShadow",
          transition: "box-shadow 1s ease",
          display: "flex",
          backgroundColor: "black",
          border: "8px solid black",
          borderRadius: "10px",
          boxShadow: "15px 15px 15px -8px rgba(0,0,0,0.5)",
          "&:hover": {
            boxShadow: "18px 18px 18px 0px rgba(0,0,0,0.5)",
          },
        }}
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
      >
        <Text
          sx={{
            color: "muted",
            bg: "black",
            textAlign: "center",
            fontSize: [1, null, 2],
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            marginRight: "5px",
          }}
        >
          Click For More Info
        </Text>
        <Image
          variant="cardImg"
          src={require(`src/images/${info.image}.png`)}
        />

        <Heading
          as="h3"
          sx={{
            writingMode: "vertical-rl",
            fontSize: [3, null, 4, 5],
            alignSelf: "center",
            color: "muted",
            marginLeft: ["10px", null, "20px"],
          }}
        >
          {info.title}
        </Heading>
      </Flip>

      {/*Card Back */}
      <Flip
        sx={{
          cursor: "pointer",
          alignItems: "center",
          justifyContent: "space-evenly",
          position: "absolute",
          width: "100%",
          height: "100%",
          willChange: "transform, opacity, boxShadow",
          transition: "box-shadow .5s ease",
          backgroundColor: "black",
          border: "card",
          borderRadius: "10px",
          boxShadow: "10px 10px 10px -8px rgba(0,0,0,0.5)",
          "&:hover": {
            boxShadow: "12px 12px 12px 2px rgba(0,0,0,0.5)",
          },
        }}
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`),
        }}
      >
        <Flex
          sx={{
            width: "95%",
            height: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            backgroundColor: "muted",
          }}
        >
          <Heading as="h4" variant="cardTitle">
            {info.title}
          </Heading>

          <Text
            sx={{
              textAlign: "justify",
              mx: [2, 3, 4],
              fontSize: ["1em", null, null, ".7em"],
            }}
          >
            {info.about}
          </Text>

          <Flex
            sx={{
              width: "90%",
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: 2,
            }}
          >
            <Link
              href={info.live}
              variant="cardLink"
              target="_blank"
              sx={{ display: flipped ? "block" : "none" }}
            >
              Live Project
            </Link>
            <Link
              href={info.repo}
              variant="cardLink"
              target="_blank"
              sx={{ display: flipped ? "block" : "none" }}
            >
              Github
            </Link>
          </Flex>
        </Flex>
      </Flip>
    </Card>
  );
}

export default ProjectCard;
