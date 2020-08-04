import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions";
import Header from "src/components/header/Header.js";
import { Flex } from "theme-ui";

const Layout = ({ location, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Flex
      sx={{
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
      }}
    >
      <Header siteTitle={data.site.siteMetadata.title} />
      <TransitionProvider
        location={location}
        mode="immediate"
        enter={{
          opacity: 0,
          transform: "translate3d(0,-100vh,0)",
          config: {
            mass: 50,
            tension: 200,
            friction: 150,
            clamp: true,
          },
          onRest: () => {
            console.log("You're a very special person...");
          },
        }}
        usual={{
          opacity: 1,
          transform: "translate3d(0vh,0vh,0)",
        }}
        leave={{
          opacity: 0,
          transform: "translate3d(0,100vh,0)",
          config: {
            mass: 50,
            tension: 200,
            friction: 150,
            clamp: true,
          },
        }}
      >
        <TransitionViews>{children}</TransitionViews>
      </TransitionProvider>
    </Flex>
  );
};

export default Layout;
