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

const { JSDOM } = require("jsdom");
const path = require("path");

const defaultOptions = {
  domain: "",
  extensions: [".html"],
  overwrite: false,
  rel: "noopener noreferrer",
  target: "_blank",
  selector: "a",
};

/**
 * External links
 * @param {string} content
 * @param {string} outputPath
 * @param {object} userOptions
 * @return {string} content
 */
const externalLinks = (content, outputPath, userOptions = {}) => {
  const options = { ...defaultOptions, ...userOptions };
  const extension = path.extname(outputPath);
  if (outputPath && options.extensions.includes(extension)) {
    const dom = new JSDOM(content);
    const document = Object.assign(dom.window.document);
    const [...links] = document.querySelectorAll(options.selector);
    // search for external links
    links.forEach((link) => {
      const href = link.href;
      const hostname = link.hostname;
      const isInternal =
        href.startsWith("/") ||
        href.startsWith("about:blank#") ||
        hostname === options.domain;
      // console.log(href, isInternal);
      if (isInternal) return; // nothing to do

      // this is an external link
      // add target _blank
      link.target = options.target;
      // add rel
      if (options.overwrite || link.rel === "") {
        link.rel = options.rel;
        return;
      }
      // add only the missing relationships
      const rel = link.rel.split(" ");
      options.rel.split(" ").forEach((relationship) => {
        if (rel.includes(relationship)) return;
        rel.push(relationship);
      });
      link.rel = rel.join(" ");
      // console.log(link.rel);
    });
    content = dom.serialize();
  }
  // console.log({ content });
  return content;
};

module.exports = externalLinks;
