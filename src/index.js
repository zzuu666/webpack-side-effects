import { rehype } from 'rehype'
import highlight from 'rehype-highlight'

const html = `<h1>Hello World!</h1>

<pre><code class="language-js">var name = "World";
console.warn("Hello, " + name + "!")</code></pre>`

const processor = rehype().use(highlight).processSync(html)

document.body.innerHTML = processor.toString()
