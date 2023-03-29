import{_ as i}from"./single_instance-8958c318.js";import{_ as n,W as s,X as a,Z as e,$ as t,a0 as l,Y as r,D as c}from"./framework-d89ed822.js";const d="/graphic/edge.svg",p={},h=e("p",null,"Running software built with PURISTA on edge devices is quite simple and does not need special handling.",-1),u=e("p",null,"There are in general 2 options.",-1),_=e("p",null,[t("The first option is, to run a single instance of your application and use the "),e("code",null,"DefaultEventBridge"),t(" of "),e("code",null,"@purista/core"),t(" package. Especially if there are only limited system resources available, this fits perfectly. There is no need to have some additional message broker running on the edge device. This means lower resource consumption and no software dependency.")],-1),m=e("p",null,[e("img",{src:i,alt:"single instance"})],-1),g={href:"https://mosquitto.org",target:"_blank",rel:"noopener noreferrer"},f=r('<p>It is possible to configure the broker in a way, where specific event messages are automatically available in some other broker. This means you can &quot;extract/listen for data&quot; without the need to change the application.</p><p>As a simplified illustration how it might look like this:</p><p><img src="'+d+'" alt="edge device example"></p><div class="hint-container tip"><p class="hint-container-title">Pros</p><ul><li>low footprint</li><li>can be connected to the cloud/server without much effort</li><li>together with webassembly 🚀</li><li>use the same application to run on edge and be able to scale on the cloud</li></ul></div><div class="hint-container danger"><p class="hint-container-title">Cons</p><ul><li>🤷</li></ul></div>',5);function v(b,k){const o=c("ExternalLinkIcon");return s(),a("div",null,[h,u,_,m,e("p",null,[t("The second option is, to use an MQTT broker like "),e("a",g,[t("mosquitto"),l(o)]),t(" with a low footprint, but more capabilities. An MQTT broker does not only provide better fault tolerance by persisting messages which are not processed. It also provides the capability to connect the edge device to a higher instance like the cloud.")]),f])}const T=n(p,[["render",v],["__file","2_edge_device.html.vue"]]);export{T as default};
