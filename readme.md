# nunjucks-extension-code-highlight

Nunjucks extension to provide code highlighting.

Currently using [hightlight.js](https://highlightjs.org/) for code highlight.

## Install

````
npm i nunjucks-extension-code-highlight
````

## Usage

Register the extension with nunjucks.

``` js
const nunjucks = require('nunjucks')

const env = nunjucks.configure('views')

require('nunjucks-extension-code-highlight')(env)
```

Add markdown to your templates.

```
Some example CSS
{% code %}
body {
  background-color: white;
}
{% endcode %}

Some example SCSS
{% code %}
$bg: white;
body {
  background-color: $bg;
}
{% endcode %}

Some example HTML
{% code %}
<section>
  <h2>Sample</h2>
  <a href="#">Link</a>
</section>
{% endcode %}
```

## Options

You can pass a second argument to this extension to override a few defaults.

``` js
// Default options
{
  tag: 'code',
  langs: ['xml', 'css', 'scss', 'javascript'],
  // You could overwrite this wrap() to remove the <pre>
  wrap (html) {
    return `<pre>${ html }</pre>`
  }
}
```

Also, you can access these from the nunjucks environment.

``` js
const codeExtension = env.extensions['code-highlight']
codeExtension.langs = ['xml'] // only auto-detect "xml"
codeExtension.wrap = v => v // no more <pre>...</pre>
```