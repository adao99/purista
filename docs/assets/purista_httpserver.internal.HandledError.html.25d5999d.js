import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as i,b as e,e as s,w as o,d as t,a,r as l}from"./app.0777453f.js";const h={},c=t("PURISTA API - v1.3.1"),_=t(" / "),u=t("@purista/httpserver"),p=t(" / "),f=t("internal"),m=t(" / HandledError"),g=e("h1",{id:"class-handlederror",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#class-handlederror","aria-hidden":"true"},"#"),t(" Class: HandledError")],-1),x=t("@purista/httpserver"),b=t("."),E=t("internal"),y=t(".HandledError"),v=a('<p>A handled error is an error which is handled or thrown by business logic. It is wanted to expose it the outside world. Scenarios are input validation failures or &quot;404 Not Found&quot; errors which should be returned to the caller.</p><h2 id="hierarchy" tabindex="-1"><a class="header-anchor" href="#hierarchy" aria-hidden="true">#</a> Hierarchy</h2><ul><li><p><code>Error</code></p><p>\u21B3 <strong><code>HandledError</code></strong></p></li></ul><h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2><h3 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors" aria-hidden="true">#</a> Constructors</h3>',5),H=t("constructor"),R=e("h3",{id:"properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),t(" Properties")],-1),C=t("data"),S=t("errorCode"),w=t("traceId"),D=e("h3",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),t(" Methods")],-1),I=t("getErrorResponse"),N=t("toString"),k=t("fromMessage"),M=a('<h2 id="constructors-1" tabindex="-1"><a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a> Constructors</h2><h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h3><p>\u2022 <strong>new HandledError</strong>(<code>errorCode</code>, <code>message?</code>, <code>data?</code>, <code>traceId?</code>)</p><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4>',4),P=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type")])],-1),T=e("td",{style:{"text-align":"left"}},[e("code",null,"errorCode")],-1),B={style:{"text-align":"left"}},V=e("code",null,"StatusCode",-1),j=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"message?")]),e("td",{style:{"text-align":"left"}},[e("code",null,"string")])],-1),A=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"data?")]),e("td",{style:{"text-align":"left"}},[e("code",null,"unknown")])],-1),O=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"traceId?")]),e("td",{style:{"text-align":"left"}},[e("code",null,"string")])],-1),q=a('<h4 id="overrides" tabindex="-1"><a class="header-anchor" href="#overrides" aria-hidden="true">#</a> Overrides</h4><p>Error.constructor</p><h4 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in" aria-hidden="true">#</a> Defined in</h4><p>core/lib/types/core/HandledError.impl.d.ts:11</p><h2 id="properties-1" tabindex="-1"><a class="header-anchor" href="#properties-1" aria-hidden="true">#</a> Properties</h2><h3 id="data" tabindex="-1"><a class="header-anchor" href="#data" aria-hidden="true">#</a> data</h3><p>\u2022 <code>Optional</code> <strong>data</strong>: <code>unknown</code></p><h4 id="defined-in-1" tabindex="-1"><a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a> Defined in</h4><p>core/lib/types/core/HandledError.impl.d.ts:9</p><hr><h3 id="errorcode" tabindex="-1"><a class="header-anchor" href="#errorcode" aria-hidden="true">#</a> errorCode</h3>',11),L=t("\u2022 "),F=e("strong",null,"errorCode",-1),U=t(": "),z=e("code",null,"StatusCode",-1),G=a('<h4 id="defined-in-2" tabindex="-1"><a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a> Defined in</h4><p>core/lib/types/core/HandledError.impl.d.ts:8</p><hr><h3 id="traceid" tabindex="-1"><a class="header-anchor" href="#traceid" aria-hidden="true">#</a> traceId</h3><p>\u2022 <code>Optional</code> <strong>traceId</strong>: <code>string</code></p><h4 id="defined-in-3" tabindex="-1"><a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a> Defined in</h4><p>core/lib/types/core/HandledError.impl.d.ts:10</p><h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h2><h3 id="geterrorresponse" tabindex="-1"><a class="header-anchor" href="#geterrorresponse" aria-hidden="true">#</a> getErrorResponse</h3>',9),J=t("\u25B8 "),K=e("strong",null,"getErrorResponse",-1),Q=t("(): "),W=e("code",null,"Readonly",-1),X=t("<"),Y=e("code",null,"ErrorResponse",-1),Z=t(">"),$=e("p",null,"Returns error response object",-1),ee=e("h4",{id:"returns",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns","aria-hidden":"true"},"#"),t(" Returns")],-1),te=e("code",null,"Readonly",-1),re=t("<"),se=e("code",null,"ErrorResponse",-1),oe=t(">"),ae=a('<p>ErrorResponse</p><h4 id="defined-in-4" tabindex="-1"><a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a> Defined in</h4><p>core/lib/types/core/HandledError.impl.d.ts:22</p><hr><h3 id="tostring" tabindex="-1"><a class="header-anchor" href="#tostring" aria-hidden="true">#</a> toString</h3><p>\u25B8 <strong>toString</strong>(): <code>string</code></p><p>Returns stringified error response object</p><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1" aria-hidden="true">#</a> Returns</h4><p><code>string</code></p><p>ErrorResponse as string</p><h4 id="defined-in-5" tabindex="-1"><a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a> Defined in</h4><p>core/lib/types/core/HandledError.impl.d.ts:27</p><hr><h3 id="frommessage" tabindex="-1"><a class="header-anchor" href="#frommessage" aria-hidden="true">#</a> fromMessage</h3>',14),de=t("\u25B8 "),ne=e("code",null,"Static",-1),ie=t(),le=e("strong",null,"fromMessage",-1),he=t("("),ce=e("code",null,"message",-1),_e=t("): "),ue=e("code",null,"HandledError",-1),pe=e("p",null,"Create a error object from EBMessage error message",-1),fe=e("h4",{id:"parameters-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters-1","aria-hidden":"true"},"#"),t(" Parameters")],-1),me=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),ge=e("td",{style:{"text-align":"left"}},[e("code",null,"message")],-1),xe={style:{"text-align":"left"}},be=e("code",null,"Readonly",-1),Ee=t("<"),ye=e("code",null,"CommandErrorResponse",-1),ve=t(">"),He=e("td",{style:{"text-align":"left"}},"CommandErrorResponse",-1),Re=e("h4",{id:"returns-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-2","aria-hidden":"true"},"#"),t(" Returns")],-1),Ce=e("code",null,"HandledError",-1),Se=e("p",null,"HandledError",-1),we=e("h4",{id:"defined-in-6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-6","aria-hidden":"true"},"#"),t(" Defined in")],-1),De=e("p",null,"core/lib/types/core/HandledError.impl.d.ts:17",-1);function Ie(Ne,ke){const r=l("RouterLink");return n(),i("div",null,[e("p",null,[s(r,{to:"/api/"},{default:o(()=>[c]),_:1}),_,s(r,{to:"/api/modules/purista_httpserver.html"},{default:o(()=>[u]),_:1}),p,s(r,{to:"/api/modules/purista_httpserver.internal.html"},{default:o(()=>[f]),_:1}),m]),g,e("p",null,[s(r,{to:"/api/modules/purista_httpserver.html"},{default:o(()=>[x]),_:1}),b,s(r,{to:"/api/modules/purista_httpserver.internal.html"},{default:o(()=>[E]),_:1}),y]),v,e("ul",null,[e("li",null,[s(r,{to:"/api/classes/purista_httpserver.internal.HandledError.html#constructor"},{default:o(()=>[H]),_:1})])]),R,e("ul",null,[e("li",null,[s(r,{to:"/api/classes/purista_httpserver.internal.HandledError.html#data"},{default:o(()=>[C]),_:1})]),e("li",null,[s(r,{to:"/api/classes/purista_httpserver.internal.HandledError.html#errorcode"},{default:o(()=>[S]),_:1})]),e("li",null,[s(r,{to:"/api/classes/purista_httpserver.internal.HandledError.html#traceid"},{default:o(()=>[w]),_:1})])]),D,e("ul",null,[e("li",null,[s(r,{to:"/api/classes/purista_httpserver.internal.HandledError.html#geterrorresponse"},{default:o(()=>[I]),_:1})]),e("li",null,[s(r,{to:"/api/classes/purista_httpserver.internal.HandledError.html#tostring"},{default:o(()=>[N]),_:1})]),e("li",null,[s(r,{to:"/api/classes/purista_httpserver.internal.HandledError.html#frommessage"},{default:o(()=>[k]),_:1})])]),M,e("table",null,[P,e("tbody",null,[e("tr",null,[T,e("td",B,[s(r,{to:"/api/enums/purista_httpserver.internal.StatusCode.html"},{default:o(()=>[V]),_:1})])]),j,A,O])]),q,e("p",null,[L,F,U,s(r,{to:"/api/enums/purista_httpserver.internal.StatusCode.html"},{default:o(()=>[z]),_:1})]),G,e("p",null,[J,K,Q,W,X,s(r,{to:"/api/modules/purista_httpserver.internal.html#errorresponse"},{default:o(()=>[Y]),_:1}),Z]),$,ee,e("p",null,[te,re,s(r,{to:"/api/modules/purista_httpserver.internal.html#errorresponse"},{default:o(()=>[se]),_:1}),oe]),ae,e("p",null,[de,ne,ie,le,he,ce,_e,s(r,{to:"/api/classes/purista_httpserver.internal.HandledError.html"},{default:o(()=>[ue]),_:1})]),pe,fe,e("table",null,[me,e("tbody",null,[e("tr",null,[ge,e("td",xe,[be,Ee,s(r,{to:"/api/modules/purista_httpserver.internal.html#commanderrorresponse-1"},{default:o(()=>[ye]),_:1}),ve]),He])])]),Re,e("p",null,[s(r,{to:"/api/classes/purista_httpserver.internal.HandledError.html"},{default:o(()=>[Ce]),_:1})]),Se,we,De])}var Te=d(h,[["render",Ie],["__file","purista_httpserver.internal.HandledError.html.vue"]]);export{Te as default};