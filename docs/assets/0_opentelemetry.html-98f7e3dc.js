const e=JSON.parse('{"key":"v-681570ce","path":"/handbook/5._tracing/0_opentelemetry.html","title":"Tracing via Opentelemetry protocol","lang":"en-US","frontmatter":{"order":1,"title":"Tracing via Opentelemetry protocol","shortTitle":"Opentelemetry","description":"Tracing and metrics with Opentelemetry in PURISTA typescript nodejs backend framework applications and how to use them.","tag":["tracing","monitor","opentelemetry","alerting"],"head":[["meta",{"property":"og:url","content":"https://purista.dev/handbook/5._tracing/0_opentelemetry.html"}],["meta",{"property":"og:site_name","content":"PURISTA"}],["meta",{"property":"og:title","content":"Tracing via Opentelemetry protocol"}],["meta",{"property":"og:description","content":"Tracing and metrics with Opentelemetry in PURISTA typescript nodejs backend framework applications and how to use them."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://purista.dev/preview.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-03-29T09:05:20.000Z"}],["meta",{"name":"twitter:creator","content":"@purista_js"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Tracing via Opentelemetry protocol"}],["meta",{"property":"article:author","content":"Sebastian Wessel"}],["meta",{"property":"article:tag","content":"tracing"}],["meta",{"property":"article:tag","content":"monitor"}],["meta",{"property":"article:tag","content":"opentelemetry"}],["meta",{"property":"article:tag","content":"alerting"}],["meta",{"property":"article:modified_time","content":"2023-03-29T09:05:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Tracing via Opentelemetry protocol\\",\\"image\\":[\\"https://purista.dev/preview.png\\"],\\"dateModified\\":\\"2023-03-29T09:05:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Sebastian Wessel\\",\\"url\\":\\"https://sebastianwessel.de\\"}]}"]]},"headers":[{"level":2,"title":"Tracing","slug":"tracing","link":"#tracing","children":[]},{"level":2,"title":"Metrics","slug":"metrics","link":"#metrics","children":[{"level":3,"title":"Technical metric values","slug":"technical-metric-values","link":"#technical-metric-values","children":[]},{"level":3,"title":"Business metric values","slug":"business-metric-values","link":"#business-metric-values","children":[]}]},{"level":2,"title":"Opentelemetry","slug":"opentelemetry","link":"#opentelemetry","children":[]}],"git":{"createdTime":1680080720000,"updatedTime":1680080720000,"contributors":[{"name":"Sebastian Wessel","email":"sebastianwessel@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.83,"words":548},"filePathRelative":"handbook/5._tracing/0_opentelemetry.md","localizedDate":"March 29, 2023","excerpt":"<h2> Tracing</h2>\\n<p>Traceability comes in place at least when something does not work as expected.</p>\\n<p>One kind of issues are the ones, which are the more technical ones. Some function is throwing some error.\\nIn other software designs, you often end up with some code line number, and you start digging into the code, follow all the logic through a lot of files. You jump from one abstraction to the next one. You check wrapper by wrapper, interfaces and all that stuff.<br>\\nThis can become quite challenging, if for example in production only bundled and compiled javascript code is deployed. In this case line numbers and even function names might completely differ from your source typescript code.</p>"}');export{e as data};
