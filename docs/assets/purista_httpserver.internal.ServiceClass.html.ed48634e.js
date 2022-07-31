import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{o as d,c as o,b as e,e as n,w as a,d as t,a as i,r as l}from"./app.846e8e9a.js";const c={},h=t("PURISTA API - v1.3.1"),_=t(" / "),u=t("@purista/httpserver"),p=t(" / "),f=t("internal"),v=t(" / ServiceClass"),m=e("h1",{id:"class-serviceclass-configtype",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#class-serviceclass-configtype","aria-hidden":"true"},"#"),t(" Class: ServiceClass<ConfigType>")],-1),y=t("@purista/httpserver"),b=t("."),g=t("internal"),x=t(".ServiceClass"),E=i(`<p>Abstract base service class which should be extended by the base service class. The base class should provide basic functions to use the event bridge.</p><p>Every service should extends the base class and only implement logic used in this service.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">MyBaseService</span> <span class="token keyword">extends</span> <span class="token class-name">Service</span> <span class="token punctuation">{</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a> Type parameters</h2><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>ConfigType</code></td><td style="text-align:left;"><code>unknown</code> | <code>undefined</code></td></tr></tbody></table><h2 id="hierarchy" tabindex="-1"><a class="header-anchor" href="#hierarchy" aria-hidden="true">#</a> Hierarchy</h2>`,6),S=e("code",null,"GenericEventEmitter",-1),C=t("<"),k=e("code",null,"ServiceEvents",-1),T=t(">"),N=e("p",null,[t("\u21B3 "),e("strong",null,[e("code",null,"ServiceClass")])],-1),w=t("\u21B3\u21B3 "),G=e("code",null,"Service",-1),K=e("h2",{id:"table-of-contents",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#table-of-contents","aria-hidden":"true"},"#"),t(" Table of contents")],-1),P=e("h3",{id:"constructors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#constructors","aria-hidden":"true"},"#"),t(" Constructors")],-1),R=t("constructor"),D=e("h3",{id:"properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),t(" Properties")],-1),A=t("config"),B=t("eventBridge"),I=t("info"),V=e("h3",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),t(" Methods")],-1),M=t("destroy"),L=t("emit"),H=t("off"),U=t("on"),j=t("registerCommand"),q=t("start"),z=i('<h2 id="constructors-1" tabindex="-1"><a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a> Constructors</h2><h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h3><p>\u2022 <strong>new ServiceClass</strong>&lt;<code>ConfigType</code>&gt;()</p><h4 id="type-parameters-1" tabindex="-1"><a class="header-anchor" href="#type-parameters-1" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>ConfigType</code></td><td style="text-align:left;"><code>unknown</code></td></tr></tbody></table><h4 id="inherited-from" tabindex="-1"><a class="header-anchor" href="#inherited-from" aria-hidden="true">#</a> Inherited from</h4>',6),F=t("GenericEventEmitter"),J=t("."),O=t("constructor"),Q=i('<h2 id="properties-1" tabindex="-1"><a class="header-anchor" href="#properties-1" aria-hidden="true">#</a> Properties</h2><h3 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> config</h3><p>\u2022 <code>Abstract</code> <strong>config</strong>: <code>ConfigType</code></p><h4 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in" aria-hidden="true">#</a> Defined in</h4><p>core/lib/types/core/types/ServiceClass.d.ts:29</p><hr><h3 id="eventbridge" tabindex="-1"><a class="header-anchor" href="#eventbridge" aria-hidden="true">#</a> eventBridge</h3>',7),W=t("\u2022 "),X=e("code",null,"Protected",-1),Y=t(),Z=e("code",null,"Abstract",-1),$=t(),ee=e("strong",null,"eventBridge",-1),te=t(": "),se=e("code",null,"EventBridge",-1),ne=e("p",null,"The event bridge instance",-1),ae=e("h4",{id:"defined-in-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-1","aria-hidden":"true"},"#"),t(" Defined in")],-1),ie=e("p",null,"core/lib/types/core/types/ServiceClass.d.ts:33",-1),re=e("hr",null,null,-1),de=e("h3",{id:"info",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#info","aria-hidden":"true"},"#"),t(" info")],-1),oe=t("\u2022 "),le=e("code",null,"Protected",-1),ce=t(),he=e("code",null,"Readonly",-1),_e=t(),ue=e("code",null,"Abstract",-1),pe=t(),fe=e("strong",null,"info",-1),ve=t(": "),me=e("code",null,"ServiceInfoType",-1),ye=i('<p>General service info Service name, service version and some human readable description</p><h4 id="defined-in-2" tabindex="-1"><a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a> Defined in</h4><p>core/lib/types/core/types/ServiceClass.d.ts:28</p><h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h2><h3 id="destroy" tabindex="-1"><a class="header-anchor" href="#destroy" aria-hidden="true">#</a> destroy</h3><p>\u25B8 <code>Abstract</code> <strong>destroy</strong>(): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>Shut down the service</p><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in-3" tabindex="-1"><a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a> Defined in</h4><p>core/lib/types/core/types/ServiceClass.d.ts:44</p><hr><h3 id="emit" tabindex="-1"><a class="header-anchor" href="#emit" aria-hidden="true">#</a> emit</h3><p>\u25B8 <strong>emit</strong>&lt;<code>K</code>&gt;(<code>eventName</code>, <code>params</code>): <code>void</code></p><h4 id="type-parameters-2" tabindex="-1"><a class="header-anchor" href="#type-parameters-2" aria-hidden="true">#</a> Type parameters</h4>',15),be=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type")])],-1),ge=e("td",{style:{"text-align":"left"}},[e("code",null,"K")],-1),xe={style:{"text-align":"left"}},Ee=t("extends "),Se=e("code",null,"EventKey",-1),Ce=t("<"),ke=e("code",null,"ServiceEvents",-1),Te=t(">"),Ne=e("h4",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),t(" Parameters")],-1),we=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type")])],-1),Ge=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"eventName")]),e("td",{style:{"text-align":"left"}},[e("code",null,"K")])],-1),Ke=e("td",{style:{"text-align":"left"}},[e("code",null,"params")],-1),Pe={style:{"text-align":"left"}},Re=e("code",null,"ServiceEvents",-1),De=t("["),Ae=e("code",null,"K",-1),Be=t("]"),Ie=e("h4",{id:"returns-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-1","aria-hidden":"true"},"#"),t(" Returns")],-1),Ve=e("p",null,[e("code",null,"void")],-1),Me=e("h4",{id:"inherited-from-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-1","aria-hidden":"true"},"#"),t(" Inherited from")],-1),Le=t("GenericEventEmitter"),He=t("."),Ue=t("emit"),je=i('<h4 id="defined-in-4" tabindex="-1"><a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a> Defined in</h4><p>core/lib/types/core/types/GenericEventEmitter.d.ts:13</p><hr><h3 id="off" tabindex="-1"><a class="header-anchor" href="#off" aria-hidden="true">#</a> off</h3><p>\u25B8 <strong>off</strong>&lt;<code>K</code>&gt;(<code>eventName</code>, <code>fn</code>): <code>void</code></p><h4 id="type-parameters-3" tabindex="-1"><a class="header-anchor" href="#type-parameters-3" aria-hidden="true">#</a> Type parameters</h4>',6),qe=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type")])],-1),ze=e("td",{style:{"text-align":"left"}},[e("code",null,"K")],-1),Fe={style:{"text-align":"left"}},Je=t("extends "),Oe=e("code",null,"EventKey",-1),Qe=t("<"),We=e("code",null,"ServiceEvents",-1),Xe=t(">"),Ye=e("h4",{id:"parameters-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters-1","aria-hidden":"true"},"#"),t(" Parameters")],-1),Ze=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type")])],-1),$e=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"eventName")]),e("td",{style:{"text-align":"left"}},[e("code",null,"K")])],-1),et=e("td",{style:{"text-align":"left"}},[e("code",null,"fn")],-1),tt={style:{"text-align":"left"}},st=e("code",null,"EventReceiver",-1),nt=t("<"),at=e("code",null,"ServiceEvents",-1),it=t("["),rt=e("code",null,"K",-1),dt=t("]>"),ot=e("h4",{id:"returns-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-2","aria-hidden":"true"},"#"),t(" Returns")],-1),lt=e("p",null,[e("code",null,"void")],-1),ct=e("h4",{id:"inherited-from-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-2","aria-hidden":"true"},"#"),t(" Inherited from")],-1),ht=t("GenericEventEmitter"),_t=t("."),ut=t("off"),pt=i('<h4 id="defined-in-5" tabindex="-1"><a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a> Defined in</h4><p>core/lib/types/core/types/GenericEventEmitter.d.ts:12</p><hr><h3 id="on" tabindex="-1"><a class="header-anchor" href="#on" aria-hidden="true">#</a> on</h3><p>\u25B8 <strong>on</strong>&lt;<code>K</code>&gt;(<code>eventName</code>, <code>fn</code>): <code>void</code></p><h4 id="type-parameters-4" tabindex="-1"><a class="header-anchor" href="#type-parameters-4" aria-hidden="true">#</a> Type parameters</h4>',6),ft=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type")])],-1),vt=e("td",{style:{"text-align":"left"}},[e("code",null,"K")],-1),mt={style:{"text-align":"left"}},yt=t("extends "),bt=e("code",null,"EventKey",-1),gt=t("<"),xt=e("code",null,"ServiceEvents",-1),Et=t(">"),St=e("h4",{id:"parameters-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters-2","aria-hidden":"true"},"#"),t(" Parameters")],-1),Ct=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type")])],-1),kt=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"eventName")]),e("td",{style:{"text-align":"left"}},[e("code",null,"K")])],-1),Tt=e("td",{style:{"text-align":"left"}},[e("code",null,"fn")],-1),Nt={style:{"text-align":"left"}},wt=e("code",null,"EventReceiver",-1),Gt=t("<"),Kt=e("code",null,"ServiceEvents",-1),Pt=t("["),Rt=e("code",null,"K",-1),Dt=t("]>"),At=e("h4",{id:"returns-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-3","aria-hidden":"true"},"#"),t(" Returns")],-1),Bt=e("p",null,[e("code",null,"void")],-1),It=e("h4",{id:"inherited-from-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-3","aria-hidden":"true"},"#"),t(" Inherited from")],-1),Vt=t("GenericEventEmitter"),Mt=t("."),Lt=t("on"),Ht=i('<h4 id="defined-in-6" tabindex="-1"><a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a> Defined in</h4><p>core/lib/types/core/types/GenericEventEmitter.d.ts:11</p><hr><h3 id="registercommand" tabindex="-1"><a class="header-anchor" href="#registercommand" aria-hidden="true">#</a> registerCommand</h3><p>\u25B8 <code>Protected</code> <code>Abstract</code> <strong>registerCommand</strong>(<code>command</code>): <code>void</code></p><p>Register a new command (function) for this service</p><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a> Parameters</h4>',7),Ut=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type")])],-1),jt=e("td",{style:{"text-align":"left"}},[e("code",null,"command")],-1),qt={style:{"text-align":"left"}},zt=e("code",null,"CommandDefinition",-1),Ft=t("<"),Jt=e("code",null,"ServiceClass",-1),Ot=i("&lt;<code>unknown</code>&gt;, <code>Record</code>&lt;<code>string</code>, <code>unknown</code>&gt;, <code>unknown</code>, <code>unknown</code>, <code>unknown</code>, <code>unknown</code>, <code>unknown</code>&gt;",19),Qt=i('<h4 id="returns-4" tabindex="-1"><a class="header-anchor" href="#returns-4" aria-hidden="true">#</a> Returns</h4><p><code>void</code></p><h4 id="defined-in-7" tabindex="-1"><a class="header-anchor" href="#defined-in-7" aria-hidden="true">#</a> Defined in</h4><p>core/lib/types/core/types/ServiceClass.d.ts:40</p><hr><h3 id="start" tabindex="-1"><a class="header-anchor" href="#start" aria-hidden="true">#</a> start</h3><p>\u25B8 <code>Abstract</code> <strong>start</strong>(): <code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="returns-5" tabindex="-1"><a class="header-anchor" href="#returns-5" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in-8" tabindex="-1"><a class="header-anchor" href="#defined-in-8" aria-hidden="true">#</a> Defined in</h4><p>core/lib/types/core/types/ServiceClass.d.ts:34</p>',11);function Wt(Xt,Yt){const s=l("RouterLink");return d(),o("div",null,[e("p",null,[n(s,{to:"/api/"},{default:a(()=>[h]),_:1}),_,n(s,{to:"/api/modules/purista_httpserver.html"},{default:a(()=>[u]),_:1}),p,n(s,{to:"/api/modules/purista_httpserver.internal.html"},{default:a(()=>[f]),_:1}),v]),m,e("p",null,[n(s,{to:"/api/modules/purista_httpserver.html"},{default:a(()=>[y]),_:1}),b,n(s,{to:"/api/modules/purista_httpserver.internal.html"},{default:a(()=>[g]),_:1}),x]),E,e("ul",null,[e("li",null,[e("p",null,[n(s,{to:"/api/classes/purista_httpserver.internal.GenericEventEmitter.html"},{default:a(()=>[S]),_:1}),C,n(s,{to:"/api/modules/purista_httpserver.internal.html#serviceevents"},{default:a(()=>[k]),_:1}),T]),N,e("p",null,[w,n(s,{to:"/api/classes/purista_httpserver.internal.Service.html"},{default:a(()=>[G]),_:1})])])]),K,P,e("ul",null,[e("li",null,[n(s,{to:"/api/classes/purista_httpserver.internal.ServiceClass.html#constructor"},{default:a(()=>[R]),_:1})])]),D,e("ul",null,[e("li",null,[n(s,{to:"/api/classes/purista_httpserver.internal.ServiceClass.html#config"},{default:a(()=>[A]),_:1})]),e("li",null,[n(s,{to:"/api/classes/purista_httpserver.internal.ServiceClass.html#eventbridge"},{default:a(()=>[B]),_:1})]),e("li",null,[n(s,{to:"/api/classes/purista_httpserver.internal.ServiceClass.html#info"},{default:a(()=>[I]),_:1})])]),V,e("ul",null,[e("li",null,[n(s,{to:"/api/classes/purista_httpserver.internal.ServiceClass.html#destroy"},{default:a(()=>[M]),_:1})]),e("li",null,[n(s,{to:"/api/classes/purista_httpserver.internal.ServiceClass.html#emit"},{default:a(()=>[L]),_:1})]),e("li",null,[n(s,{to:"/api/classes/purista_httpserver.internal.ServiceClass.html#off"},{default:a(()=>[H]),_:1})]),e("li",null,[n(s,{to:"/api/classes/purista_httpserver.internal.ServiceClass.html#on"},{default:a(()=>[U]),_:1})]),e("li",null,[n(s,{to:"/api/classes/purista_httpserver.internal.ServiceClass.html#registercommand"},{default:a(()=>[j]),_:1})]),e("li",null,[n(s,{to:"/api/classes/purista_httpserver.internal.ServiceClass.html#start"},{default:a(()=>[q]),_:1})])]),z,e("p",null,[n(s,{to:"/api/classes/purista_httpserver.internal.GenericEventEmitter.html"},{default:a(()=>[F]),_:1}),J,n(s,{to:"/api/classes/purista_httpserver.internal.GenericEventEmitter.html#constructor"},{default:a(()=>[O]),_:1})]),Q,e("p",null,[W,X,Y,Z,$,ee,te,n(s,{to:"/api/classes/purista_httpserver.internal.EventBridge.html"},{default:a(()=>[se]),_:1})]),ne,ae,ie,re,de,e("p",null,[oe,le,ce,he,_e,ue,pe,fe,ve,n(s,{to:"/api/modules/purista_httpserver.internal.html#serviceinfotype"},{default:a(()=>[me]),_:1})]),ye,e("table",null,[be,e("tbody",null,[e("tr",null,[ge,e("td",xe,[Ee,n(s,{to:"/api/modules/purista_httpserver.internal.html#eventkey"},{default:a(()=>[Se]),_:1}),Ce,n(s,{to:"/api/modules/purista_httpserver.internal.html#serviceevents"},{default:a(()=>[ke]),_:1}),Te])])])]),Ne,e("table",null,[we,e("tbody",null,[Ge,e("tr",null,[Ke,e("td",Pe,[n(s,{to:"/api/modules/purista_httpserver.internal.html#serviceevents"},{default:a(()=>[Re]),_:1}),De,Ae,Be])])])]),Ie,Ve,Me,e("p",null,[n(s,{to:"/api/classes/purista_httpserver.internal.GenericEventEmitter.html"},{default:a(()=>[Le]),_:1}),He,n(s,{to:"/api/classes/purista_httpserver.internal.GenericEventEmitter.html#emit"},{default:a(()=>[Ue]),_:1})]),je,e("table",null,[qe,e("tbody",null,[e("tr",null,[ze,e("td",Fe,[Je,n(s,{to:"/api/modules/purista_httpserver.internal.html#eventkey"},{default:a(()=>[Oe]),_:1}),Qe,n(s,{to:"/api/modules/purista_httpserver.internal.html#serviceevents"},{default:a(()=>[We]),_:1}),Xe])])])]),Ye,e("table",null,[Ze,e("tbody",null,[$e,e("tr",null,[et,e("td",tt,[n(s,{to:"/api/modules/purista_httpserver.internal.html#eventreceiver"},{default:a(()=>[st]),_:1}),nt,n(s,{to:"/api/modules/purista_httpserver.internal.html#serviceevents"},{default:a(()=>[at]),_:1}),it,rt,dt])])])]),ot,lt,ct,e("p",null,[n(s,{to:"/api/classes/purista_httpserver.internal.GenericEventEmitter.html"},{default:a(()=>[ht]),_:1}),_t,n(s,{to:"/api/classes/purista_httpserver.internal.GenericEventEmitter.html#off"},{default:a(()=>[ut]),_:1})]),pt,e("table",null,[ft,e("tbody",null,[e("tr",null,[vt,e("td",mt,[yt,n(s,{to:"/api/modules/purista_httpserver.internal.html#eventkey"},{default:a(()=>[bt]),_:1}),gt,n(s,{to:"/api/modules/purista_httpserver.internal.html#serviceevents"},{default:a(()=>[xt]),_:1}),Et])])])]),St,e("table",null,[Ct,e("tbody",null,[kt,e("tr",null,[Tt,e("td",Nt,[n(s,{to:"/api/modules/purista_httpserver.internal.html#eventreceiver"},{default:a(()=>[wt]),_:1}),Gt,n(s,{to:"/api/modules/purista_httpserver.internal.html#serviceevents"},{default:a(()=>[Kt]),_:1}),Pt,Rt,Dt])])])]),At,Bt,It,e("p",null,[n(s,{to:"/api/classes/purista_httpserver.internal.GenericEventEmitter.html"},{default:a(()=>[Vt]),_:1}),Mt,n(s,{to:"/api/classes/purista_httpserver.internal.GenericEventEmitter.html#on"},{default:a(()=>[Lt]),_:1})]),Ht,e("table",null,[Ut,e("tbody",null,[e("tr",null,[jt,e("td",qt,[n(s,{to:"/api/modules/purista_httpserver.internal.html#commanddefinition"},{default:a(()=>[zt]),_:1}),Ft,n(s,{to:"/api/classes/purista_httpserver.internal.ServiceClass.html"},{default:a(()=>[Jt]),_:1}),Ot])])])]),Qt])}var es=r(c,[["render",Wt],["__file","purista_httpserver.internal.ServiceClass.html.vue"]]);export{es as default};