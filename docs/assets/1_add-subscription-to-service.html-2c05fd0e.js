import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as d,c as p,b as s,d as e,e as n,w as t,a}from"./app-d373f43b.js";const u="/graphic/add_subscription.png",m="/graphic/subscription_builder.svg",h={},b=a('<p><img src="'+u+`" alt="Add subscription with cli"></p><p>A subscription is a function which will be triggered by messages and events, when the given criteria are matching.<br> The producer of the message does not have knowledge about the subscription.</p><p>Subscriptions do ot need to return a value.<br> If a subscription is returning a value, it will be emitted as custom message to the event bridge.<br> The subscription does not have any knowledge if the costum message has a consumer.</p><p>For adding a subscription to a service, you can use the PURISTA CLI.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>purista <span class="token function">add</span> subscription
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The CLI will guide you through all steps and will create all files for you.<br> In the first step, you will be asked for the name of the new subscription.<br> We will start with <em>sendWelcomeEmail</em>.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>? What is the name of the new subscription send welcome email
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>As you can see, it is possible to enter the name of the subscription in a very natural way.<br> The CLI tool will handle the naming conventions for you.<br> Subscription names will be camel-case.</p><div class="hint-container tip"><p class="hint-container-title">Try to use a subscription name, which is:</p><ul><li>global unique (a subscription in different service versions should have the same name)</li><li>short, but speaking &amp; understandable</li><li>use simple present, like <code>sendWelcomeEmail</code> or <code>triggerWorkflow</code></li><li>try to standard prefixes, like <code>createBankAccount</code> or <code>updateUserProfile</code></li></ul></div><p>After you have confirmed your input by pressing the enter key, you will be asked for a short description of the subscription.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>? What is the matter of subscription <span class="token string">&quot;sendWelcomeEmail&quot;</span> send a welcome mail to new registered <span class="token function">users</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Here, you should enter some short, general description, which will be used for some human-facing documentation.<br> So, please provide here something like: <em>send a welcome mail to new registered users</em>.</p><p>In the next step, you will be asked to select an event name. Then subscription will be triggered as soon as an event with given name is sent.</p><p>After selecting the event name, you must select the service.<br> Use the arrow keys to select the service (and version), on which the new command should be registered.<br> In our example, choose <em>User</em> .</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>? <span class="token keyword">select</span> a <span class="token function">service</span> email <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Confirm your choice by pressing the enter key.</p><p>Now, the files will be created, the event name will be added as a new enum entry and the command will be added to the command list of the service.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>✔  -<span class="token operator">&gt;</span> checking current setup
✔  ++ /src/service/email/v1/subscription/sendWelcomeEmail/index.ts
✔  ++ /src/service/email/v1/subscription/sendWelcomeEmail/sendWelcomeEmail.test.ts
✔  ++ /src/service/email/v1/subscription/sendWelcomeEmail/schema.ts
✔  ++ /src/service/email/v1/subscription/sendWelcomeEmail/types.ts
✔  ++ /src/service/email/v1/subscription/sendWelcomeEmail/sendWelcomeEmailSubscriptionBuilder.ts
✔  _+ /src/service/email/v1/index.ts
⠋ try to update existing files - pls be patient<span class="token operator">!</span>
👷🏗️ -<span class="token operator">&gt;</span> ensure new enum entry
🕵️  -<span class="token operator">&gt;</span> event exist <span class="token keyword">in</span> enum NewUserRegistered
👷🏗️ -<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> event name from enum <span class="token keyword">in</span> subscription builder
👍  -<span class="token operator">&gt;</span> updated event to use enum <span class="token keyword">in</span> subscription builder
⠙ 👷🏗️ -<span class="token operator">&gt;</span> try to <span class="token function">add</span> definition to builder
👍  -<span class="token operator">&gt;</span> definition added to <span class="token function">service</span> builder
⠹ 👷🏗️ -<span class="token operator">&gt;</span> lint  src/service/email/v1/subscription/sendWelcomeEmail/index.ts
👷🏗️ -<span class="token operator">&gt;</span> lint  src/service/email/v1/subscription/sendWelcomeEmail/schema.ts
👷🏗️ -<span class="token operator">&gt;</span> lint  src/service/email/v1/subscription/sendWelcomeEmail/types.ts
👷🏗️ -<span class="token operator">&gt;</span> lint  src/service/email/v1/subscription/sendWelcomeEmail/sendWelcomeEmail.test.ts
👷🏗️ -<span class="token operator">&gt;</span> lint  src/service/email/v1/subscription/sendWelcomeEmail/sendWelcomeEmailSubscriptionBuilder.ts
👷🏗️ -<span class="token operator">&gt;</span> lint  src/service/email/v1/emailV1Service.ts
👷🏗️ -<span class="token operator">&gt;</span> lint  src/service/email/v1/index.ts
👷🏗️ -<span class="token operator">&gt;</span> lint  src/service/ServiceEvent.enum.ts
⠸ 👍  -<span class="token operator">&gt;</span> <span class="token keyword">done</span> linting
✔  -<span class="token operator">&gt;</span> files updated
⠋ 
🎉 The subscription sendWelcomeEmail <span class="token keyword">in</span> email v1 is created 🎉


start adding your business logic here:
./src/service/email/v1/subscription/sendWelcomeEmail/sendWelcomeEmailSubscriptionBuilder.ts


✔  -<span class="token operator">&gt;</span> 📖 Learn <span class="token function">more</span> about PURISTA at <span class="token operator">&lt;</span>https://purista.dev<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As you can see, in the output above, the CLI will print a direct link to the subscription builder file, where you can start adding your business logic.</p><h2 id="structure" tabindex="-1"><a class="header-anchor" href="#structure" aria-hidden="true">#</a> Structure</h2><p>A folder for the new subscription is created - in our example it is <code>src/service/user/v1/subscription/sendWelcomeEmail</code>.<br> Here, you can find, all files relating to this single subscription function.</p><p>The structure follows the same pattern as for command functions.</p><h2 id="command-builder-file" tabindex="-1"><a class="header-anchor" href="#command-builder-file" aria-hidden="true">#</a> Command builder file</h2><p>The main file for a subscription is the subscription builder file - <code>sendWelcomeEmailSubscriptionBuilder.ts</code> in our example.<br> As you can see, the CLI tool already added some configuration properties - the ones you normally always have for a subscription.</p><p>The implementation of the business logic should be done in this file.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ServiceEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../../../../ServiceEvent.enum&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> emailV1ServiceBuilder <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../../emailV1ServiceBuilder&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> emailV1SendWelcomeEmailInputPayloadSchema <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./schema&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> sendWelcomeEmailSubscriptionBuilder <span class="token operator">=</span> emailV1ServiceBuilder
  <span class="token punctuation">.</span><span class="token function">getSubscriptionBuilder</span><span class="token punctuation">(</span><span class="token string">&#39;sendWelcomeEmail&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;send a welcome mail to new registered users&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">subscribeToEvent</span><span class="token punctuation">(</span>ServiceEvent<span class="token punctuation">.</span>NewUserRegistered<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">addPayloadSchema</span><span class="token punctuation">(</span>emailV1SendWelcomeEmailInputPayloadSchema<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">setSubscriptionFunction</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>_context<span class="token punctuation">,</span> _payload<span class="token punctuation">,</span> _parameter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// add your business logic here</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),v={class:"hint-container info"},g=s("p",{class:"hint-container-title"},"More on subscription builder usage:",-1),f=s("h2",{id:"implement-the-subscription",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#implement-the-subscription","aria-hidden":"true"},"#"),e(" Implement the subscription")],-1),k=s("p",null,[e("In the subscription builder file, you can implement the subscription function."),s("br"),e(" A subscription function has the service instance as "),s("code",null,"this"),e(" scope assigned. Because of this, you can't use arrow functions.")],-1),y=a(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token punctuation">.</span><span class="token function">setSubscriptionFunction</span><span class="token punctuation">(</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> payload<span class="token punctuation">,</span> parameter<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// add your business logic here</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),w=a(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token punctuation">.</span><span class="token function">setSubscriptionFunction</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> payload<span class="token punctuation">,</span> parameter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// add your business logic here</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>this</code> scope allows access to methods and properties of the service instance.<br> You can access:</p><ul><li>the service config <code>this.config</code></li><li>the service information name, version and description of service with <code>this.info</code></li></ul><p><strong>It is not recommended to directly access the service instance for any other purpose.</strong>.<br> Use the function context instead, to access logger, stores and other functionality.</p><p>As types are automatically generated, depending on given schemas and settings, a logical flow for adding settings is adviced.<br> You should always start with the subscription function input and output schemas, follwed by the transform schemas.</p><p><img src="`+m+'" alt="Subscription builder defintion and execution flow"></p><h3 id="subscription-function-context" tabindex="-1"><a class="header-anchor" href="#subscription-function-context" aria-hidden="true">#</a> Subscription function context</h3><p>The function context provides a unified interface for</p><ul><li>the logger</li><li>the original subscription message</li><li>the config store</li><li>the secret store</li><li>the state store</li><li>a method <code>emit</code>, which allows emitting of custom events to the event bridge</li><li>a method <code>invoke</code>, which allows invoking of other subscriptions</li></ul>',9),x={class:"hint-container tip"},_=s("p",{class:"hint-container-title"},"API documentation",-1),S=a(`<h3 id="payload" tabindex="-1"><a class="header-anchor" href="#payload" aria-hidden="true">#</a> Payload</h3><p>The payload contains the payload for this subscription. It is validated against the input payload schema, before the subscription function is called. They typescript type is automatically generated from the input schema.</p><h3 id="parameter" tabindex="-1"><a class="header-anchor" href="#parameter" aria-hidden="true">#</a> Parameter</h3><p>In addition to the payload, a subscription function can have parameters. Parameters are only set, if the the subscription is subscribed to command request messages.<br> Extended subscribing is not supported by all event bridges.</p><h3 id="return-value" tabindex="-1"><a class="header-anchor" href="#return-value" aria-hidden="true">#</a> Return value</h3><p>A subscription function is can return a value. If the subscriptions is returning a value, the result value will be validated against the output schema.<br> The result typescript type of the subscription function is generated from the output schema.</p><p>If a subscription is returning a result, it will be emitted as custom message to the event bridge.</p><h2 id="subscribing" tabindex="-1"><a class="header-anchor" href="#subscribing" aria-hidden="true">#</a> Subscribing</h2><p>Subscriptions are triggered by messages with specific properties.<br> The subscription builder provides methods to define, which properties must match to execute the subscription.<br> It depends on the event bridge and the underlaying message broker if complex subscriptions are supported.</p><h3 id="subscribe-by-event-name" tabindex="-1"><a class="header-anchor" href="#subscribe-by-event-name" aria-hidden="true">#</a> Subscribe by event name</h3><p>Command response messages can have an event name assigned. Custom messages must have an event name assigned.<br> A subscription can subscribe messages by event name.<br> This is supported by all event bridges.</p><p>Usage:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>subscriptionBuilder<span class="token punctuation">.</span><span class="token function">subscribeToEvent</span><span class="token punctuation">(</span><span class="token string">&#39;eventName&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="complex-subscriptions" tabindex="-1"><a class="header-anchor" href="#complex-subscriptions" aria-hidden="true">#</a> Complex subscriptions</h3><p>Complex subscriptions provide a way to define more specific properties.<br> Only some of the available event bridges support complex subscriptions.</p><p>Available properties:</p><ul><li><code>filterReceivedBy</code> = the message must be sent to receiver</li><li><code>filterSentFrom</code> = the message must be sent from receiver</li><li><code>filterForMessageType</code> = the message must have a specific message type</li><li><code>filterPrincipalId</code> = the message must have the given principal id</li><li><code>filterInstanceId</code> = the message must be sent from given instance</li></ul><p>In most use cases, there is no need to use complex subscriptions and subscribing by event name is sufficient.<br> But in some scenarios, like in IoT, it might make life easier, if there are possibilities to use complex subscriptions.</p><div class="hint-container warning"><p class="hint-container-title">Keep in mind</p><ul><li>the event bridge must support complex subscriptions</li><li>all given properties must match to trigger the subscription</li></ul></div><h2 id="event-bridge-advice" tabindex="-1"><a class="header-anchor" href="#event-bridge-advice" aria-hidden="true">#</a> Event bridge advice</h2><p>The PURISTA builder for commands and subscriptions allowing the developer to give the underlaying event bridge advices.<br> Advices can help to build more robust systems and to configure the system for special needs.</p><p>If the underlaying message broker does not support a feature, required for an advice, the advice is ignored and has no effect.</p><h3 id="adviceautoacknowledgemessage" tabindex="-1"><a class="header-anchor" href="#adviceautoacknowledgemessage" aria-hidden="true">#</a> adviceAutoacknowledgeMessage</h3><p>Many message brokers have the mesage acknowledge pattern. If a message is sent from the message broker and received by the consumer, the message broker expects to get a acknowledgement from the consumer.<br> Because of this, there are two major questions here:</p><p>How to handle a message with negative or without acknowledgment?<br> This will mostly configured on the message broker itself.<br> They will re-send the message or move the message to a dead letter queue.<br> The consumer should not take care of this.</p><p>When should the consumer return the acknowledgment - on receiving the message or after processing the message?<br> This is on consumer side and the message broker can not take care of this.<br> The <code>adviceAutoacknowledgeMessage</code> method in the builders, is advising the PURISTA even bridge to send the acknowledgement as soon as the message receives. When the method is called with parameter <code>false</code>, the acknowledgement is sent, after the processing the message. In case the processing is throwing an <code>UnhandledError</code>, a negative acknowledgement is sent.</p><div class="hint-container info"><p class="hint-container-title">Default settings:</p><p>Enabled for commands by default.<br> Disabled for subscriptions by default.</p></div><h3 id="advicedurable" tabindex="-1"><a class="header-anchor" href="#advicedurable" aria-hidden="true">#</a> adviceDurable</h3>`,28),E={href:"https://www.rabbitmq.com/queues.html#durability",target:"_blank",rel:"noopener noreferrer"},I=a('<div class="hint-container info"><p class="hint-container-title">Default settings:</p><p>Setting not available for commands - disabled by default.<br> Enabled for subscriptions by default.</p></div><h3 id="receivemessageoneveryinstance" tabindex="-1"><a class="header-anchor" href="#receivemessageoneveryinstance" aria-hidden="true">#</a> receiveMessageOnEveryInstance</h3><p>Per default, subscriptions will use a queue which is shared by all instances to be able to scale.<br> But there are use cases, with the need that every instance will receive a message.</p><p>For example in IoT environments there is often the need, that all devices receive a message.</p><p>Use the subscription builder method <code>receiveMessageOnEveryInstance</code>, if you want want that a message is sent to all instances.</p><div class="hint-container info"><p class="hint-container-title">Default settings:</p><p>Setting not available for commands - disabled by default.<br> Disabled for subscriptions by default.</p></div>',6);function T(W,A){const i=o("RouterLink"),r=o("Badge"),c=o("ExternalLinkIcon");return d(),p("div",null,[b,s("div",v,[g,s("ul",null,[s("li",null,[e("API documentation: "),n(i,{to:"/api/classes/purista_core.SubscriptionDefinitionBuilder.html#methods"},{default:t(()=>[e("SubscriptionDefinitionBuilder - Methods")]),_:1})])])]),f,k,n(r,{text:"👎 does not work",type:"danger"}),y,n(r,{text:"👍 works",type:"tip"}),w,s("div",x,[_,s("p",null,[e("The "),n(i,{to:"/api/modules/purista_core.html#subscriptionfunctioncontext"},{default:t(()=>[e("SubscriptionFunctionContext")]),_:1}),e(" is a union type of "),n(i,{to:"/api/modules/purista_core.html#contextbase"},{default:t(()=>[e("ContextBase")]),_:1}),e(" and "),n(i,{to:"/api/modules/purista_core.html#subscriptionfunctioncontextenhancements"},{default:t(()=>[e("SubscriptionFunctionContextEnhancements")]),_:1})])]),S,s("p",null,[e("A good explanation can be found here: "),s("a",E,[e("RabbitMQ documentation"),n(c)]),e(".")]),I])}const P=l(h,[["render",T],["__file","1_add-subscription-to-service.html.vue"]]);export{P as default};