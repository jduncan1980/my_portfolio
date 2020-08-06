import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Flex } from "theme-ui";
import MainHeading from "../components/MainHeading";
import Footer from "../components/footer/Footer";
import SEO from "../components/seo";
import BlogListing from "../components/blog/BlogListing";

function Blog() {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
          edges {
            node {
              title
              id
              slug
              publishedDate(formatString: "Do MMMM, YYYY")
              featuredImage {
                fluid(maxWidth: 750) {
                  ...GatsbyContentfulFluid
                }
              }
              excerpt {
                childMarkdownRemark {
                  excerpt(pruneLength: 150)
                }
              }
            }
          }
        }
      }
    `
  );

  return (
    <Container
      sx={{
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <MainHeading>Blog.</MainHeading>
      <SEO title="Blog" />

      <Flex
        sx={{
          flexDirection: "column",
          margin: ["50px 0 0 0", "100px 0 50px 0 "],
          alignItems: "center",
          marginBottom: "100px",
        }}
      >
        {data.allContentfulBlogPost.edges.map(edge => {
          return <BlogListing key={edge.node.id} edge={edge} />;
        })}
      </Flex>
      <Footer />
    </Container>
  );
}

export default Blog;
