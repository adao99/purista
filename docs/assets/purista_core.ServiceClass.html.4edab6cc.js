import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";import{r as a,o as d,c as l,b as e,e as t,w as n,d as s,a as r}from"./app.414c019c.js";const h={},_=s("PURISTA API"),u=s(" / "),p=s("@purista/core"),f=s(" / ServiceClass"),m=e("h1",{id:"class-serviceclass",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#class-serviceclass","aria-hidden":"true"},"#"),s(" Class: ServiceClass")],-1),b=s("@purista/core"),v=s(".ServiceClass"),g=r(`<p>Abstract base service class which should be extended by the base service class. The base class should provide basic functions to use the event bridge.</p><p>Every service should extends the base class and only implement logic used in this service.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">MyBaseService</span> <span class="token keyword">extends</span> <span class="token class-name">Service</span> <span class="token punctuation">{</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hierarchy" tabindex="-1"><a class="header-anchor" href="#hierarchy" aria-hidden="true">#</a> Hierarchy</h2>`,4),x=e("p",null,[e("strong",null,[e("code",null,"ServiceClass")])],-1),y=s("\u21B3 "),k=e("code",null,"Service",-1),S=e("h2",{id:"table-of-contents",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#table-of-contents","aria-hidden":"true"},"#"),s(" Table of contents")],-1),C=e("h3",{id:"constructors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#constructors","aria-hidden":"true"},"#"),s(" Constructors")],-1),w=s("constructor"),P=e("h3",{id:"properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),s(" Properties")],-1),R=s("eventBridge"),I=s("info"),T=e("h3",{id:"accessors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#accessors","aria-hidden":"true"},"#"),s(" Accessors")],-1),A=s("serviceInfo"),L=e("h3",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),s(" Methods")],-1),B=s("destroy"),D=s("invoke"),E=s("registerCommand"),q=s("subscribe"),N=r('<h2 id="constructors-1" tabindex="-1"><a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a> Constructors</h2><h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h3><p>\u2022 <strong>new ServiceClass</strong>()</p><h2 id="properties-1" tabindex="-1"><a class="header-anchor" href="#properties-1" aria-hidden="true">#</a> Properties</h2><h3 id="eventbridge" tabindex="-1"><a class="header-anchor" href="#eventbridge" aria-hidden="true">#</a> eventBridge</h3>',5),M=s("\u2022 "),V=e("code",null,"Protected",-1),G=s(),U=e("code",null,"Abstract",-1),H=s(),O=e("strong",null,"eventBridge",-1),j=s(": "),z=e("code",null,"EventBridge",-1),F=e("p",null,"The event bridge instance",-1),J=e("h4",{id:"defined-in",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in","aria-hidden":"true"},"#"),s(" Defined in")],-1),K={href:"https://github.com/sebastianwessel/purista/blob/17388e9/packages/core/src/core/types/ServiceClass.ts#L39",target:"_blank",rel:"noopener noreferrer"},Q=s("core/src/core/types/ServiceClass.ts:39"),W=e("hr",null,null,-1),X=e("h3",{id:"info",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#info","aria-hidden":"true"},"#"),s(" info")],-1),Y=s("\u2022 "),Z=e("code",null,"Protected",-1),$=s(),ee=e("code",null,"Readonly",-1),se=s(),te=e("code",null,"Abstract",-1),oe=s(),ne=e("strong",null,"info",-1),ie=s(": "),re=e("code",null,"ServiceInfoType",-1),ae=e("p",null,"General service info Service name, service version and some human readable description",-1),ce=e("h4",{id:"defined-in-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-1","aria-hidden":"true"},"#"),s(" Defined in")],-1),de={href:"https://github.com/sebastianwessel/purista/blob/17388e9/packages/core/src/core/types/ServiceClass.ts#L27",target:"_blank",rel:"noopener noreferrer"},le=s("core/src/core/types/ServiceClass.ts:27"),he=e("h2",{id:"accessors-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#accessors-1","aria-hidden":"true"},"#"),s(" Accessors")],-1),_e=e("h3",{id:"serviceinfo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#serviceinfo","aria-hidden":"true"},"#"),s(" serviceInfo")],-1),ue=s("\u2022 "),pe=e("code",null,"get",-1),fe=s(),me=e("strong",null,"serviceInfo",-1),be=s("(): "),ve=e("code",null,"ServiceInfoType",-1),ge=e("p",null,"Get service info",-1),xe=e("h4",{id:"returns",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns","aria-hidden":"true"},"#"),s(" Returns")],-1),ye=e("code",null,"ServiceInfoType",-1),ke=e("h4",{id:"defined-in-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-2","aria-hidden":"true"},"#"),s(" Defined in")],-1),Se={href:"https://github.com/sebastianwessel/purista/blob/17388e9/packages/core/src/core/types/ServiceClass.ts#L32",target:"_blank",rel:"noopener noreferrer"},Ce=s("core/src/core/types/ServiceClass.ts:32"),we=r('<h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h2><h3 id="destroy" tabindex="-1"><a class="header-anchor" href="#destroy" aria-hidden="true">#</a> destroy</h3><p>\u25B8 <code>Abstract</code> <strong>destroy</strong>(): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>Shut down the service</p><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in-3" tabindex="-1"><a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a> Defined in</h4>',7),Pe={href:"https://github.com/sebastianwessel/purista/blob/17388e9/packages/core/src/core/types/ServiceClass.ts#L71",target:"_blank",rel:"noopener noreferrer"},Re=s("core/src/core/types/ServiceClass.ts:71"),Ie=e("hr",null,null,-1),Te=e("h3",{id:"invoke",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#invoke","aria-hidden":"true"},"#"),s(" invoke")],-1),Ae=s("\u25B8 "),Le=e("code",null,"Protected",-1),Be=s(),De=e("code",null,"Abstract",-1),Ee=s(),qe=e("strong",null,"invoke",-1),Ne=s("("),Me=e("code",null,"input",-1),Ve=s(", "),Ge=e("code",null,"ttl",-1),Ue=s("): "),He=e("code",null,"Promise",-1),Oe=s("<"),je=e("code",null,"CommandResponse",-1),ze=s("<"),Fe=e("code",null,"unknown",-1),Je=s(">>"),Ke=e("p",null,"Invoke a service over event bridge and expect some result from called service Used for service(-function) to service(-function) communication",-1),Qe=e("h4",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),s(" Parameters")],-1),We=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),Xe=e("td",{style:{"text-align":"left"}},[e("code",null,"input")],-1),Ye={style:{"text-align":"left"}},Ze=e("code",null,"Omit",-1),$e=s("<"),es=e("code",null,"Command",-1),ss=r("&lt;<code>unknown</code>, <code>Record</code>&lt;<code>string</code>, <code>unknown</code>&gt;&gt;, <code>&quot;id&quot;</code> | <code>&quot;messageType&quot;</code> | <code>&quot;sender&quot;</code>&gt;",15),ts=e("td",{style:{"text-align":"left"}},null,-1),os=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"ttl")]),e("td",{style:{"text-align":"left"}},[e("code",null,"number")]),e("td",{style:{"text-align":"left"}},"timeout in ms")],-1),ns=e("h4",{id:"returns-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-2","aria-hidden":"true"},"#"),s(" Returns")],-1),is=e("code",null,"Promise",-1),rs=s("<"),as=e("code",null,"CommandResponse",-1),cs=s("<"),ds=e("code",null,"unknown",-1),ls=s(">>"),hs=e("p",null,"Promise<CommandErrorResponse | CommandSuccessResponse>",-1),_s=e("h4",{id:"defined-in-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-4","aria-hidden":"true"},"#"),s(" Defined in")],-1),us={href:"https://github.com/sebastianwessel/purista/blob/17388e9/packages/core/src/core/types/ServiceClass.ts#L48",target:"_blank",rel:"noopener noreferrer"},ps=s("core/src/core/types/ServiceClass.ts:48"),fs=r('<hr><h3 id="registercommand" tabindex="-1"><a class="header-anchor" href="#registercommand" aria-hidden="true">#</a> registerCommand</h3><p>\u25B8 <code>Protected</code> <code>Abstract</code> <strong>registerCommand</strong>(<code>command</code>): <code>void</code></p><p>Register a new command (function) for this service</p><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h4>',5),ms=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type")])],-1),bs=e("td",{style:{"text-align":"left"}},[e("code",null,"command")],-1),vs={style:{"text-align":"left"}},gs=e("code",null,"CommandDefinition",-1),xs=s("<"),ys=e("code",null,"Record",-1),ks=s("<"),Ss=e("code",null,"string",-1),Cs=s(", "),ws=e("code",null,"unknown",-1),Ps=s(">, "),Rs=e("code",null,"Service",-1),Is=s(", "),Ts=e("code",null,"unknown",-1),As=s(", "),Ls=e("code",null,"Record",-1),Bs=s("<"),Ds=e("code",null,"string",-1),Es=s(", "),qs=e("code",null,"unknown",-1),Ns=s(">, "),Ms=e("code",null,"unknown",-1),Vs=s(">"),Gs=e("h4",{id:"returns-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-3","aria-hidden":"true"},"#"),s(" Returns")],-1),Us=e("p",null,[e("code",null,"void")],-1),Hs=e("h4",{id:"defined-in-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-5","aria-hidden":"true"},"#"),s(" Defined in")],-1),Os={href:"https://github.com/sebastianwessel/purista/blob/17388e9/packages/core/src/core/types/ServiceClass.ts#L66",target:"_blank",rel:"noopener noreferrer"},js=s("core/src/core/types/ServiceClass.ts:66"),zs=r('<hr><h3 id="subscribe" tabindex="-1"><a class="header-anchor" href="#subscribe" aria-hidden="true">#</a> subscribe</h3><p>\u25B8 <code>Protected</code> <code>Abstract</code> <strong>subscribe</strong>(<code>subscription</code>): <code>Promise</code>&lt;<code>string</code>&gt;</p><p>Send subscription request to event bridge Creates a new subscription</p><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h4>',5),Fs=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type")])],-1),Js=e("td",{style:{"text-align":"left"}},[e("code",null,"subscription")],-1),Ks={style:{"text-align":"left"}},Qs=e("code",null,"SubscriptionDefinition",-1),Ws=s("<"),Xs=e("code",null,"EBMessage",-1),Ys=s(">"),Zs=e("h4",{id:"returns-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-4","aria-hidden":"true"},"#"),s(" Returns")],-1),$s=e("p",null,[e("code",null,"Promise"),s("<"),e("code",null,"string"),s(">")],-1),et=e("p",null,"Promise SubscriptionId",-1),st=e("h4",{id:"defined-in-6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-6","aria-hidden":"true"},"#"),s(" Defined in")],-1),tt={href:"https://github.com/sebastianwessel/purista/blob/17388e9/packages/core/src/core/types/ServiceClass.ts#L59",target:"_blank",rel:"noopener noreferrer"},ot=s("core/src/core/types/ServiceClass.ts:59");function nt(it,rt){const o=a("RouterLink"),i=a("ExternalLinkIcon");return d(),l("div",null,[e("p",null,[t(o,{to:"/api/"},{default:n(()=>[_]),_:1}),u,t(o,{to:"/api/modules/purista_core.html"},{default:n(()=>[p]),_:1}),f]),m,e("p",null,[t(o,{to:"/api/modules/purista_core.html"},{default:n(()=>[b]),_:1}),v]),g,e("ul",null,[e("li",null,[x,e("p",null,[y,t(o,{to:"/api/classes/purista_core.Service.html"},{default:n(()=>[k]),_:1})])])]),S,C,e("ul",null,[e("li",null,[t(o,{to:"/api/classes/purista_core.ServiceClass.html#constructor"},{default:n(()=>[w]),_:1})])]),P,e("ul",null,[e("li",null,[t(o,{to:"/api/classes/purista_core.ServiceClass.html#eventbridge"},{default:n(()=>[R]),_:1})]),e("li",null,[t(o,{to:"/api/classes/purista_core.ServiceClass.html#info"},{default:n(()=>[I]),_:1})])]),T,e("ul",null,[e("li",null,[t(o,{to:"/api/classes/purista_core.ServiceClass.html#serviceinfo"},{default:n(()=>[A]),_:1})])]),L,e("ul",null,[e("li",null,[t(o,{to:"/api/classes/purista_core.ServiceClass.html#destroy"},{default:n(()=>[B]),_:1})]),e("li",null,[t(o,{to:"/api/classes/purista_core.ServiceClass.html#invoke"},{default:n(()=>[D]),_:1})]),e("li",null,[t(o,{to:"/api/classes/purista_core.ServiceClass.html#registercommand"},{default:n(()=>[E]),_:1})]),e("li",null,[t(o,{to:"/api/classes/purista_core.ServiceClass.html#subscribe"},{default:n(()=>[q]),_:1})])]),N,e("p",null,[M,V,G,U,H,O,j,t(o,{to:"/api/interfaces/purista_core.EventBridge.html"},{default:n(()=>[z]),_:1})]),F,J,e("p",null,[e("a",K,[Q,t(i)])]),W,X,e("p",null,[Y,Z,$,ee,se,te,oe,ne,ie,t(o,{to:"/api/modules/purista_core.html#serviceinfotype"},{default:n(()=>[re]),_:1})]),ae,ce,e("p",null,[e("a",de,[le,t(i)])]),he,_e,e("p",null,[ue,pe,fe,me,be,t(o,{to:"/api/modules/purista_core.html#serviceinfotype"},{default:n(()=>[ve]),_:1})]),ge,xe,e("p",null,[t(o,{to:"/api/modules/purista_core.html#serviceinfotype"},{default:n(()=>[ye]),_:1})]),ke,e("p",null,[e("a",Se,[Ce,t(i)])]),we,e("p",null,[e("a",Pe,[Re,t(i)])]),Ie,Te,e("p",null,[Ae,Le,Be,De,Ee,qe,Ne,Me,Ve,Ge,Ue,He,Oe,t(o,{to:"/api/modules/purista_core.html#commandresponse"},{default:n(()=>[je]),_:1}),ze,Fe,Je]),Ke,Qe,e("table",null,[We,e("tbody",null,[e("tr",null,[Xe,e("td",Ye,[Ze,$e,t(o,{to:"/api/modules/purista_core.html#command"},{default:n(()=>[es]),_:1}),ss]),ts]),os])]),ns,e("p",null,[is,rs,t(o,{to:"/api/modules/purista_core.html#commandresponse"},{default:n(()=>[as]),_:1}),cs,ds,ls]),hs,_s,e("p",null,[e("a",us,[ps,t(i)])]),fs,e("table",null,[ms,e("tbody",null,[e("tr",null,[bs,e("td",vs,[t(o,{to:"/api/modules/purista_core.html#commanddefinition"},{default:n(()=>[gs]),_:1}),xs,ys,ks,Ss,Cs,ws,Ps,t(o,{to:"/api/classes/purista_core.Service.html"},{default:n(()=>[Rs]),_:1}),Is,Ts,As,Ls,Bs,Ds,Es,qs,Ns,Ms,Vs])])])]),Gs,Us,Hs,e("p",null,[e("a",Os,[js,t(i)])]),zs,e("table",null,[Fs,e("tbody",null,[e("tr",null,[Js,e("td",Ks,[t(o,{to:"/api/modules/purista_core.html#subscriptiondefinition"},{default:n(()=>[Qs]),_:1}),Ws,t(o,{to:"/api/modules/purista_core.html#ebmessage"},{default:n(()=>[Xs]),_:1}),Ys])])])]),Zs,$s,et,st,e("p",null,[e("a",tt,[ot,t(i)])])])}var dt=c(h,[["render",nt],["__file","purista_core.ServiceClass.html.vue"]]);export{dt as default};