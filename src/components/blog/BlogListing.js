import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import { Heading, Text, Flex, Box } from "theme-ui";

export default function BlogListing({ edge }) {
  return (
    <Flex
      sx={{
        transform: "rotate(-5deg)",
        bg: "primaryOpaque",
        alignItem: "center",
        justifyContent: "center",
        width: ["80%"],
        border: "1px solid black",
      }}
    >
      <Flex
        sx={{
          transform: "rotate(10deg)",
          bg: "accentOpaque",
          alignItem: "center",
          justifyContent: "center",
          width: ["80%"],
          border: "1px solid black",
        }}
      >
        <Flex
          sx={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            bg: "secondary",
            padding: "30px 40px",
            transform: "rotate(-5deg)",
            border: "1px solid black",
            width: ["100%"],
            color: "muted",
          }}
        >
          <Link
            to={`/blog/${edge.node.slug}/`}
            style={{ textDecoration: "none" }}
          >
            <Heading as="h2" variant="blogPostHeading">
              {edge.node.title}
            </Heading>
          </Link>

          <Text variant="blogPostDate">
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
          <Text variant="blogPostExcerpt">
            "{edge.node.excerpt.childMarkdownRemark.excerpt}"
          </Text>
          <Link
            to={`/blog/${edge.node.slug}/`}
            style={{ textDecoration: "none" }}
          >
            <Text variant="blogLink">Read More</Text>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
