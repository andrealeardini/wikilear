module.exports = {
  darkMode: "class",
  purge: {
    content: ["./src/**/*.md", "./src/**/*.njk", "./src/**/*.js"],
    // direc-link class is added by markdown-anchor (eleventy) after purge process
    options: {
      safelist: ["direct-link"],
    },
  },
  theme: {
    extend: {
      gridTemplateRows: {
        // Site-specific row configuration
        layout: "auto 1fr auto",
      },
      maxWidth: {
        "ch-60": "60ch",
        "ch-70": "70ch",
        "ch-80": "80ch",
      },
      maxHeight: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
        "1/4v": "25vh",
        "1/2v": "50vh",
        "3/4v": "75vh",
      },
      screens: {
        sm: "550px",
      },
      spacing: {
        "1/4": "25%",
        "1/2": "50%",
        "2/3": "66.666667%",
        "3/4": "75%",
      },
      width: {
        "5/11": "45.45454%",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['last'],
      display: ['last'],
      margin: ['last'],
    }
  },
  plugins: [],
};
