const unified = require('unified');
const markdown = require('remark-parse');
const remark2rehype = require('remark-rehype');
const html = require('rehype-stringify');

const parsePromise =  (markdownStr) => {
  const processor = unified()
    .use(markdown)
    .use(remark2rehype)
    .use(html);
  return processor.process(markdownStr)
}

module.exports = parsePromise
