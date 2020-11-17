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
        layout: "auto 1fr auto",
      },
      maxWidth: {
        "ch-60": "60ch",
        "ch-70": "70ch",
        "ch-80": "80ch",
      },
      screens: {
        dm: { raw: "(prefers-color-scheme: dark)" },
      },
    },
  },
  variants: {
    display: ({ after }) => after(["last"]),
    margin: ({ after }) => after(["last"]),
  },
  plugins: [],
};
