module.exports = {
  breakpoints: ["600px", "900px", "1200px", "1800px"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "raleway, sans-serif",
    heading: "orbitron, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: [
    ".65rem",
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
    primary: "rgba(169,94,233,1)",
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
    default: {
      padding: ["30px"],
      // bg: "muted",
      color: "text",
      fontSize: [1, null, 2],
      textAlign: "justify",
      width: ["95%", null, null, "50%"],
    },
    cardTitle: {
      fontSize: ["1.5em"],
      margin: 2,
    },
    error: {
      fontSize: [2],
      color: "danger",
    },
    indexHeading: {
      fontSize: [2, 3, 4],
      textAlign: "center",
      marginY: ["3%"],
      padding: ".5rem",
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
      fontFamily: "heading",
      textTransform: "uppercase",
      color: "muted",
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
    iconLink: {
      textDecoration: "none",
      color: "primary",
      transition: "all .2s ease-in",
      margin: 0,
      "&:hover": {
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
      width: ["80%", null, null, "40%"],
      borderRadius: "50%",
      marginY: ["30px", null, "50px", null, "70px"],
      boxShadow: "10px 10px 48px 0px rgba(0,0,0,0.5)",
      backgroundColor: "accent",
      padding: "3px",
    },
  },
  layout: {
    container: {
      display: "flex",
      flexDirection: "column",
      width: ["100%", null, "90%", null, "80%"],
      position: "relative",
      minHeight: "100vh",
      paddingBottom: ["50px", "75px", "125px", "150px"],
    },
  },
  variants: {
    aboutSections: {
      alignItems: ["center"],
      justifyContent: "space-evenly",
      marginY: ["10px", null, "25px"],
    },
  },

  forms: {
    label: {
      fontSize: [1, null, 2],
      marginBottom: "2px",
    },
    input: {
      marginBottom: "10px",
      bg: "muted",
      color: "text",
      fontSize: [1, null, 2],
    },
    textarea: {
      minHeight: "100px",
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
      minHeight: "100vh",
      borderSizing: "border-box",
      bg: "muted",
    },
  },
};
