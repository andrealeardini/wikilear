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

/**
 * Copyright (c) 2020 Google Inc
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
const cspHashGen = require("csp-hash-generator");
const fs = require("fs");
const CSP = require("../../_data/csp");

/**
 * Substitute the magic `HASHES` string in the CSP with the actual values of the
 * loaded JS files.
 * The ACTUAL CSP is configured in `_data/csp.js`.
 */

function quote(str) {
  return `'${str}'`;
}

const addCspHash = async (rawContent, outputPath) => {
  let content = rawContent;

  if (outputPath && outputPath.endsWith(".html")) {
    const dom = new JSDOM(content);
    const cspAble = [
      ...dom.window.document.querySelectorAll("script[csp-hash]"),
    ];

    const hashes = cspAble.map((element) => {
      const hash = cspHashGen(element.textContent);
      element.setAttribute("csp-hash", hash);
      return quote(hash);
    });

    content = dom.serialize();

    // write CSP Policy in headers file
    const headersPath = "./dist/_headers";
    const filePath = outputPath.replace("dist/", "/"); // dist/blog/index.html ->  /blog/index.html
    const filePathPrettyURL = filePath.slice(0, -10); // blog/index.html ->  /blog/
    try {
      const headers = fs.readFileSync(headersPath, { encoding: "utf-8" });
      const regExp = /(# \[csp headers\]\n)([\s\S]*)(# \[end csp headers\])/;
      const match = headers.match(regExp);
      if (!match) {
        throw `Check your _headers file. I couldn't find the text block for the custom headers:
          # [csp headers]
          # this text will be replaced by apply-csp.js plugin
          # [end csp headers]`;
      }
      const oldCustomHeaders = headers.match(regExp)[2].toString();
      const CSPPolicy = `Content-Security-Policy: ${CSP.apply().regular.replace(
        "HASHES",
        hashes.join(" ")
      )}`;
      // write headers for full path (/blog/index.html) and pretty url (/blog/)
      // 404.html require a different pattern.
      const newCustomHeaders =
        outputPath != "dist/404.html"
          ? oldCustomHeaders.concat(
              "\n",
              filePath,
              "\n  ",
              CSPPolicy,
              "\n",
              filePathPrettyURL,
              "\n  ",
              CSPPolicy
            )
          : oldCustomHeaders.concat(
              "\n",
              "/404.html",
              "\n  ",
              CSPPolicy,
              "\n",
              "/*",
              "\n  ",
              CSPPolicy
            );
      fs.writeFileSync(
        headersPath,
        headers.replace(regExp, `$1${newCustomHeaders}\n$3`)
      );
    } catch (error) {
      console.log(
        "[apply-csp] Something went wrong with the creation of the csp headers\n",
        error
      );
    }
  }

  return content;
};

module.exports = {
  initArguments: {},
  configFunction: async (eleventyConfig, pluginOptions = {}) => {
    eleventyConfig.addTransform("csp", addCspHash);
  },
};
