import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as n,a as c,b as e,e as r,w as d,F as h,d as t,c as o,o as l}from"./app.65620c78.js";const u={},p=t("@purista/core"),_=t(" / "),f=t("Exports"),m=t(" / HandledError"),g=o('<h1 id="class-handlederror" tabindex="-1"><a class="header-anchor" href="#class-handlederror" aria-hidden="true">#</a> Class: HandledError</h1><p>A handled error is an error which is handled or thrown by business logic. It is wanted to expose it the outside world. Scenarios are input validation failures or &quot;404 Not Found&quot; errors which should be returned to the caller.</p><h2 id="hierarchy" tabindex="-1"><a class="header-anchor" href="#hierarchy" aria-hidden="true">#</a> Hierarchy</h2><ul><li><p><code>Error</code></p><p>\u21B3 <strong><code>HandledError</code></strong></p></li></ul><h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2><h3 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors" aria-hidden="true">#</a> Constructors</h3>',6),b=t("constructor"),x=e("h3",{id:"properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),t(" Properties")],-1),E=t("cause"),y=t("data"),k=t("errorCode"),H=t("message"),S=t("name"),T=t("stack"),C=t("traceId"),R=t("prepareStackTrace"),I=t("stackTraceLimit"),w=e("h3",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),t(" Methods")],-1),v=t("getErrorResponse"),D=t("toString"),L=t("captureStackTrace"),O=t("fromMessage"),N=o('<h2 id="constructors-1" tabindex="-1"><a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a> Constructors</h2><h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h3><p>\u2022 <strong>new HandledError</strong>(<code>errorCode</code>, <code>message?</code>, <code>data?</code>, <code>traceId?</code>)</p><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4>',4),j=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type")])],-1),M=e("td",{style:{"text-align":"left"}},[e("code",null,"errorCode")],-1),P={style:{"text-align":"left"}},B=e("code",null,"StatusCode",-1),F=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"message?")]),e("td",{style:{"text-align":"left"}},[e("code",null,"string")])],-1),V=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"data?")]),e("td",{style:{"text-align":"left"}},[e("code",null,"unknown")])],-1),q=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"traceId?")]),e("td",{style:{"text-align":"left"}},[e("code",null,"string")])],-1),z=e("h4",{id:"overrides",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overrides","aria-hidden":"true"},"#"),t(" Overrides")],-1),A=e("p",null,"Error.constructor",-1),G=e("h4",{id:"defined-in",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in","aria-hidden":"true"},"#"),t(" Defined in")],-1),J={href:"https://github.com/sebastianwessel/purista/blob/c4dff4d/src/core/HandledError.impl.ts#L10",target:"_blank",rel:"noopener noreferrer"},K=t("src/core/HandledError.impl.ts:10"),Q=o('<h2 id="properties-1" tabindex="-1"><a class="header-anchor" href="#properties-1" aria-hidden="true">#</a> Properties</h2><h3 id="cause" tabindex="-1"><a class="header-anchor" href="#cause" aria-hidden="true">#</a> cause</h3><p>\u2022 <code>Optional</code> <strong>cause</strong>: <code>Error</code></p><h4 id="inherited-from" tabindex="-1"><a class="header-anchor" href="#inherited-from" aria-hidden="true">#</a> Inherited from</h4><p>Error.cause</p><h4 id="defined-in-1" tabindex="-1"><a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a> Defined in</h4><p>node_modules/typescript/lib/lib.es2022.error.d.ts:26</p><hr><h3 id="data" tabindex="-1"><a class="header-anchor" href="#data" aria-hidden="true">#</a> data</h3><p>\u2022 <code>Optional</code> <strong>data</strong>: <code>unknown</code></p><hr><h3 id="errorcode" tabindex="-1"><a class="header-anchor" href="#errorcode" aria-hidden="true">#</a> errorCode</h3>',12),U=t("\u2022 "),W=e("strong",null,"errorCode",-1),X=t(": "),Y=e("code",null,"StatusCode",-1),Z=o('<hr><h3 id="message" tabindex="-1"><a class="header-anchor" href="#message" aria-hidden="true">#</a> message</h3><p>\u2022 <strong>message</strong>: <code>string</code></p><h4 id="inherited-from-1" tabindex="-1"><a class="header-anchor" href="#inherited-from-1" aria-hidden="true">#</a> Inherited from</h4><p>Error.message</p><h4 id="defined-in-2" tabindex="-1"><a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a> Defined in</h4><p>node_modules/typescript/lib/lib.es5.d.ts:1023</p><hr><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h3><p>\u2022 <strong>name</strong>: <code>string</code></p><h4 id="inherited-from-2" tabindex="-1"><a class="header-anchor" href="#inherited-from-2" aria-hidden="true">#</a> Inherited from</h4><p>Error.name</p><h4 id="defined-in-3" tabindex="-1"><a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a> Defined in</h4><p>node_modules/typescript/lib/lib.es5.d.ts:1022</p><hr><h3 id="stack" tabindex="-1"><a class="header-anchor" href="#stack" aria-hidden="true">#</a> stack</h3><p>\u2022 <code>Optional</code> <strong>stack</strong>: <code>string</code></p><h4 id="inherited-from-3" tabindex="-1"><a class="header-anchor" href="#inherited-from-3" aria-hidden="true">#</a> Inherited from</h4><p>Error.stack</p><h4 id="defined-in-4" tabindex="-1"><a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a> Defined in</h4><p>node_modules/typescript/lib/lib.es5.d.ts:1024</p><hr><h3 id="traceid" tabindex="-1"><a class="header-anchor" href="#traceid" aria-hidden="true">#</a> traceId</h3><p>\u2022 <code>Optional</code> <strong>traceId</strong>: <code>string</code></p><hr><h3 id="preparestacktrace" tabindex="-1"><a class="header-anchor" href="#preparestacktrace" aria-hidden="true">#</a> prepareStackTrace</h3><p>\u25AA <code>Static</code> <code>Optional</code> <strong>prepareStackTrace</strong>: (<code>err</code>: <code>Error</code>, <code>stackTraces</code>: <code>CallSite</code>[]) =&gt; <code>any</code></p><h4 id="type-declaration" tabindex="-1"><a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a> Type declaration</h4><p>\u25B8 (<code>err</code>, <code>stackTraces</code>): <code>any</code></p><p>Optional override for formatting stack traces</p><p><strong><code>see</code></strong> https://v8.dev/docs/stack-trace-api#customizing-stack-traces</p><h5 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>err</code></td><td style="text-align:left;"><code>Error</code></td></tr><tr><td style="text-align:left;"><code>stackTraces</code></td><td style="text-align:left;"><code>CallSite</code>[]</td></tr></tbody></table><h5 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h5><p><code>any</code></p><h4 id="inherited-from-4" tabindex="-1"><a class="header-anchor" href="#inherited-from-4" aria-hidden="true">#</a> Inherited from</h4><p>Error.prepareStackTrace</p><h4 id="defined-in-5" tabindex="-1"><a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a> Defined in</h4><p>node_modules/@types/node/globals.d.ts:11</p><hr><h3 id="stacktracelimit" tabindex="-1"><a class="header-anchor" href="#stacktracelimit" aria-hidden="true">#</a> stackTraceLimit</h3><p>\u25AA <code>Static</code> <strong>stackTraceLimit</strong>: <code>number</code></p><h4 id="inherited-from-5" tabindex="-1"><a class="header-anchor" href="#inherited-from-5" aria-hidden="true">#</a> Inherited from</h4><p>Error.stackTraceLimit</p><h4 id="defined-in-6" tabindex="-1"><a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a> Defined in</h4><p>node_modules/@types/node/globals.d.ts:13</p><h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h2><h3 id="geterrorresponse" tabindex="-1"><a class="header-anchor" href="#geterrorresponse" aria-hidden="true">#</a> getErrorResponse</h3>',48),$=t("\u25B8 "),ee=e("strong",null,"getErrorResponse",-1),te=t("(): "),re=e("code",null,"ErrorResponse",-1),ae=e("p",null,"Returns error response object",-1),de=e("h4",{id:"returns-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-1","aria-hidden":"true"},"#"),t(" Returns")],-1),oe=e("code",null,"ErrorResponse",-1),se=e("p",null,"ErrorResponse",-1),ne=e("h4",{id:"defined-in-7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-7","aria-hidden":"true"},"#"),t(" Defined in")],-1),ie={href:"https://github.com/sebastianwessel/purista/blob/c4dff4d/src/core/HandledError.impl.ts#L27",target:"_blank",rel:"noopener noreferrer"},ce=t("src/core/HandledError.impl.ts:27"),he=o('<hr><h3 id="tostring" tabindex="-1"><a class="header-anchor" href="#tostring" aria-hidden="true">#</a> toString</h3><p>\u25B8 <strong>toString</strong>(): <code>string</code></p><p>Returns stringified error response object</p><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2" aria-hidden="true">#</a> Returns</h4><p><code>string</code></p><p>ErrorResponse as string</p><h4 id="defined-in-8" tabindex="-1"><a class="header-anchor" href="#defined-in-8" aria-hidden="true">#</a> Defined in</h4>',8),le={href:"https://github.com/sebastianwessel/purista/blob/c4dff4d/src/core/HandledError.impl.ts#L42",target:"_blank",rel:"noopener noreferrer"},ue=t("src/core/HandledError.impl.ts:42"),pe=o('<hr><h3 id="capturestacktrace" tabindex="-1"><a class="header-anchor" href="#capturestacktrace" aria-hidden="true">#</a> captureStackTrace</h3><p>\u25B8 <code>Static</code> <strong>captureStackTrace</strong>(<code>targetObject</code>, <code>constructorOpt?</code>): <code>void</code></p><p>Create .stack property on a target object</p><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>targetObject</code></td><td style="text-align:left;"><code>object</code></td></tr><tr><td style="text-align:left;"><code>constructorOpt?</code></td><td style="text-align:left;"><code>Function</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3" aria-hidden="true">#</a> Returns</h4><p><code>void</code></p><h4 id="inherited-from-6" tabindex="-1"><a class="header-anchor" href="#inherited-from-6" aria-hidden="true">#</a> Inherited from</h4><p>Error.captureStackTrace</p><h4 id="defined-in-9" tabindex="-1"><a class="header-anchor" href="#defined-in-9" aria-hidden="true">#</a> Defined in</h4><p>node_modules/@types/node/globals.d.ts:4</p><hr><h3 id="frommessage" tabindex="-1"><a class="header-anchor" href="#frommessage" aria-hidden="true">#</a> fromMessage</h3>',14),_e=t("\u25B8 "),fe=e("code",null,"Static",-1),me=t(),ge=e("strong",null,"fromMessage",-1),be=t("("),xe=e("code",null,"message",-1),Ee=t("): "),ye=e("code",null,"HandledError",-1),ke=e("p",null,"Create a error object from EBMessage error message",-1),He=e("h4",{id:"parameters-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters-3","aria-hidden":"true"},"#"),t(" Parameters")],-1),Se=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),Te=e("td",{style:{"text-align":"left"}},[e("code",null,"message")],-1),Ce={style:{"text-align":"left"}},Re=e("code",null,"CommandErrorResponse",-1),Ie=e("td",{style:{"text-align":"left"}},"CommandErrorResponse",-1),we=e("h4",{id:"returns-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-4","aria-hidden":"true"},"#"),t(" Returns")],-1),ve=e("code",null,"HandledError",-1),De=e("p",null,"HandledError",-1),Le=e("h4",{id:"defined-in-10",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-10","aria-hidden":"true"},"#"),t(" Defined in")],-1),Oe={href:"https://github.com/sebastianwessel/purista/blob/c4dff4d/src/core/HandledError.impl.ts#L19",target:"_blank",rel:"noopener noreferrer"},Ne=t("src/core/HandledError.impl.ts:19");function je(Me,Pe){const a=n("RouterLink"),s=n("ExternalLinkIcon");return l(),c(h,null,[e("p",null,[r(a,{to:"/api/"},{default:d(()=>[p]),_:1}),_,r(a,{to:"/api/modules.html"},{default:d(()=>[f]),_:1}),m]),g,e("ul",null,[e("li",null,[r(a,{to:"/api/classes/HandledError.html#constructor"},{default:d(()=>[b]),_:1})])]),x,e("ul",null,[e("li",null,[r(a,{to:"/api/classes/HandledError.html#cause"},{default:d(()=>[E]),_:1})]),e("li",null,[r(a,{to:"/api/classes/HandledError.html#data"},{default:d(()=>[y]),_:1})]),e("li",null,[r(a,{to:"/api/classes/HandledError.html#errorcode"},{default:d(()=>[k]),_:1})]),e("li",null,[r(a,{to:"/api/classes/HandledError.html#message"},{default:d(()=>[H]),_:1})]),e("li",null,[r(a,{to:"/api/classes/HandledError.html#name"},{default:d(()=>[S]),_:1})]),e("li",null,[r(a,{to:"/api/classes/HandledError.html#stack"},{default:d(()=>[T]),_:1})]),e("li",null,[r(a,{to:"/api/classes/HandledError.html#traceid"},{default:d(()=>[C]),_:1})]),e("li",null,[r(a,{to:"/api/classes/HandledError.html#preparestacktrace"},{default:d(()=>[R]),_:1})]),e("li",null,[r(a,{to:"/api/classes/HandledError.html#stacktracelimit"},{default:d(()=>[I]),_:1})])]),w,e("ul",null,[e("li",null,[r(a,{to:"/api/classes/HandledError.html#geterrorresponse"},{default:d(()=>[v]),_:1})]),e("li",null,[r(a,{to:"/api/classes/HandledError.html#tostring"},{default:d(()=>[D]),_:1})]),e("li",null,[r(a,{to:"/api/classes/HandledError.html#capturestacktrace"},{default:d(()=>[L]),_:1})]),e("li",null,[r(a,{to:"/api/classes/HandledError.html#frommessage"},{default:d(()=>[O]),_:1})])]),N,e("table",null,[j,e("tbody",null,[e("tr",null,[M,e("td",P,[r(a,{to:"/api/enums/StatusCode.html"},{default:d(()=>[B]),_:1})])]),F,V,q])]),z,A,G,e("p",null,[e("a",J,[K,r(s)])]),Q,e("p",null,[U,W,X,r(a,{to:"/api/enums/StatusCode.html"},{default:d(()=>[Y]),_:1})]),Z,e("p",null,[$,ee,te,r(a,{to:"/api/modules.html#errorresponse"},{default:d(()=>[re]),_:1})]),ae,de,e("p",null,[r(a,{to:"/api/modules.html#errorresponse"},{default:d(()=>[oe]),_:1})]),se,ne,e("p",null,[e("a",ie,[ce,r(s)])]),he,e("p",null,[e("a",le,[ue,r(s)])]),pe,e("p",null,[_e,fe,me,ge,be,xe,Ee,r(a,{to:"/api/classes/HandledError.html"},{default:d(()=>[ye]),_:1})]),ke,He,e("table",null,[Se,e("tbody",null,[e("tr",null,[Te,e("td",Ce,[r(a,{to:"/api/modules.html#commanderrorresponse"},{default:d(()=>[Re]),_:1})]),Ie])])]),we,e("p",null,[r(a,{to:"/api/classes/HandledError.html"},{default:d(()=>[ve]),_:1})]),De,Le,e("p",null,[e("a",Oe,[Ne,r(s)])])],64)}var Ve=i(u,[["render",je],["__file","HandledError.html.vue"]]);export{Ve as default};