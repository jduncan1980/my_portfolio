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
        return <img alt={alt} src={url} />;
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
      <Link
        style={{ textDecoration: "none", marginBottom: "30px" }}
        to="/blog/"
      >
        <Text variant="links.cardLink" sx={{ fontSize: [2, 3] }}>
          Back to Main Blog
        </Text>
      </Link>

      <Flex sx={{ width: "60%", flexDirection: "column" }}>
        <Heading
          variant="blogPostHeading"
          sx={{ textAlign: "center", color: "primary" }}
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
      <Box sx={{ fontSize: [1, 2], width: "60%" }}>
        {documentToReactComponents(
          props.data.contentfulBlogPost.body.json,
          options
        )}
      </Box>
    </Container>
  );
};

export default BlogPost;
