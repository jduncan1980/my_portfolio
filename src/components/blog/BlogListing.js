import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import { Heading, Text, Flex, Box } from "theme-ui";

export default function BlogListing({ edge }) {
  return (
    <Flex
      sx={{
        transform: "rotate(-2deg)",
        bg: "primaryOpaque",
        alignItem: "center",
        justifyContent: "center",
        width: ["90%", null, "50%", "30%"],
        // border: "1px solid black",
        margin: "2rem",
      }}
    >
      <Flex
        sx={{
          transform: "rotate(4deg)",
          bg: "accentOpaque",
          alignItem: "center",
          justifyContent: "center",
          width: ["100%"],
          // border: "1px solid black",
        }}
      >
        <Flex
          sx={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            bg: "rgba(207,197,222, .99)",
            padding: "30px 40px",
            transform: "rotate(-2deg)",
            // border: "1px solid black",
            width: ["100%"],
            color: "muted",
            boxShadow: "5px 5px 24px 0px rgba(0,0,0,0.5)",
          }}
        >
          <Link
            to={`/blog/${edge.node.slug}/`}
            style={{ textDecoration: "none" }}
          >
            <Heading
              as="h2"
              sx={{
                fontSize: [3, 4, 5],
                color: "text",
                marginBottom: "20px",
                textAlign: "center",
                transition: "all .5s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              {edge.node.title}
            </Heading>
          </Link>

          <Text
            sx={{ fontSize: [0, 1, 2], marginBottom: "15px", color: "text" }}
          >
            Posted on {edge.node.publishedDate}
          </Text>
          {edge.node.featuredImage && (
            <Box sx={{ minWidth: "70%", marginBottom: "20px" }}>
              <Img
                fluid={edge.node.featuredImage.fluid}
                alt={edge.node.title}
              />
            </Box>
          )}
          <Text
            sx={{
              fontSize: [1, 2, 3],
              marginBottom: "15px",
              textAlign: "center",
              color: "text",
            }}
          >
            "{edge.node.excerpt.childMarkdownRemark.excerpt}"
          </Text>
          <Link
            to={`/blog/${edge.node.slug}/`}
            style={{ textDecoration: "none" }}
          >
            <Text
              sx={{
                fontSize: [1, 2, 3],
                color: "white",
                bg: "text",
                padding: "20px",
                borderRadius: "15px",
                transition: "all .5s ease",
                boxShadow: "5px 5px 20px 0px rgba(0,0,0,0.5)",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              Read More
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
