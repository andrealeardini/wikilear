module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      gridTemplateRows: {
           // Site-specific row configuration
         'layout': '60px 1fr 200px',
        }
    },
  },
  variants: {},
  plugins: [],
}
