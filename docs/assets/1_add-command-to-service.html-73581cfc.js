const e=JSON.parse('{"key":"v-633c15e2","path":"/handbook/2._start-building/2.2_command/1_add-command-to-service.html","title":"Add a command to a service","lang":"en-US","frontmatter":{"order":10,"title":"Add a command to a service","shortTitle":"Add a command","description":"Add a command to an existing service","tag":["typescript","nodejs","javascript","backend","framework","cloud","microservice","lambda","Installation","Setup","Guide"],"head":[["meta",{"property":"og:url","content":"https://purista.dev/handbook/2._start-building/2.2_command/1_add-command-to-service.html"}],["meta",{"property":"og:site_name","content":"PURISTA"}],["meta",{"property":"og:title","content":"Add a command to a service"}],["meta",{"property":"og:description","content":"Add a command to an existing service"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"/purista_slogan.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-03-29T09:05:20.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Add a command to a service"}],["meta",{"property":"article:author","content":"Sebastian Wessel"}],["meta",{"property":"article:tag","content":"typescript"}],["meta",{"property":"article:tag","content":"nodejs"}],["meta",{"property":"article:tag","content":"javascript"}],["meta",{"property":"article:tag","content":"backend"}],["meta",{"property":"article:tag","content":"framework"}],["meta",{"property":"article:tag","content":"cloud"}],["meta",{"property":"article:tag","content":"microservice"}],["meta",{"property":"article:tag","content":"lambda"}],["meta",{"property":"article:tag","content":"Installation"}],["meta",{"property":"article:tag","content":"Setup"}],["meta",{"property":"article:tag","content":"Guide"}],["meta",{"property":"article:modified_time","content":"2023-03-29T09:05:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Add a command to a service\\",\\"image\\":[\\"/purista_slogan.png\\"],\\"dateModified\\":\\"2023-03-29T09:05:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Sebastian Wessel\\",\\"url\\":\\"https://sebastianwessel.de\\"}]}"]]},"headers":[{"level":2,"title":"Create the files","slug":"create-the-files","link":"#create-the-files","children":[]},{"level":2,"title":"Structure","slug":"structure","link":"#structure","children":[{"level":3,"title":"Command builder file","slug":"command-builder-file","link":"#command-builder-file","children":[]},{"level":3,"title":"Schema file","slug":"schema-file","link":"#schema-file","children":[]},{"level":3,"title":"Type file","slug":"type-file","link":"#type-file","children":[]},{"level":3,"title":"Test file","slug":"test-file","link":"#test-file","children":[]}]},{"level":2,"title":"Implement the command","slug":"implement-the-command","link":"#implement-the-command","children":[{"level":3,"title":"Command function context","slug":"command-function-context","link":"#command-function-context","children":[]},{"level":3,"title":"Payload","slug":"payload","link":"#payload","children":[]},{"level":3,"title":"Parameter","slug":"parameter","link":"#parameter","children":[]},{"level":3,"title":"Return value","slug":"return-value","link":"#return-value","children":[]}]},{"level":2,"title":"Event bridge advice","slug":"event-bridge-advice","link":"#event-bridge-advice","children":[{"level":3,"title":"adviceAutoacknowledgeMessage","slug":"adviceautoacknowledgemessage","link":"#adviceautoacknowledgemessage","children":[]}]}],"git":{"createdTime":1680080720000,"updatedTime":1680080720000,"contributors":[{"name":"Sebastian Wessel","email":"sebastianwessel@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":5.92,"words":1775},"filePathRelative":"handbook/2._start-building/2.2_command/1_add-command-to-service.md","localizedDate":"March 29, 2023","excerpt":"<p>A command is a single function, which will be called (invoked) by someone with the expectation to get a result back.</p>\\n<h2> Create the files</h2>\\n<p>Commands can be added to services. The most sight-forward way for adding a command is the usage of the PURISTA CLI.</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code>purista <span class=\\"token function\\">add</span> <span class=\\"token builtin class-name\\">command</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>"}');export{e as data};