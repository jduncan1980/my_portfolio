module.exports = {
  breakpoints: ["600px", "900px", "1200px", "1800px"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "raleway, sans-serif",
    heading: "orbitron, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: [
    ".5rem",
    "1rem",
    "1.5rem",
    "2rem",
    "3rem",
    "4rem",
    "5rem",
    "7rem",
    "12rem",
  ],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#6e1fad",
    secondary: "#3c22be",
    muted: "#f6f6f6",
    accent: "#ccb81e",
    danger: "#ee89b5",
    primaryOpaque: "rgba(110,31,173,0.75)",
    secondaryOpaque: "rgba(60,34,190,0.25)",
    accentOpaque: "rgba(204,184,30,0.25)",
  },
  borders: {
    card: "8px solid #141414",
  },
  text: {
    blogLink: {
      fontSize: [1, 2, 3],
      color: "secondary",
      bg: "accentOpaque",
      padding: "20px",
      borderRadius: "15px",
      transition: "all .5s ease",
      boxShadow: "5px 5px 20px 0px rgba(0,0,0,0.5)",
      "&:hover": {
        transform: "scale(1.1)",
      },
    },

    blogPostHeading: {
      fontSize: [3, 4, 5],
      color: "muted",
      marginBottom: "20px",
      transition: "all .5s ease",
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
    blogPostDate: {
      fontSize: [0, 1, 2],
      marginBottom: "15px",
    },
    blogPostExcerpt: {
      fontSize: [1, 2, 3],
      marginBottom: "15px",
      textAlign: "center",
    },
    projectCardHeading: {
      writingMode: "vertical-rl",
      fontSize: [3, null, 4, 5],
      alignSelf: "center",
      color: "muted",
      marginX: "auto",
    },
    cardBody: {
      textAlign: "justify",
      mx: [2, 3, 4],
      fontSize: ["1em", null, null, ".7em"],
    },
    cardTitle: {
      fontSize: ["1.5em"],
      margin: 2,
    },
    error: {
      fontSize: [2],
      color: "danger",
    },
  },
  links: {
    cardLink: {
      fontSize: ["2em", null, null, "1.25em"],
      textDecoration: "none",
      color: "primary",
      transition: "all .5s ease",
      marginY: 2,
      textShadow: "2px 2px 3px #ccb81e",
      "&:hover": {
        transform: "scale(1.3)",
        color: "secondary",
        textDecoration: "underline overline",
      },
    },
    navLink: {
      textTransform: "uppercase",
      color: "primary",
      transition: "all .2s ease-in",
      textShadow: "3px 2px 4px rgba(234,176,243,1)",
      cursor: "pointer",
      textDecoration: "none",
      "&:hover": {
        color: "secondary",
      },
      "&:active": {
        color: "accent",
      },
    },
  },
  images: {
    cardImg: {
      width: "90%",
      height: "auto",
    },
    aboutImg: {
      width: ["100%", null, "60%", null, "50%"],
      borderRadius: "50%",
      marginY: ["30px", null, "50px", null, "70px"],
      boxShadow: "10px 10px 48px 0px rgba(0,0,0,0.5)",
      backgroundColor: "accent",
      padding: "15px",
    },
  },
  cards: {},
  layout: {
    container: {
      display: "flex",
      flexDirection: "column",
      width: ["100%", null, "90%", null, "80%"],
      position: "relative",
      minHeight: "100vh",
      // overflow: "hidden",
      paddingBottom: ["50px", "75px", "125px", "150px"],
    },
  },
  variants: {},
  forms: {
    label: {
      fontSize: [2, null, 3],
      marginBottom: "5px",
    },
    input: {
      marginBottom: "10px",
      bg: "muted",
      color: "text",
      fontSize: [1, null, 2],
    },
    textarea: {
      minHeight: "150px",
      bg: "muted",
      color: "text",
      resize: "none",
      fontSize: [1, null, 2],
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      background:
        "linear-gradient(349deg, rgba(113,37,164,0.5) 0%, rgba(25,4,48,0.5) 68%, rgba(26,19,187,0.5) 100%)",
      backgroundSize: "cover",
      minHeight: "100vh",
      fontSize: "62.5%",
      borderSizing: "border-box",
    },
  },
};
