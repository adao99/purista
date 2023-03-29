import{_ as o,W as i,X as p,Z as n,$ as e,a0 as a,Y as t,D as l}from"./framework-d89ed822.js";const c="/graphic/openapi_screenshot.png",r={},d=n("p",null,[e("It is essential in most use cases, to expose certain functionality to clients."),n("br"),e(" A common way is a REST API.")],-1),u=n("p",null,[e("PURISTA provides the "),n("code",null,"@purista/httpserver"),e(" package which contains the service "),n("code",null,"HttpServerService"),e(", which spins up a http server.")],-1),h=n("p",null,[e("The "),n("code",null,"HttpServerService"),e(" is a service which exposes commands of services as http endpoints. All exposed commands must be marked as exposed endpoints in the CommandBuilder.")],-1),v=n("p",null,"While the main focus is on development and debug, the HttpServerService will also fit for small projects or running on IoT/edge.",-1),f={href:"https://www.fastify.io/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.fastify.io/ecosystem/",target:"_blank",rel:"noopener noreferrer"},k=t('<p>The service itself, does not use the fastify router or schema validation for exposed commands.<br> There is one route <code>ALL</code>, which registers a handler with own router to be able to add and remove routes dynamically.</p><h2 id="openapi" tabindex="-1"><a class="header-anchor" href="#openapi" aria-hidden="true">#</a> OpenAPI</h2><p>The <code>HttpServerService</code> can also be configured, to provide the OpenApi-UI in browsers.<br> The OpenApi definitions is created from the CommandBuilder settings of each command.<br> This means, that there are no additional steps or code required, to provide the OpenApi definition.<br> It is autogenerated mostly from input and output schema definitions.</p><p><img src="'+c+'" alt="OpenAPI"></p><p>When running on local and with default configuration:</p>',5),g={href:"http://localhost:9090/api",target:"_blank",rel:"noopener noreferrer"},b={href:"http://localhost:9090/api/openapi.json",target:"_blank",rel:"noopener noreferrer"},_=t(`<p>You will see, that the descriptions for commands are used in the OpenAPI documentation.<br> Also, if the <code>@anatine/zod-openapi</code> package is used, the extra information from schema is used to improve the OpenAPI documentation.</p><h2 id="usage-example" tabindex="-1"><a class="header-anchor" href="#usage-example" aria-hidden="true">#</a> Usage example</h2><p>Currently, you must ensure, that the <code>HttpServerService</code> instance is started before all other services!</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> fastifyStatic <span class="token keyword">from</span> <span class="token string">&#39;@fastify/static&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> DefaultEventBridge<span class="token punctuation">,</span> gracefulShutdown<span class="token punctuation">,</span> initLogger <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@purista/core&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> httpServerV1Service<span class="token punctuation">,</span> HttpServerServiceV1Config <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@purista/httpserver&#39;</span>

<span class="token keyword">const</span> <span class="token function-variable function">main</span> <span class="token operator">=</span> <span class="token keyword">async</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> logger <span class="token operator">=</span> <span class="token function">initLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> eventBridge <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultEventBridge</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> httpServerConfig<span class="token operator">:</span> HttpServerServiceV1Config <span class="token operator">=</span> <span class="token punctuation">{</span>
    fastify<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    port<span class="token operator">:</span> <span class="token number">8080</span><span class="token punctuation">,</span>
    logLevel<span class="token operator">:</span> <span class="token string">&#39;debug&#39;</span><span class="token punctuation">,</span>
    domain<span class="token operator">:</span> <span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span>
    apiMountPath<span class="token operator">:</span> <span class="token string">&#39;/api&#39;</span><span class="token punctuation">,</span>
    openApi<span class="token operator">:</span> <span class="token punctuation">{</span>
      enabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      info<span class="token operator">:</span> <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">&#39;backend api&#39;</span><span class="token punctuation">,</span>
        description<span class="token operator">:</span> <span class="token string">&#39;OpenApi definition for server endpoints&#39;</span><span class="token punctuation">,</span>
        version<span class="token operator">:</span> <span class="token string">&#39;1.0.0&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> httpServerService <span class="token operator">=</span> httpServerV1Service<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span>eventBridge<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    serviceConfig<span class="token operator">:</span> httpServerConfig<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// optional: add a static file handler</span>
  <span class="token keyword">const</span> defaultPublicPath <span class="token operator">=</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;..&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;public&#39;</span><span class="token punctuation">)</span>
  httpServerService<span class="token punctuation">.</span>server<span class="token operator">?.</span><span class="token function">register</span><span class="token punctuation">(</span>fastifyStatic<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    root<span class="token operator">:</span> defaultPublicPath<span class="token punctuation">,</span>
    decorateReply<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// start the webserver</span>
  <span class="token keyword">await</span> httpServerService<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// and and start your services here</span>
  <span class="token comment">// ...</span>
  <span class="token comment">// ...</span>

  <span class="token function">gracefulShutdown</span><span class="token punctuation">(</span>logger<span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token comment">// start with the event bridge to no longer accept incoming messages</span>
    eventBridge<span class="token punctuation">,</span>
    <span class="token comment">// shut down optional services</span>
    <span class="token comment">// ...</span>
    <span class="token comment">// ...</span>
    httpServerService<span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="endpoints" tabindex="-1"><a class="header-anchor" href="#endpoints" aria-hidden="true">#</a> Endpoints</h2><p>The generated endpoints will be mounted below the <code>apiMountPath</code> which is set in the configuration.<br> Endpoints will automatically add the service version, like <code>/api/v1/register</code> for command <code>register</code> of a service with version <code>2</code>.<br> This way, you can expose a versioned API.</p><p>The <code>/healthz</code> GET endpoint is a fixed route.</p><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2>`,8),y=n("strong",null,"fastify",-1),w={href:"https://www.fastify.io/docs/latest/Reference/Server/",target:"_blank",rel:"noopener noreferrer"},S=t("<li><strong>logLevel</strong>: <code>info</code>, <code>error</code>, <code>warn</code>, <code>debug</code>, <code>trace</code>, <code>fatal</code></li><li><strong>port</strong>: the port on which the server should listen (default <code>9090</code>)</li><li><strong>host</strong>: the host (default empty string),</li><li><strong>domain</strong>: the domain <code>localhost</code>,</li><li><strong>uploadDir</strong>: the directory where file uploads should get stored (default <code>undefined</code>),</li><li><strong>cookieSecret</strong>: (default <code>undefined</code>),</li><li><strong>apiMountPath</strong>: (default <code>/api</code>),</li><li><strong>enableHelmet</strong>: enable/disable helmet plugin (default <code>true</code>),</li><li><strong>enableHealthz</strong>: enable/disable health endpoint on <code>/healthz</code> (default <code>true</code>),</li>",9),A=n("strong",null,"helmetOptions",-1),x={href:"https://github.com/fastify/fastify-helmet",target:"_blank",rel:"noopener noreferrer"},O=n("code",null,"undefined",-1),I=n("li",null,[n("strong",null,"enableCompress"),e(": enable/disable compression plugin (default "),n("code",null,"true"),e("),")],-1),P=n("strong",null,"compressOptions",-1),T={href:"https://github.com/fastify/fastify-compress",target:"_blank",rel:"noopener noreferrer"},C=n("code",null,"undefined",-1),B=n("li",null,[n("strong",null,"enableCors"),e(": enable/disable cors plugin (default "),n("code",null,"false"),e("),")],-1),E=n("strong",null,"corsOptions",-1),H={href:"https://github.com/fastify/fastify-cors",target:"_blank",rel:"noopener noreferrer"},L=n("code",null,"undefined",-1),V=t("<li><strong>openApi</strong>: the OpenApi configuration <ul><li><strong>enabled</strong>: enable/disable OpenApi UI (default <code>true</code>),</li><li><strong>path</strong>: the endpoint to be used for the OpenAPI UI (default <code>/api</code>),</li><li><strong>info</strong>: OpenAPI documentation info: <ul><li><strong>title</strong>: the title of the documentation (default <code>Server api</code>),</li><li><strong>description</strong>: the description of the documentation (default <code>OpenApi definition for server endpoints</code>),</li><li><strong>version</strong>: the version of the documentation (default <code>1.0.0</code>),</li></ul></li><li><strong>servers</strong>: Array of servers to be added to the OpenAPI documentation (default <code>undefined</code>),</li><li><strong>components</strong>: (default <code>undefined</code>),</li><li><strong>security</strong>: (default <code>undefined</code>),</li><li><strong>externalDocs</strong>: (default <code>undefined</code>),</li><li><strong>tags</strong>: (default <code>undefined</code>),</li></ul></li>",1);function U(D,N){const s=l("ExternalLinkIcon");return i(),p("div",null,[d,u,h,v,n("p",null,[e("Under the hood, "),n("a",f,[e("fastify"),a(s)]),e(" is used as basement. Because of this, the whole "),n("a",m,[e("fastify ecosystem"),a(s)]),e(" can be used and integrated.")]),k,n("ul",null,[n("li",null,[e("the OpenAPI UI is available on "),n("a",g,[e("http://localhost:9090/api"),a(s)])]),n("li",null,[e("the OpenAPI definition in JSON format on "),n("a",b,[e("http://localhost:9090/api/openapi.json"),a(s)])])]),_,n("ul",null,[n("li",null,[y,e(": the Fastify configuration see "),n("a",w,[e("fastify.io"),a(s)])]),S,n("li",null,[A,e(": Options for helmet plugin see "),n("a",x,[e("@fastify/helmet documentation"),a(s)]),e(" (default "),O,e("),")]),I,n("li",null,[P,e(": Options for compression plugin see "),n("a",T,[e("@fastify/compress documentation"),a(s)]),e(" (default "),C,e("),")]),B,n("li",null,[E,e(": Options for cors plugin see "),n("a",H,[e("@fastify/cors documentation"),a(s)]),e(" (default "),L,e("),")]),V])])}const R=o(r,[["render",U],["__file","0_http_server_service.html.vue"]]);export{R as default};
