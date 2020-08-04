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
    <Card onClick={() => setFlipped(state => !state)} variant="projectCard">
      {/*Card Front */}
      <Flip
        className="flipContainerStyle"
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
      >
        <Image
          variant="cardImg"
          src={require(`src/images/${info.image}.png`)}
        />

        <Heading as="h3" variant="projectCardHeading">
          {info.title}
        </Heading>
      </Flip>

      {/*Card Back */}
      <Flip
        className="flipContainerStyle"
        sx={{
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`),
        }}
      >
        <Flex className="cardBack">
          <Heading as="h4" variant="cardTitle">
            {info.title}
          </Heading>

          <Text variant="cardBody">{info.about}</Text>

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
