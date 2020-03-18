module.exports = {
  test: 'code-highlight "css"',
  input: `
body {
  background-color: white;
}
  `,
  expected: `
<pre><code class="hljs language-css"><span class="hljs-selector-tag">body</span> {
  <span class="hljs-attribute">background-color</span>: white;
}</code></pre>
  `
}
