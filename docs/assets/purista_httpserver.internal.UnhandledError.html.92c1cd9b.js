import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as i,b as e,e as n,w as s,d as t,a as o,r as l}from"./app.2ad3bbee.js";const h={},c=t("PURISTA API - v1.4.3"),_=t(" / "),u=t("@purista/httpserver"),p=t(" / "),f=t("internal"),m=t(" / UnhandledError"),g=e("h1",{id:"class-unhandlederror",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#class-unhandlederror","aria-hidden":"true"},"#"),t(" Class: UnhandledError")],-1),b=t("@purista/httpserver"),x=t("."),E=t("internal"),v=t(".UnhandledError"),y=o('<p>A unhandled error will be thrown if some error response is returned during invoking a service function or when the invocation timed out. This error is not handled by business logic and it is maybe unwanted to expose this error outside.</p><p>Unhandled error are automatically converted into &quot;500 Internal Server Error&quot; to the outside world.</p><h2 id="hierarchy" tabindex="-1"><a class="header-anchor" href="#hierarchy" aria-hidden="true">#</a> Hierarchy</h2><ul><li><p><code>Error</code></p><p>\u21B3 <strong><code>UnhandledError</code></strong></p></li></ul><h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2><h3 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors" aria-hidden="true">#</a> Constructors</h3>',6),U=t("constructor"),R=e("h3",{id:"properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),t(" Properties")],-1),C=t("data"),S=t("errorCode"),w=t("traceId"),D=e("h3",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),t(" Methods")],-1),H=t("getErrorResponse"),I=t("intoHandledError"),k=t("toString"),M=t("fromMessage"),N=o('<h2 id="constructors-1" tabindex="-1"><a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a> Constructors</h2><h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h3><p>\u2022 <strong>new UnhandledError</strong>(<code>errorCode?</code>, <code>message?</code>, <code>data?</code>, <code>traceId?</code>)</p><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4>',4),P=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type")])],-1),T=e("td",{style:{"text-align":"left"}},[e("code",null,"errorCode?")],-1),B={style:{"text-align":"left"}},V=e("code",null,"StatusCode",-1),j=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"message?")]),e("td",{style:{"text-align":"left"}},[e("code",null,"string")])],-1),A=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"data?")]),e("td",{style:{"text-align":"left"}},[e("code",null,"unknown")])],-1),O=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"traceId?")]),e("td",{style:{"text-align":"left"}},[e("code",null,"string")])],-1),q=o('<h4 id="overrides" tabindex="-1"><a class="header-anchor" href="#overrides" aria-hidden="true">#</a> Overrides</h4><p>Error.constructor</p><h4 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in" aria-hidden="true">#</a> Defined in</h4><p>core/lib/types/core/UnhandledError.impl.d.ts:15</p><h2 id="properties-1" tabindex="-1"><a class="header-anchor" href="#properties-1" aria-hidden="true">#</a> Properties</h2><h3 id="data" tabindex="-1"><a class="header-anchor" href="#data" aria-hidden="true">#</a> data</h3><p>\u2022 <code>Optional</code> <strong>data</strong>: <code>unknown</code></p><h4 id="defined-in-1" tabindex="-1"><a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a> Defined in</h4><p>core/lib/types/core/UnhandledError.impl.d.ts:13</p><hr><h3 id="errorcode" tabindex="-1"><a class="header-anchor" href="#errorcode" aria-hidden="true">#</a> errorCode</h3>',11),L=t("\u2022 "),z=e("strong",null,"errorCode",-1),F=t(": "),G=e("code",null,"StatusCode",-1),J=o('<h4 id="defined-in-2" tabindex="-1"><a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a> Defined in</h4><p>core/lib/types/core/UnhandledError.impl.d.ts:12</p><hr><h3 id="traceid" tabindex="-1"><a class="header-anchor" href="#traceid" aria-hidden="true">#</a> traceId</h3><p>\u2022 <code>Optional</code> <strong>traceId</strong>: <code>string</code></p><h4 id="defined-in-3" tabindex="-1"><a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a> Defined in</h4><p>core/lib/types/core/UnhandledError.impl.d.ts:14</p><h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h2><h3 id="geterrorresponse" tabindex="-1"><a class="header-anchor" href="#geterrorresponse" aria-hidden="true">#</a> getErrorResponse</h3>',9),K=t("\u25B8 "),Q=e("strong",null,"getErrorResponse",-1),W=t("(): "),X=e("code",null,"Readonly",-1),Y=t("<"),Z=e("code",null,"ErrorResponse",-1),$=t(">"),ee=e("p",null,"Returns error response object",-1),te=e("h4",{id:"returns",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns","aria-hidden":"true"},"#"),t(" Returns")],-1),re=e("code",null,"Readonly",-1),ne=t("<"),se=e("code",null,"ErrorResponse",-1),oe=t(">"),de=e("p",null,"ErrorResponse",-1),ae=e("h4",{id:"defined-in-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-4","aria-hidden":"true"},"#"),t(" Defined in")],-1),ie=e("p",null,"core/lib/types/core/UnhandledError.impl.d.ts:31",-1),le=e("hr",null,null,-1),he=e("h3",{id:"intohandlederror",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#intohandlederror","aria-hidden":"true"},"#"),t(" intoHandledError")],-1),ce=t("\u25B8 "),_e=e("strong",null,"intoHandledError",-1),ue=t("(): "),pe=e("code",null,"HandledError",-1),fe=e("p",null,"Create a handled error from unhandled error",-1),me=e("h4",{id:"returns-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-1","aria-hidden":"true"},"#"),t(" Returns")],-1),ge=e("code",null,"HandledError",-1),be=o('<p>HandledError</p><h4 id="defined-in-5" tabindex="-1"><a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a> Defined in</h4><p>core/lib/types/core/UnhandledError.impl.d.ts:26</p><hr><h3 id="tostring" tabindex="-1"><a class="header-anchor" href="#tostring" aria-hidden="true">#</a> toString</h3><p>\u25B8 <strong>toString</strong>(): <code>string</code></p><p>Returns stringified error response object</p><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2" aria-hidden="true">#</a> Returns</h4><p><code>string</code></p><p>ErrorResponse as string</p><h4 id="defined-in-6" tabindex="-1"><a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a> Defined in</h4><p>core/lib/types/core/UnhandledError.impl.d.ts:36</p><hr><h3 id="frommessage" tabindex="-1"><a class="header-anchor" href="#frommessage" aria-hidden="true">#</a> fromMessage</h3>',14),xe=t("\u25B8 "),Ee=e("code",null,"Static",-1),ve=t(),ye=e("strong",null,"fromMessage",-1),Ue=t("("),Re=e("code",null,"message",-1),Ce=t("): "),Se=e("code",null,"UnhandledError",-1),we=e("p",null,"Create a error object from EBMessage error message",-1),De=e("h4",{id:"parameters-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters-1","aria-hidden":"true"},"#"),t(" Parameters")],-1),He=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),Ie=e("td",{style:{"text-align":"left"}},[e("code",null,"message")],-1),ke={style:{"text-align":"left"}},Me=e("code",null,"Readonly",-1),Ne=t("<"),Pe=e("code",null,"CommandErrorResponse",-1),Te=t(">"),Be=e("td",{style:{"text-align":"left"}},"CommandErrorResponse",-1),Ve=e("h4",{id:"returns-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-3","aria-hidden":"true"},"#"),t(" Returns")],-1),je=e("code",null,"UnhandledError",-1),Ae=e("p",null,"UnhandledError",-1),Oe=e("h4",{id:"defined-in-7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-7","aria-hidden":"true"},"#"),t(" Defined in")],-1),qe=e("p",null,"core/lib/types/core/UnhandledError.impl.d.ts:21",-1);function Le(ze,Fe){const r=l("RouterLink");return a(),i("div",null,[e("p",null,[n(r,{to:"/api/"},{default:s(()=>[c]),_:1}),_,n(r,{to:"/api/modules/purista_httpserver.html"},{default:s(()=>[u]),_:1}),p,n(r,{to:"/api/modules/purista_httpserver.internal.html"},{default:s(()=>[f]),_:1}),m]),g,e("p",null,[n(r,{to:"/api/modules/purista_httpserver.html"},{default:s(()=>[b]),_:1}),x,n(r,{to:"/api/modules/purista_httpserver.internal.html"},{default:s(()=>[E]),_:1}),v]),y,e("ul",null,[e("li",null,[n(r,{to:"/api/classes/purista_httpserver.internal.UnhandledError.html#constructor"},{default:s(()=>[U]),_:1})])]),R,e("ul",null,[e("li",null,[n(r,{to:"/api/classes/purista_httpserver.internal.UnhandledError.html#data"},{default:s(()=>[C]),_:1})]),e("li",null,[n(r,{to:"/api/classes/purista_httpserver.internal.UnhandledError.html#errorcode"},{default:s(()=>[S]),_:1})]),e("li",null,[n(r,{to:"/api/classes/purista_httpserver.internal.UnhandledError.html#traceid"},{default:s(()=>[w]),_:1})])]),D,e("ul",null,[e("li",null,[n(r,{to:"/api/classes/purista_httpserver.internal.UnhandledError.html#geterrorresponse"},{default:s(()=>[H]),_:1})]),e("li",null,[n(r,{to:"/api/classes/purista_httpserver.internal.UnhandledError.html#intohandlederror"},{default:s(()=>[I]),_:1})]),e("li",null,[n(r,{to:"/api/classes/purista_httpserver.internal.UnhandledError.html#tostring"},{default:s(()=>[k]),_:1})]),e("li",null,[n(r,{to:"/api/classes/purista_httpserver.internal.UnhandledError.html#frommessage"},{default:s(()=>[M]),_:1})])]),N,e("table",null,[P,e("tbody",null,[e("tr",null,[T,e("td",B,[n(r,{to:"/api/enums/purista_httpserver.internal.StatusCode.html"},{default:s(()=>[V]),_:1})])]),j,A,O])]),q,e("p",null,[L,z,F,n(r,{to:"/api/enums/purista_httpserver.internal.StatusCode.html"},{default:s(()=>[G]),_:1})]),J,e("p",null,[K,Q,W,X,Y,n(r,{to:"/api/modules/purista_httpserver.internal.html#errorresponse"},{default:s(()=>[Z]),_:1}),$]),ee,te,e("p",null,[re,ne,n(r,{to:"/api/modules/purista_httpserver.internal.html#errorresponse"},{default:s(()=>[se]),_:1}),oe]),de,ae,ie,le,he,e("p",null,[ce,_e,ue,n(r,{to:"/api/classes/purista_httpserver.internal.HandledError.html"},{default:s(()=>[pe]),_:1})]),fe,me,e("p",null,[n(r,{to:"/api/classes/purista_httpserver.internal.HandledError.html"},{default:s(()=>[ge]),_:1})]),be,e("p",null,[xe,Ee,ve,ye,Ue,Re,Ce,n(r,{to:"/api/classes/purista_httpserver.internal.UnhandledError.html"},{default:s(()=>[Se]),_:1})]),we,De,e("table",null,[He,e("tbody",null,[e("tr",null,[Ie,e("td",ke,[Me,Ne,n(r,{to:"/api/modules/purista_httpserver.internal.html#commanderrorresponse-1"},{default:s(()=>[Pe]),_:1}),Te]),Be])])]),Ve,e("p",null,[n(r,{to:"/api/classes/purista_httpserver.internal.UnhandledError.html"},{default:s(()=>[je]),_:1})]),Ae,Oe,qe])}var Ke=d(h,[["render",Le],["__file","purista_httpserver.internal.UnhandledError.html.vue"]]);export{Ke as default};