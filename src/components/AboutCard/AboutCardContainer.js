import React from "react";
import { Flex, Image } from "theme-ui";
import image1 from "src/images/jason1.jpg";
import image2 from "src/images/jason2.jpg";
import image3 from "src/images/jason3.jpg";
import AboutCard from "./AboutCard";

export default function AboutCardContainer({ data }) {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        alignItems: "center",
        width: ["80%", null, null, "90%"],
      }}
    >
      {data.map((item, index) => {
        return (
          <React.Fragment key={`${item}-${index}`}>
            {index === 0 && <Image src={image1} variant="aboutImg" />}

            {index === 3 && <Image src={image2} variant="aboutImg" />}

            {index === 5 && <Image src={image3} variant="aboutImg" />}
            <AboutCard item={item} index={index} />
          </React.Fragment>
        );
      })}
    </Flex>
  );
}
