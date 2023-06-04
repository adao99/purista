import{_ as a}from"./single_instance-8958c318.js";import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as d,c,b as e,d as o,e as n,w as l,a as h}from"./app-d373f43b.js";const u="/graphic/edge.svg",p={},m=h('<p>When it comes to scale, it mostly does not mean the same as for servers or cloud.<br> In a server or cloud environment, you have &quot;one big thing&quot;, which you need to scale somehow.<br> You can simply add more powerful hardware or more instance on more hardware. Especially in cloud environments, you &quot;simply&quot; add more ressources &amp; instances.</p><p>If you&#39;re looking into some IoT or edge scenario, scaling means something different.<br> The ressources of a single edge device is fixed and cant simply be upgraded. You might have hundereds or thousend devices with fixed ressources providing raw data.</p><p>One option is, to collect the raw data of all your devices, send them to your server/cloud.<br> This works, but wastes a lot of ressources for data transmition and handling on the server side. While leaving ressources on the edge device unused.<br> A better approach is, to prepare the data on every edge device for further processing. This prepeared data is most likely much smaller than raw data and reduces the amount of computation on the server side.<br> Also things like unstable data connection, caching and so on will become important at some point.</p><p>With the concept of services with single, independent commands and subscriptions, you can simply decide how a single instance of your application should look like.<br> It is possible to run some services only on the edge device, some services only on the cloud and some of them on both sides.<br> This means, scaling becomes more a decision &quot;where is the best place to do it&quot;.</p><p>Running software built with PURISTA on edge devices is quite simple and does not need special handling.</p><p>There are in general 2 options.</p><h2 id="_100-on-edge-device" tabindex="-1"><a class="header-anchor" href="#_100-on-edge-device" aria-hidden="true">#</a> 100% on edge device</h2><p>The first approach is, to run a single instance of your application and use the <code>DefaultEventBridge</code> of <code>@purista/core</code> package. Especially if there are only limited system resources available, this fits perfectly. There is no need to have some additional message broker running on the edge device. This means lower resource consumption and no software dependency.</p><p><img src="'+a+'" alt="single instance"></p><p>The downside of this approach is, that you need to somehow share the data with your server or cloud instances.<br> One way would be, that you provide some kind of API and the server is pulling the data from your devices.<br> A other option would be, that you create a subscription or a cron job, which is sending data to your cloud. In this case, you also need to handle connection issues, cache data and so on.</p><p>This might be sufficient for many scenarios - but also not sufficient for many other.</p><h2 id="run-on-edge-and-share-data-to-server-cloud" tabindex="-1"><a class="header-anchor" href="#run-on-edge-and-share-data-to-server-cloud" aria-hidden="true">#</a> Run on edge and share data to server &amp; cloud</h2>',12),g={href:"https://mosquitto.org",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,'It is possible to configure the broker in a way, where specific event messages are automatically available in some other broker. This means you can "extract/listen for data" without the need to change the application.',-1),b=e("p",null,"As a simplified illustration how it might look like this:",-1),v=e("p",null,[e("img",{src:u,alt:"edge device example"})],-1),_=e("code",null,"@purista/mqttbridge",-1),y=e("br",null,null,-1),w=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"Pros"),e("ul",null,[e("li",null,"low footprint"),e("li",null,"can be connected to the cloud/server without much effort"),e("li",null,"together with webassembly 🚀"),e("li",null,"use the same application to run on edge and be able to scale on the cloud")])],-1),k=e("div",{class:"hint-container danger"},[e("p",{class:"hint-container-title"},"Cons"),e("ul",null,[e("li",null,"🤷")])],-1);function T(x,I){const s=t("ExternalLinkIcon"),i=t("RouterLink");return d(),c("div",null,[m,e("p",null,[o("The second approach is, to use an MQTT broker like "),e("a",g,[o("mosquitto"),n(s)]),o(" with a low footprint, but more capabilities. An MQTT broker does not only provide better fault tolerance by persisting messages which are not processed. It also provides the capability to connect the edge device to a higher instance like the cloud.")]),f,b,v,e("p",null,[o("PURISTA is providing the "),_,o(" package, which is focusing on IoT and edge devices."),y,o(" You can learn more about it at "),n(i,{to:"/handbook/3._event-bridge/4_mqtt.html"},{default:l(()=>[o("MQTT event bridge")]),_:1}),o(".")]),w,k])}const R=r(p,[["render",T],["__file","2_edge_device.html.vue"]]);export{R as default};