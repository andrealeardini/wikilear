/**
 * Copyright (c) 2021 Andrea Leardini
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

const Image = require("@11ty/eleventy-img");
const path = require("path");
const { JSDOM } = require("jsdom");

const optimizeImages = async (content, outputPath = ".html") => {
  if (!String(outputPath).endsWith(".html")) return content;
  const dom = new JSDOM(content);
  const images = [...dom.window.document.querySelectorAll("img")];
  if (images.length > 0) {
    await Promise.all(images.map((i) => imageHTML(i)));
    content = dom.serialize();
  }
  return content;
};

async function imageHTML(image) {
  let metadata = await Image(image.src, {
    widths: [300, 600, 900, 1200, 1600],
    formats: ["webp", "jpg"],
    urlPath: "/images/",
    outputDir: "./dist/images/",
    filenameFormat: function (id, src, width, format, options) {
      const extension = path.extname(src);
      const name = path.basename(src, extension);
      return `${name}-${width}w.${format}`;
    },
  });

  let imageAttributes = {
    alt: image.alt,
    sizes: image.size,
    class: image.classList,
    loading: "lazy",
    decoding: "async",
  };

  const text = Image.generateHTML(metadata, imageAttributes, {
    whitespaceMode: "inline",
  });
  const html = new JSDOM(text);
  const picture = [...html.window.document.querySelectorAll("picture")];
  image.parentElement.replaceChild(picture[0], image);
}

module.exports = optimizeImages;
