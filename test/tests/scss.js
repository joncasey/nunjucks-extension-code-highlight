module.exports = {
  test: 'code-highlight "scss"',
  input: `
$bg: white;
body {
  background-color: $bg;
}
  `,
  expected: `
<pre><code class="hljs language-scss"><span class="hljs-variable">$bg</span>: white;
<span class="hljs-selector-tag">body</span> {
  <span class="hljs-attribute">background-color</span>: <span class="hljs-variable">$bg</span>;
}</code></pre>
  `
}


