import{_ as i,W as c,X as l,Z as e,a0 as a,a1 as s,$ as t,Y as r,D as d}from"./framework-d89ed822.js";const p={},h=e("h1",{id:"namespace-internal",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#namespace-internal","aria-hidden":"true"},"#"),t(" Namespace: internal")],-1),u=e("h2",{id:"table-of-contents",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#table-of-contents","aria-hidden":"true"},"#"),t(" Table of contents")],-1),m=e("h3",{id:"service",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#service","aria-hidden":"true"},"#"),t(" Service")],-1),_=e("h3",{id:"type-aliases",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#type-aliases","aria-hidden":"true"},"#"),t(" Type Aliases")],-1),y=r('<h2 id="type-aliases-1" tabindex="-1"><a class="header-anchor" href="#type-aliases-1" aria-hidden="true">#</a> Type Aliases</h2><h3 id="customevents" tabindex="-1"><a class="header-anchor" href="#customevents" aria-hidden="true">#</a> CustomEvents</h3><p>Ƭ <strong>CustomEvents</strong>: <code>Object</code></p><h4 id="index-signature" tabindex="-1"><a class="header-anchor" href="#index-signature" aria-hidden="true">#</a> Index signature</h4><p>▪ [key: <code>string</code>]: <code>unknown</code></p><h4 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in" aria-hidden="true">#</a> Defined in</h4>',6),v={href:"https://github.com/sebastianwessel/purista/blob/8c66693/packages/core/src/core/types/ServiceEvents.ts#L87",target:"_blank",rel:"noopener noreferrer"},f=r('<hr><h3 id="customevents-1" tabindex="-1"><a class="header-anchor" href="#customevents-1" aria-hidden="true">#</a> CustomEvents</h3><p>Ƭ <strong>CustomEvents</strong>: <code>Object</code></p><h4 id="index-signature-1" tabindex="-1"><a class="header-anchor" href="#index-signature-1" aria-hidden="true">#</a> Index signature</h4><p>▪ [key: <code>string</code>]: <code>unknown</code></p><h4 id="defined-in-1" tabindex="-1"><a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a> Defined in</h4>',6),k={href:"https://github.com/sebastianwessel/purista/blob/8c66693/packages/core/src/core/EventBridge/types/EventBridgeEvents.ts#L26",target:"_blank",rel:"noopener noreferrer"},g=r('<hr><h3 id="eventreceiver" tabindex="-1"><a class="header-anchor" href="#eventreceiver" aria-hidden="true">#</a> EventReceiver</h3><p>Ƭ <strong>EventReceiver</strong>&lt;<code>T</code>&gt;: (<code>parameter</code>: <code>T</code>) =&gt; <code>void</code></p><h4 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h4 id="type-declaration" tabindex="-1"><a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a> Type declaration</h4><p>▸ (<code>parameter</code>): <code>void</code></p><h5 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>parameter</code></td><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h5 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h5><p><code>void</code></p><h4 id="defined-in-2" tabindex="-1"><a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a> Defined in</h4>',12),b={href:"https://github.com/sebastianwessel/purista/blob/8c66693/packages/core/src/core/types/GenericEventEmitter.ts#L6",target:"_blank",rel:"noopener noreferrer"},x=e("hr",null,null,-1),T=e("h3",{id:"invokefunction",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#invokefunction","aria-hidden":"true"},"#"),t(" InvokeFunction")],-1),E=e("strong",null,"InvokeFunction",-1),P=e("code",null,"address",-1),I=e("code",null,"EBMessageAddress",-1),w=e("code",null,"payload",-1),R=e("code",null,"PayloadType",-1),B=e("code",null,"parameter",-1),C=e("code",null,"ParameterType",-1),N=e("code",null,"Promise",-1),L=e("code",null,"InvokeResponseType",-1),A=r(`<h4 id="type-declaration-1" tabindex="-1"><a class="header-anchor" href="#type-declaration-1" aria-hidden="true">#</a> Type declaration</h4><p>▸ &lt;<code>InvokeResponseType</code>, <code>PayloadType</code>, <code>ParameterType</code>&gt;(<code>address</code>, <code>payload</code>, <code>parameter</code>): <code>Promise</code>&lt;<code>InvokeResponseType</code>&gt;</p><p>Invokes a command and returns the result. It is recommended to validate the result against a schema which only contains the data you actually need.</p><p><strong><code>Example</code></strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>
<span class="token keyword">const</span> address<span class="token operator">:</span> EBMessageAddress <span class="token operator">=</span> <span class="token punctuation">{</span>
  serviceName<span class="token operator">:</span> <span class="token string">&#39;name-of-service-to-invoke&#39;</span><span class="token punctuation">,</span>
  serviceVersion<span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>
  serviceTarget<span class="token operator">:</span> <span class="token string">&#39;command-name-to-invoke&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> inputPayload <span class="token operator">=</span> <span class="token punctuation">{</span> my<span class="token operator">:</span> <span class="token string">&#39;input&#39;</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> inputParameter <span class="token operator">=</span> <span class="token punctuation">{</span> search<span class="token operator">:</span> <span class="token string">&#39;for_me&#39;</span> <span class="token punctuation">}</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token generic-function"><span class="token function">invoke</span><span class="token generic class-name"><span class="token operator">&lt;</span>MyResultType<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>address<span class="token punctuation">,</span> inputPayload inputParameter <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="type-parameters-1" tabindex="-1"><a class="header-anchor" href="#type-parameters-1" aria-hidden="true">#</a> Type parameters</h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>InvokeResponseType</code></td><td style="text-align:left;"><code>unknown</code></td></tr><tr><td style="text-align:left;"><code>PayloadType</code></td><td style="text-align:left;"><code>unknown</code></td></tr><tr><td style="text-align:left;"><code>ParameterType</code></td><td style="text-align:left;"><code>unknown</code></td></tr></tbody></table><h5 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h5>`,8),S=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type")])],-1),D=e("td",{style:{"text-align":"left"}},[e("code",null,"address")],-1),F={style:{"text-align":"left"}},M=e("code",null,"EBMessageAddress",-1),V=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"payload")]),e("td",{style:{"text-align":"left"}},[e("code",null,"PayloadType")])],-1),j=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"parameter")]),e("td",{style:{"text-align":"left"}},[e("code",null,"ParameterType")])],-1),G=e("h5",{id:"returns-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-1","aria-hidden":"true"},"#"),t(" Returns")],-1),O=e("p",null,[e("code",null,"Promise"),t("<"),e("code",null,"InvokeResponseType"),t(">")],-1),U=e("h4",{id:"defined-in-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-3","aria-hidden":"true"},"#"),t(" Defined in")],-1),W={href:"https://github.com/sebastianwessel/purista/blob/8c66693/packages/core/src/core/types/InvokeFunction.ts#L21",target:"_blank",rel:"noopener noreferrer"};function X(Y,Z){const n=d("RouterLink"),o=d("ExternalLinkIcon");return c(),l("div",null,[e("p",null,[a(n,{to:"/api/"},{default:s(()=>[t("PURISTA API - v1.4.9")]),_:1}),t(" / "),a(n,{to:"/api/modules.html"},{default:s(()=>[t("Modules")]),_:1}),t(" / "),a(n,{to:"/api/modules/purista_core.html"},{default:s(()=>[t("@purista/core")]),_:1}),t(" / internal")]),h,e("p",null,[a(n,{to:"/api/modules/purista_core.html"},{default:s(()=>[t("@purista/core")]),_:1}),t(".internal")]),u,m,e("ul",null,[e("li",null,[a(n,{to:"/api/classes/purista_core.internal.ServiceBaseClass.html"},{default:s(()=>[t("ServiceBaseClass")]),_:1})])]),_,e("ul",null,[e("li",null,[a(n,{to:"/api/modules/purista_core.internal.html#customevents"},{default:s(()=>[t("CustomEvents")]),_:1})]),e("li",null,[a(n,{to:"/api/modules/purista_core.internal.html#customevents-1"},{default:s(()=>[t("CustomEvents")]),_:1})]),e("li",null,[a(n,{to:"/api/modules/purista_core.internal.html#eventreceiver"},{default:s(()=>[t("EventReceiver")]),_:1})]),e("li",null,[a(n,{to:"/api/modules/purista_core.internal.html#invokefunction"},{default:s(()=>[t("InvokeFunction")]),_:1})])]),y,e("p",null,[e("a",v,[t("packages/core/src/core/types/ServiceEvents.ts:87"),a(o)])]),f,e("p",null,[e("a",k,[t("packages/core/src/core/EventBridge/types/EventBridgeEvents.ts:26"),a(o)])]),g,e("p",null,[e("a",b,[t("packages/core/src/core/types/GenericEventEmitter.ts:6"),a(o)])]),x,T,e("p",null,[t("Ƭ "),E,t(": <InvokeResponseType, PayloadType, ParameterType>("),P,t(": "),a(n,{to:"/api/modules/purista_core.html#ebmessageaddress"},{default:s(()=>[I]),_:1}),t(", "),w,t(": "),R,t(", "),B,t(": "),C,t(") => "),N,t("<"),L,t(">")]),A,e("table",null,[S,e("tbody",null,[e("tr",null,[D,e("td",F,[a(n,{to:"/api/modules/purista_core.html#ebmessageaddress"},{default:s(()=>[M]),_:1})])]),V,j])]),G,O,U,e("p",null,[e("a",W,[t("packages/core/src/core/types/InvokeFunction.ts:21"),a(o)])])])}const q=i(p,[["render",X],["__file","purista_core.internal.html.vue"]]);export{q as default};
