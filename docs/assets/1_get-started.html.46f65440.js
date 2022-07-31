import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{o as p,c as i,b as s,e as a,a as t,d as n,r as c}from"./app.e27e78c2.js";const r={},l=t(`<h1 id="get-started" tabindex="-1"><a class="header-anchor" href="#get-started" aria-hidden="true">#</a> Get started</h1><p>PURISTA tries to avoid the need for implementing boilerplate code as much as possible and to automate and autogenerate types, definitions, documentation when ever possible.</p><p>Schema and input-output-validation are deeply integrated, and they should be used whenever possible to build robust, stable systems.</p><p>PURISTA addresses developers which want to simply focus on implementation, while providing them the necessary things to use the great node/typescript tooling.</p><h2 id="set-up-a-new-project" tabindex="-1"><a class="header-anchor" href="#set-up-a-new-project" aria-hidden="true">#</a> Set up a new project</h2><p>Create a new project and install all needed dependencies.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> myapp
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>myapp

<span class="token function">npm</span> init

<span class="token function">npm</span> <span class="token function">install</span> --save typescript @purista/core @purista/httpserver ts-node

<span class="token function">npm</span> <span class="token function">install</span> --save-dev @types/node

<span class="token function">mkdir</span> src
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Add to your <code>package.json</code>:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ts-node src/index.ts&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Create the main execution file <code>src/index.ts</code> with following content:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> DefaultEventBridge<span class="token punctuation">,</span> initLogger <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@purista/core&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> HttpServerService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@purista/httpserver&#39;</span>

<span class="token keyword">const</span> <span class="token function-variable function">main</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// initialize the logging</span>
  <span class="token keyword">const</span> baseLogger <span class="token operator">=</span> <span class="token function">initLogger</span><span class="token punctuation">(</span><span class="token string">&#39;debug&#39;</span><span class="token punctuation">)</span>

  <span class="token comment">// create eventbridge</span>
  <span class="token keyword">const</span> eventBridge <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultEventBridge</span><span class="token punctuation">(</span>baseLogger<span class="token punctuation">)</span>
  <span class="token comment">// start eventbridge (e.g. connect to broker)</span>
  <span class="token keyword">await</span> eventBridge<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// create and init a webserver</span>
  <span class="token keyword">const</span> httpServerService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HttpServerService</span><span class="token punctuation">(</span>baseLogger<span class="token punctuation">,</span> eventBridge<span class="token punctuation">)</span>

  <span class="token comment">// start the webserver</span>
  <span class="token keyword">await</span> httpServerService<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now you can start your new program with <code>npm start</code>.<br> It will start a http webserver on your local machine.</p>`,12),d=n("Open your browser and visit "),u={href:"http://localhost:9090",target:"_blank",rel:"noopener noreferrer"},v=n("http://localhost:9090"),k=n(" and you should see"),m=t(`<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;status&quot;</span><span class="token operator">:</span><span class="token number">404</span><span class="token punctuation">,</span><span class="token property">&quot;message&quot;</span><span class="token operator">:</span><span class="token string">&quot;Not Found&quot;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),b=n("The only, per default existing, endpoint is the OpenApi UI (swagger UI) "),h={href:"http://localhost:9090/api/",target:"_blank",rel:"noopener noreferrer"},g=n("http://localhost:9090/api/"),_=n(".");function y(f,w){const e=c("ExternalLinkIcon");return p(),i("div",null,[l,s("p",null,[d,s("a",u,[v,a(e)]),k]),m,s("p",null,[b,s("a",h,[g,a(e)]),_])])}var q=o(r,[["render",y],["__file","1_get-started.html.vue"]]);export{q as default};