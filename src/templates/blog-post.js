import React from "react";
import { graphql, Link } from "gatsby";
import { Flex, Text, Heading, Container, Box } from "theme-ui";
import Img from "gatsby-image";
import SEO from "src/components/seo";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "Do MMMM, YYYY")
      featuredImage {
        fluid(maxWidth: 750) {
          ...GatsbyContentfulFluid
        }
      }
      body {
        json
      }
    }
  }
`;

const BlogPost = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"];
        const url = node.data.target.fields.file["en-US"].url;
        return (
          <img
            alt={alt}
            src={url}
            style={{ maxWidth: "90%", alignSelf: "center" }}
          />
        );
      },
    },
  };

  return (
    <Container
      sx={{
        alignItems: "center",
        // justifyContent: "center",
        flexDirection: "column",
        overflow: "hidden",
        marginTop: "150px",
      }}
    >
      <SEO title={props.data.contentfulBlogPost.title} />
      <Link style={{ textDecoration: "none", marginBottom: "30px" }} to="/blog">
        <Text variant="links.cardLink" sx={{ fontSize: [2, 3] }}>
          Back to Main Blog
        </Text>
      </Link>

      <Flex sx={{ width: "60%", flexDirection: "column" }}>
        <Heading
          sx={{
            fontSize: [3, 4, 5],
            color: "primary",
            marginBottom: "1rem",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          {props.data.contentfulBlogPost.title}
        </Heading>

        {props.data.contentfulBlogPost.featuredImage && (
          <Box sx={{ minWidth: "50%", marginBottom: "20px" }}>
            <Img
              className="featured"
              fluid={props.data.contentfulBlogPost.featuredImage.fluid}
              alt={props.data.contentfulBlogPost.title}
            />
          </Box>
        )}
        <Text variant="blogPostDate" sx={{ textAlign: "center" }}>
          Posted on {props.data.contentfulBlogPost.publishedDate}
        </Text>
      </Flex>
      <Flex sx={{ fontSize: [1, 2], width: "60%", flexDirection: "column" }}>
        {documentToReactComponents(
          props.data.contentfulBlogPost.body.json,
          options
        )}
      </Flex>
    </Container>
  );
};

export default BlogPost;
