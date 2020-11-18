import { terser } from "rollup-plugin-terser";
const isProduction = process.env.NODE_ENV === "production";

export default {
  input: "src/js/main.js",
  output: {
    file: "dist/js/main.js",
    format: "iife",
  },
  plugins: [isProduction && terser()],
};
