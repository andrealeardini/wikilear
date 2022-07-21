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

// node -e 'require("./links.test.js")'

const externalLinks = require("./external-links");

const test = () => {
  const testOptions = {
    overwrite: true,
    domain: "www.wikilear.it",
  };
  const testPath = "src/test/pippo.html";
  const testContent = `
<a href="/src/pippo.html">Link 1</a>
<a href="/images/picture1.jpg">Link 2</a>
<a href="#readme.txt">Link 3</a>
<a href="https://www.wikilear.it/#topics">Argomenti</a>
<a href="https://www.wikilear.ita/" rel="nofollow">Argomenti</a>
<a href="https://www.example.com/?q=search">Link 4</a>
`;
  externalLinks(testContent, testPath, testOptions);
};

module.exports = test();
