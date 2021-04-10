import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions";
import Header from "src/components/header/Header.js";

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
    <React.Fragment>
      <Header siteTitle={data.site.siteMetadata.title} />
      <TransitionProvider
        location={location}
        mode="immediate"
        enter={{
          opacity: 0,
          config: {
            mass: 10,
            tension: 300,
            friction: 75,
            clamp: true,
          },
          onRest: () => {
            console.log("You're a very special person...");
          },
        }}
        usual={{
          opacity: 1,
        }}
        leave={{
          opacity: 0,
          config: {
            mass: 10,
            tension: 300,
            friction: 75,
            clamp: true,
          },
        }}
      >
        <TransitionViews>{children}</TransitionViews>
      </TransitionProvider>
    </React.Fragment>
  );
};

export default Layout;
