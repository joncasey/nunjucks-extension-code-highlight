module.exports = {
  test: 'code-highlight "xml"',
  input: `
<section>
  <h2>Sample</h2>
  <a href="#">Link</a>
</section>
  `,
  expected: `
<pre><code class="hljs language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Sample<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>Link<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span></code></pre>
  `
}