/**
 * Copyright (c) 2022 Andrea Leardini
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

//github.com/11ty/eleventy-img/issues/51#issuecomment-775186353

import { existsSync } from "fs";
import Image, { statsSync, generateHTML } from "@11ty/eleventy-img";
import { extname, basename, resolve as _resolve, dirname } from "path";
import { fileURLToPath } from 'url';
import { JSDOM } from "jsdom";
import { NETLIFY } from "../_data/environment.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
  // set standard format and element
  // create avif images only on Netlify
  let formats = NETLIFY
    ? ["avif", "webp", "jpeg"]
    : ["webp", "jpeg"];
  let type = "picture";

  // the images source is relative, add the full path
  let src = "./src" + image.src;

  const options = {
    widths: [400, 500, 700, 900, 1100, 1300],
    formats: formats,
    urlPath: "/images/",
    outputDir: "./dist/images/",
    filenameFormat: function (id, src, width, format) {
      const extension = extname(src);
      const name = basename(src, extension);
      return `${name}-${width}w.${format}`;
    },
  };

  const stats = statsSync(src, options);

  /** Creating a flat array of all the output paths from the stats object. */
  const outputPaths = Object.keys(stats).reduce((acc, key) => {
    return [
      ...acc,
      ...stats[key].map((resource) => {
        return resource.outputPath;
      }),
    ];
  }, []);

  /** Checking if all output files exists. */
  let hasImageBeenOptimized = true;
  for (const outputPath of outputPaths) {
    /** Edit the output file path resolving, depending of this file */
    const resolve = _resolve(__dirname, "..", "..", outputPath);
    // console.log({ __dirname });
    // console.log({ outputPath });
    // console.log("Resolve to:", resolve);
    if (!existsSync(resolve)) {
      hasImageBeenOptimized = false;
    }
  }

  if (!hasImageBeenOptimized) {
    Image(src, options);
  }

  const imageAttributes = {
    alt: image.alt,
    sizes: image.sizes
      ? image.sizes
      : "(min-width: 1280px) 615px, (min-width: 640px) calc(-5.16vw + 605px), calc(95vw - 17px)",
    class: image.classList,
    // https://web.dev/lcp-lazy-loading/?utm_source=lighthouse&utm_medium=devtools
    loading: image.dataset.lcp === "high" ? "eager" : "lazy",
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/decoding#usage_notes
    decoding: image.dataset.lcp === "high" ? "sync" : "async",
    // https://web.dev/priority-hints/
    fetchPriority: image.dataset.lcp === "high" ? "high" : "auto",
  };

  const text = generateHTML(stats, imageAttributes, {
    whitespaceMode: "inline",
  });
  const html = new JSDOM(text);
  const element = [...html.window.document.querySelectorAll(type)];
  image.parentElement.replaceChild(element[0], image);
}

export default optimizeImages;
