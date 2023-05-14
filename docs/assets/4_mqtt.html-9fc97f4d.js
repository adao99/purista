import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as p,c as l,b as e,d as s,e as n,w as i,a as r}from"./app-2c9217f0.js";const d="/graphic/mqtt_event_bridge_header.png",u={},m=e("p",null,[e("img",{src:d,alt:"AMQP event bridge"})],-1),h=e("h2",{id:"general",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#general","aria-hidden":"true"},"#"),s(" General")],-1),k={href:"https://mosquitto.org",target:"_blank",rel:"noopener noreferrer"},g=r('<p>The MQTT protocol version 5 has some interesting additions, like shared subscriptions, session ttl, message ttl and response fields. This reduces the gap between available broker features and our needs.</p><p>PURISTA provides the <code>@purista/mqttbridge</code></p><div class="hint-container tip"><p class="hint-container-title">Pros</p><ul><li>allows scaling</li><li>fault tollerant</li><li>MQTT is a mature protocol and widely used (IoT/edge)</li></ul></div><div class="hint-container danger"><p class="hint-container-title">Cons</p><ul><li>needs managing of an MQTT broker</li><li>only MQTT 5 is supported</li><li>hard to handle dead letters</li><li>command responses are emitted as 2 messages</li></ul></div><h2 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> Config</h2><p>The MQTT event bridge uses the unified configuration schema as all event bridges.</p>',6),b={class:"hint-container info"},v=e("p",{class:"hint-container-title"},"API documentation",-1),f=r(`<h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> MqttBridge <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@purista/mqttbridge&#39;</span>

<span class="token keyword">const</span> eventBridge <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MqttBridge</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">await</span> eventBridge<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="topic-names" tabindex="-1"><a class="header-anchor" href="#topic-names" aria-hidden="true">#</a> Topic names</h2><p>The MQTT protocol relays on topics for message publishing/subscribe.</p><p>PURISTA is using the following schema for topics:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> topicPrefix <span class="token operator">=</span> config<span class="token punctuation">.</span>topicPrefix
<span class="token keyword">const</span> empty <span class="token operator">=</span> config<span class="token punctuation">.</span>emptyTopicPartString

<span class="token keyword">const</span> path <span class="token function">join</span><span class="token punctuation">(</span>
  topicPrefix<span class="token punctuation">,</span>
  <span class="token function">convertToSnakeCase</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span>messageType<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">convertToSnakeCase</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span>instanceId<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">convertToSnakeCase</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span>principalId <span class="token operator">||</span> empty<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">convertToSnakeCase</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span>sender<span class="token punctuation">.</span>serviceName<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">convertToSnakeCase</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span>sender<span class="token punctuation">.</span>serviceVersion<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">convertToSnakeCase</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span>sender<span class="token punctuation">.</span>serviceTarget<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">convertToSnakeCase</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span>eventName <span class="token operator">||</span> empty<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">convertToSnakeCase</span><span class="token punctuation">(</span><span class="token punctuation">(</span>message <span class="token keyword">as</span> Command<span class="token punctuation">)</span><span class="token punctuation">.</span>receiver<span class="token operator">?.</span>serviceName <span class="token operator">||</span> empty<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">convertToSnakeCase</span><span class="token punctuation">(</span><span class="token punctuation">(</span>message <span class="token keyword">as</span> Command<span class="token punctuation">)</span><span class="token punctuation">.</span>receiver<span class="token operator">?.</span>serviceVersion <span class="token operator">||</span> empty<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">convertToSnakeCase</span><span class="token punctuation">(</span><span class="token punctuation">(</span>message <span class="token keyword">as</span> Command<span class="token punctuation">)</span><span class="token punctuation">.</span>receiver<span class="token operator">?.</span>serviceTarget <span class="token operator">||</span> empty<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This allows to have subscriptions for very specific messages.<br> The MQTT 5 topic alias feature is used for mapping a message to the correlating subscription.</p><p>For command responses, a specific topic pattern is used.<br> The response topic for a command is provided via the MQTT 5 response topic field.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> responseTopic <span class="token operator">=</span> <span class="token function">join</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>topicPrefix<span class="token punctuation">,</span> <span class="token string">&#39;response&#39;</span><span class="token punctuation">,</span> <span class="token function">convertToSnakeCase</span><span class="token punctuation">(</span>commandResponseReceiverInstanceId<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="shared-subscriptions" tabindex="-1"><a class="header-anchor" href="#shared-subscriptions" aria-hidden="true">#</a> Shared subscriptions</h3><p>Subscriptions are per default MQTT 5 shared subscriptions.<br> Shared subscriptions in MQTT are simple to use. It only requires prefixing the topic with <code>$share</code> and a shared subscription name (pubsub name).</p><p>To align these settings, the configuration provides <code>shareTopicPrefix</code> which defaults to <code>$share</code> and should work on most of the brokers.<br> If the broker might require some different prefix, you can align it here.<br> The <code>shareTopicName</code> can be used to set a custom name for your shared subscriptions to prevent name collisions or to use a broker, which is a multi-tenant broker.</p><h2 id="message-timeouts-qos-and-subscriptions" tabindex="-1"><a class="header-anchor" href="#message-timeouts-qos-and-subscriptions" aria-hidden="true">#</a> Message timeouts, QOS, and subscriptions</h2><p>The configuration for the <code>MqttEventBridge</code> differentiates between command &amp; command responses and subscriptions.</p><p>Commands and command responses are basically short-living messages, which are only needed for the time a command is requested, executed and the result is returned.<br> The timeout handling of invocations will be triggered, if commands can&#39;t be handled within the given time.<br> Because of this, we can set command requests and responses to lower QOS and set a low MQTT message expiry time.<br> This will reduce resource consumption and prevent the broker from storing unnecessary data for a long time.</p><p>You can use the MQTT event bridge config options <code>qosCommand</code> and <code>defaultCommandTimeout</code> to align it to your needs.</p><p>On the other hand, subscriptions will need to receive every subscribed message at least once, and they can run at any time.<br> To prevent timing issues, a few things will automatically happen.</p><p>If a command request has the <code>eventName</code> field set as an event name, the command request will be published with the <code>defaultMessageExpiryInterval</code> message expiry time. Otherwise, the <code>defaultCommandTimeout</code> is used, which is most likely a much smaller value.<br> Also, the QOS level is set to the higher value of <code>qosCommand</code> or <code>qoSSubscription</code>. The value of <code>qoSSubscription</code> will most likely be the same or a higher value than <code>qosCommand</code>.<br> This will ensure subscriptions are getting the command request message - if an event name is set.</p><p>Command responses are published with the command settings from the event bridge command configuration.<br> This means, the <code>qosCommand</code> and <code>defaultCommandTimeout</code> values are used, and the response can be returned as fast as possible.<br> The command response message is published to a topic, which is not used by subscriptions.<br> To be able to subscribe to command responses, the MQTT event bridge can automatically publish the command response to the regular topic pattern.<br> These messages will use the <code>qoSSubscription</code> and <code>defaultMessageExpiryInterval</code> settings.<br> The MQTT event bridge configuration contains a setting <code>commandResponsePublishTwice</code> which can be set to <code>always</code>, <code>eventOnly</code>, <code>eventAndError</code>, or <code>never</code>.<br> It defaults to <code>eventOnly</code>.</p><ul><li><p><code>always</code> (not recommended) means, that every response is published a second time to the regular topic pattern. This might result in high resource consumption, as the broker will store messages which most likely will never be consumed by someone, at least for the time of setting <code>defaultMessageExpiryInterval</code>.</p></li><li><p><code>eventOnly</code> (default) means, that only response messages with <code>eventName</code> set to an event name, are published a second time. It is most likely, that these messages are consumed by someone, as they are flagged as events.</p></li><li><p><code>eventAndError</code> means, the same as <code>eventOnly</code>. In addition, error responses are also published a second time. This might be helpful, especially during development and debugging or for use cases where you like to track errors via MQTT messages.</p></li><li><p><code>never</code> (not recommended) disables publishing the command responses a second time. This means, that you will not be able to subscribe to command responses correctly. This is only useful if you don&#39;t have any subscriptions</p></li></ul><h2 id="hints" tabindex="-1"><a class="header-anchor" href="#hints" aria-hidden="true">#</a> Hints</h2><div class="hint-container warning"><p class="hint-container-title">Ensure settings across instances</p><p>Remember to ensure, that QOS, prefixes, and so on are the same on every event bridge instance.<br> Otherwise, you might get some unexpected behaviour.</p></div>`,22),T={class:"hint-container tip"},_=e("p",{class:"hint-container-title"},"OpenTelemetry",-1),y=e("br",null,null,-1),w={href:"https://w3c.github.io/trace-context-mqtt/",target:"_blank",rel:"noopener noreferrer"},x=e("h2",{id:"brokers-and-tools",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#brokers-and-tools","aria-hidden":"true"},"#"),s(" Brokers and tools")],-1),q={href:"https://mosquitto.org/",target:"_blank",rel:"noopener noreferrer"},M={href:"https://www.emqx.com/en/products/nanomq",target:"_blank",rel:"noopener noreferrer"},S={href:"https://www.emqx.com/en/products/mqttx",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://www.hivemq.com/",target:"_blank",rel:"noopener noreferrer"},C={href:"https://vernemq.com/",target:"_blank",rel:"noopener noreferrer"},I={href:"https://activemq.apache.org/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://twitter.com/purista_js",target:"_blank",rel:"noopener noreferrer"},O={href:"https://discord.gg/9feaUm3H2v",target:"_blank",rel:"noopener noreferrer"};function E(N,A){const a=o("ExternalLinkIcon"),t=o("RouterLink");return p(),l("div",null,[m,h,e("p",null,[s("MQTT with the popular "),e("a",k,[s("mosquitto broker"),n(a)]),s(" is one of the most mature and widely used messaging protocols.")]),g,e("div",b,[v,e("ul",null,[e("li",null,[n(t,{to:"/api/modules/purista_core.html#eventbridgeconfig"},{default:i(()=>[s("General event bridge config")]),_:1})]),e("li",null,[n(t,{to:"/api/modules/purista_mqttbridge.html#mqttbridgeconfig"},{default:i(()=>[s("MQTT bridge config")]),_:1})])])]),f,e("div",T,[_,e("p",null,[s("PURISTA is using the MQTT 5 user properties feature to add the OpenTelemetry information to each message, as recommended:"),y,e("a",w,[s("https://w3c.github.io/trace-context-mqtt/"),n(a)])])]),x,e("ul",null,[e("li",null,[e("a",q,[s("Eclipse Mosquitto™"),n(a)])]),e("li",null,[e("a",M,[s("NanoMQ"),n(a)]),s(" and a MQTT UI "),e("a",S,[s("MQTTX"),n(a)])]),e("li",null,[e("a",Q,[s("HiveMQ"),n(a)])]),e("li",null,[e("a",C,[s("VerneMQ"),n(a)])]),e("li",null,[e("a",I,[s("ActiveMQ"),n(a)])])]),e("p",null,[e("strong",null,[s("You can follow updated on Twitter "),e("a",P,[s("@purista_js"),n(a)]),s(" or join the "),e("a",O,[s("Discord server"),n(a)]),s(" to get in touch with PURISTA maintainers and other developers.")])])])}const V=c(u,[["render",E],["__file","4_mqtt.html.vue"]]);export{V as default};