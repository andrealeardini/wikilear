/**
 * Remove left trims from HTML code.
 * Use inside Markdown to render formatted HTML code.
 * @example {{ sheet.render(media) | trimHTML | safe }}
 * @param {string} html - The HTML code to parse.
 * @return {string} The HTML code unformatted
 */
module.exports = (html = "") => {
  const lines = html.split("\n");
  let result = [];
  for (const line of lines) {
    result.push(line.trimStart());
  }
  return result.join("\n");
};
