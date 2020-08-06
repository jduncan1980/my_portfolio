import React from "react";
import { Flex } from "theme-ui";
import data from "src/data/projectCardData";
import Card from "src/components/projectCard/ProjectCard";

function projects() {
  return (
    <Flex
      id="cardContainer"
      sx={{
        marginTop: "75px",
        flexWrap: ["nowrap", null, null, "wrap", null],
        justifyContent: [null, null, null, "space-around"],
        alignItems: ["center"],
        flexDirection: ["column", null, null, "row", null],
        width: "100%",
      }}
    >
      {data.map(card => {
        return <Card info={card} key={card.id} />;
      })}
    </Flex>
  );
}

export default projects;
