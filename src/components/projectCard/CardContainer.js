import React from "react";
import { Box } from "theme-ui";
import data from "src/data/projectCardData";
import Card from "src/components/projectCard/ProjectCard";

function projects() {
  return (
    <Box
      id="cardContainer"
      variant="cardContainer"
      sx={{ marginBottom: "200px" }}
    >
      {data.map(card => {
        return <Card info={card} key={card.id} />;
      })}
    </Box>
  );
}

export default projects;
