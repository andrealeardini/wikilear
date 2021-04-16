module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  MODE: process.env.MODE,
  ELEVENTY: process.env.ELEVENTY,
  // https://docs.netlify.com/configure-builds/environment-variables/#read-only-variables
  // NETLIFY: Always true. Can be used to check if the build is running on Netlify.
  NETLIFY: process.env.NETLIFY,
};
