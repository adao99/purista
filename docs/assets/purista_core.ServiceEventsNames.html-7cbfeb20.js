import{_ as o,W as d,X as c,Z as e,a0 as n,a1 as s,$ as r,Y as l,D as i}from"./framework-d89ed822.js";const h={},u=e("h1",{id:"enumeration-serviceeventsnames",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#enumeration-serviceeventsnames","aria-hidden":"true"},"#"),r(" Enumeration: ServiceEventsNames")],-1),p=e("p",null,[r("Events which can be emitted by a service. Internal events are prefixed with "),e("code",null,"service-")],-1),_=e("h2",{id:"table-of-contents",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#table-of-contents","aria-hidden":"true"},"#"),r(" Table of contents")],-1),v=e("h3",{id:"events",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#events","aria-hidden":"true"},"#"),r(" Events")],-1),b=l('<h2 id="events-1" tabindex="-1"><a class="header-anchor" href="#events-1" aria-hidden="true">#</a> Events</h2><h3 id="commandhandlederror" tabindex="-1"><a class="header-anchor" href="#commandhandlederror" aria-hidden="true">#</a> CommandHandledError</h3><p>• <strong>CommandHandledError</strong> = <code>&quot;service-handled-command-error&quot;</code></p><p>emitted when a command throws a HandledError</p><h4 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in" aria-hidden="true">#</a> Defined in</h4>',5),m={href:"https://github.com/sebastianwessel/purista/blob/8c66693/packages/core/src/core/types/ServiceEvents.ts#L36",target:"_blank",rel:"noopener noreferrer"},f=e("hr",null,null,-1),S=e("h3",{id:"commandunhandlederror",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#commandunhandlederror","aria-hidden":"true"},"#"),r(" CommandUnhandledError")],-1),E=e("p",null,[r("• "),e("strong",null,"CommandUnhandledError"),r(" = "),e("code",null,'"service-unhandled-command-error"')],-1),g=e("p",null,"emitted when a command throws an error other than a HandledError",-1),k=e("h4",{id:"defined-in-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-1","aria-hidden":"true"},"#"),r(" Defined in")],-1),x={href:"https://github.com/sebastianwessel/purista/blob/8c66693/packages/core/src/core/types/ServiceEvents.ts#L42",target:"_blank",rel:"noopener noreferrer"},y=e("hr",null,null,-1),w=e("h3",{id:"serviceavailable",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#serviceavailable","aria-hidden":"true"},"#"),r(" ServiceAvailable")],-1),N=e("p",null,[r("• "),e("strong",null,"ServiceAvailable"),r(" = "),e("code",null,'"service-available"')],-1),D=e("p",null,"emitted when the service is fully initialized and ready Should be emitted by custom service class. It is not emitted by default",-1),L=e("h4",{id:"defined-in-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-2","aria-hidden":"true"},"#"),r(" Defined in")],-1),H={href:"https://github.com/sebastianwessel/purista/blob/8c66693/packages/core/src/core/types/ServiceEvents.ts#L21",target:"_blank",rel:"noopener noreferrer"},U=e("hr",null,null,-1),C=e("h3",{id:"servicedrain",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#servicedrain","aria-hidden":"true"},"#"),r(" ServiceDrain")],-1),I=e("p",null,[r("• "),e("strong",null,"ServiceDrain"),r(" = "),e("code",null,'"service-drain"')],-1),A=e("p",null,"emitted when the service is going to be stopped",-1),V=e("h4",{id:"defined-in-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-3","aria-hidden":"true"},"#"),r(" Defined in")],-1),B={href:"https://github.com/sebastianwessel/purista/blob/8c66693/packages/core/src/core/types/ServiceEvents.ts#L24",target:"_blank",rel:"noopener noreferrer"},R=e("hr",null,null,-1),T=e("h3",{id:"servicestarted",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#servicestarted","aria-hidden":"true"},"#"),r(" ServiceStarted")],-1),q=e("p",null,[r("• "),e("strong",null,"ServiceStarted"),r(" = "),e("code",null,'"service-started"')],-1),z=e("p",null,"emitted when the service is started, but not fully initialized and not ready yet",-1),P=e("h4",{id:"defined-in-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-4","aria-hidden":"true"},"#"),r(" Defined in")],-1),M={href:"https://github.com/sebastianwessel/purista/blob/8c66693/packages/core/src/core/types/ServiceEvents.ts#L13",target:"_blank",rel:"noopener noreferrer"},W=e("hr",null,null,-1),X=e("h3",{id:"servicestopped",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#servicestopped","aria-hidden":"true"},"#"),r(" ServiceStopped")],-1),Y=e("p",null,[r("• "),e("strong",null,"ServiceStopped"),r(" = "),e("code",null,'"service-stopped"')],-1),Z=e("p",null,"emitted when the service has been stopped",-1),$=e("h4",{id:"defined-in-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-5","aria-hidden":"true"},"#"),r(" Defined in")],-1),j={href:"https://github.com/sebastianwessel/purista/blob/8c66693/packages/core/src/core/types/ServiceEvents.ts#L27",target:"_blank",rel:"noopener noreferrer"},F=e("hr",null,null,-1),G=e("h3",{id:"serviceunavailable",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#serviceunavailable","aria-hidden":"true"},"#"),r(" ServiceUnavailable")],-1),J=e("p",null,[r("• "),e("strong",null,"ServiceUnavailable"),r(" = "),e("code",null,'"service-not-available"')],-1),K=e("p",null,"emitted when the service is not available (for example database connection could not be established)",-1),O=e("h4",{id:"defined-in-6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-6","aria-hidden":"true"},"#"),r(" Defined in")],-1),Q={href:"https://github.com/sebastianwessel/purista/blob/8c66693/packages/core/src/core/types/ServiceEvents.ts#L30",target:"_blank",rel:"noopener noreferrer"},ee=e("hr",null,null,-1),re=e("h3",{id:"subscriptionhandlederror",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#subscriptionhandlederror","aria-hidden":"true"},"#"),r(" SubscriptionHandledError")],-1),ne=e("p",null,[r("• "),e("strong",null,"SubscriptionHandledError"),r(" = "),e("code",null,'"service-handled-subscription-error"')],-1),te=e("p",null,"emitted when a subscription throws a HandledError",-1),se=e("h4",{id:"defined-in-7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-7","aria-hidden":"true"},"#"),r(" Defined in")],-1),ae={href:"https://github.com/sebastianwessel/purista/blob/8c66693/packages/core/src/core/types/ServiceEvents.ts#L33",target:"_blank",rel:"noopener noreferrer"},ie=e("hr",null,null,-1),oe=e("h3",{id:"subscriptionunhandlederror",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#subscriptionunhandlederror","aria-hidden":"true"},"#"),r(" SubscriptionUnhandledError")],-1),de=e("p",null,[r("• "),e("strong",null,"SubscriptionUnhandledError"),r(" = "),e("code",null,'"service-unhandled-subscription-error"')],-1),ce=e("p",null,"emitted when a subscription throws an error other than a HandledError",-1),le=e("h4",{id:"defined-in-8",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-8","aria-hidden":"true"},"#"),r(" Defined in")],-1),he={href:"https://github.com/sebastianwessel/purista/blob/8c66693/packages/core/src/core/types/ServiceEvents.ts#L39",target:"_blank",rel:"noopener noreferrer"};function ue(pe,_e){const t=i("RouterLink"),a=i("ExternalLinkIcon");return d(),c("div",null,[e("p",null,[n(t,{to:"/api/"},{default:s(()=>[r("PURISTA API - v1.4.9")]),_:1}),r(" / "),n(t,{to:"/api/modules.html"},{default:s(()=>[r("Modules")]),_:1}),r(" / "),n(t,{to:"/api/modules/purista_core.html"},{default:s(()=>[r("@purista/core")]),_:1}),r(" / ServiceEventsNames")]),u,e("p",null,[n(t,{to:"/api/modules/purista_core.html"},{default:s(()=>[r("@purista/core")]),_:1}),r(".ServiceEventsNames")]),p,_,v,e("ul",null,[e("li",null,[n(t,{to:"/api/enums/purista_core.ServiceEventsNames.html#commandhandlederror"},{default:s(()=>[r("CommandHandledError")]),_:1})]),e("li",null,[n(t,{to:"/api/enums/purista_core.ServiceEventsNames.html#commandunhandlederror"},{default:s(()=>[r("CommandUnhandledError")]),_:1})]),e("li",null,[n(t,{to:"/api/enums/purista_core.ServiceEventsNames.html#serviceavailable"},{default:s(()=>[r("ServiceAvailable")]),_:1})]),e("li",null,[n(t,{to:"/api/enums/purista_core.ServiceEventsNames.html#servicedrain"},{default:s(()=>[r("ServiceDrain")]),_:1})]),e("li",null,[n(t,{to:"/api/enums/purista_core.ServiceEventsNames.html#servicestarted"},{default:s(()=>[r("ServiceStarted")]),_:1})]),e("li",null,[n(t,{to:"/api/enums/purista_core.ServiceEventsNames.html#servicestopped"},{default:s(()=>[r("ServiceStopped")]),_:1})]),e("li",null,[n(t,{to:"/api/enums/purista_core.ServiceEventsNames.html#serviceunavailable"},{default:s(()=>[r("ServiceUnavailable")]),_:1})]),e("li",null,[n(t,{to:"/api/enums/purista_core.ServiceEventsNames.html#subscriptionhandlederror"},{default:s(()=>[r("SubscriptionHandledError")]),_:1})]),e("li",null,[n(t,{to:"/api/enums/purista_core.ServiceEventsNames.html#subscriptionunhandlederror"},{default:s(()=>[r("SubscriptionUnhandledError")]),_:1})])]),b,e("p",null,[e("a",m,[r("packages/core/src/core/types/ServiceEvents.ts:36"),n(a)])]),f,S,E,g,k,e("p",null,[e("a",x,[r("packages/core/src/core/types/ServiceEvents.ts:42"),n(a)])]),y,w,N,D,L,e("p",null,[e("a",H,[r("packages/core/src/core/types/ServiceEvents.ts:21"),n(a)])]),U,C,I,A,V,e("p",null,[e("a",B,[r("packages/core/src/core/types/ServiceEvents.ts:24"),n(a)])]),R,T,q,z,P,e("p",null,[e("a",M,[r("packages/core/src/core/types/ServiceEvents.ts:13"),n(a)])]),W,X,Y,Z,$,e("p",null,[e("a",j,[r("packages/core/src/core/types/ServiceEvents.ts:27"),n(a)])]),F,G,J,K,O,e("p",null,[e("a",Q,[r("packages/core/src/core/types/ServiceEvents.ts:30"),n(a)])]),ee,re,ne,te,se,e("p",null,[e("a",ae,[r("packages/core/src/core/types/ServiceEvents.ts:33"),n(a)])]),ie,oe,de,ce,le,e("p",null,[e("a",he,[r("packages/core/src/core/types/ServiceEvents.ts:39"),n(a)])])])}const be=o(h,[["render",ue],["__file","purista_core.ServiceEventsNames.html.vue"]]);export{be as default};
