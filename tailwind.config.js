module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.md", "./src/**/*.njk", "./src/**/*.js"],
  theme: {
    extend: {
      gridTemplateRows: {
        // Site-specific row configuration
        layout: "60px 1fr 200px",
      },
      maxWidth: {
        ch: "70ch",
      },
    },
  },
  variants: {
    display: ({ after }) => after(["last"]),
    margin: ({ after }) => after(["last"]),
  },
  plugins: [],
};
