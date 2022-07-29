import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{o as c,c as l,b as a,e as s,a as e,d as n,r as i}from"./app.0777453f.js";const r={},u=e(`<h1 id="create-a-new-service" tabindex="-1"><a class="header-anchor" href="#create-a-new-service" aria-hidden="true">#</a> Create a new service</h1><p>A service is a logical group of functions and subscriptions. This where the domain driven aspect comes in.<br> In our example, we will use the classic example - Users.</p><p>We want to have the domain <em>User</em> and the following functionality:</p><ul><li>sign up a new user</li><li>send a welcome email to user</li></ul><h2 id="set-up-a-new-service" tabindex="-1"><a class="header-anchor" href="#set-up-a-new-service" aria-hidden="true">#</a> Set up a new service</h2><p>First, we need to create a new service.<br> All we need to do is to create a new class which extends the <code>Service</code> class.</p><p>Create a folder <code>src/service/user</code> and inside this folder create a file <code>UserServiceBuilder.ts</code> with following content:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ServiceBuilder<span class="token punctuation">,</span> ServiceInfoType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@purista/core&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> userServiceInfo<span class="token operator">:</span> ServiceInfoType <span class="token operator">=</span> <span class="token punctuation">{</span>
  serviceName<span class="token operator">:</span> <span class="token string">&#39;User&#39;</span><span class="token punctuation">,</span>
  serviceVersion<span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>
  serviceDescription<span class="token operator">:</span> <span class="token string">&#39;service which handles all user related information&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> UserServiceBuilder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServiceBuilder</span><span class="token punctuation">(</span>userServiceInfo<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Create a file <code>UserService.ts</code> in <code>src/service/user</code> with following content:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> UserServiceBuilder <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./UserServiceBuilder&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> UserService <span class="token operator">=</span> UserServiceBuilder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Add a file <code>index.ts</code> in <code>src/service/user</code> and export our user service.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">&#39;./UserService.ts&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Now we are ready to use our Service <em>User</em> in our <code>src/index.ts</code>.<br> Extend the file as shown below:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>  <span class="token comment">// add imports</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> UserService<span class="token punctuation">,</span> userServiceInfo<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./service/user&#39;</span>


  <span class="token comment">// at the end of function main below await httpServerService.start()</span>

  <span class="token comment">// create the user service instance</span>
  <span class="token keyword">const</span> userService <span class="token operator">=</span> UserService<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span>baseLogger<span class="token punctuation">,</span> eventBridge<span class="token punctuation">)</span>

  <span class="token comment">// start the user service</span>
  <span class="token keyword">await</span> userService<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Our domain service <em>User</em> is now created, initialized and started. It has no functionality yet, so let&#39;s add some logic.</p><h2 id="create-a-command-function" tabindex="-1"><a class="header-anchor" href="#create-a-command-function" aria-hidden="true">#</a> Create a command function</h2><p>Now we want to be able to sign up new users, so we will create a function for it.</p><p>Create a new subfolder <code>src/service/user/commands/signUp</code> and create files <code>index.ts</code> &amp; <code>schema.ts</code>.</p>`,18),d=n("First, let's define the shape of our data."),k=a("br",null,null,-1),v=n(" To do so, we will use "),m={href:"https://github.com/colinhacks/zod",target:"_blank",rel:"noopener noreferrer"},h=n("zod library"),b=n(". This will provide use schema validation, typescript types and with awesome plugin "),f={href:"https://www.npmjs.com/package/@anatine/zod-openapi",target:"_blank",rel:"noopener noreferrer"},w=n("zod-openapi"),g=n(" OpenApi (swagger) definition from one single definition."),y=e(`<p>Add the needed dependencies to our project:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save zod @anatine/zod-openapi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="define-schema-and-type" tabindex="-1"><a class="header-anchor" href="#define-schema-and-type" aria-hidden="true">#</a> Define schema and type</h3><p>Now we can start to create a schema for input payload, parameters and output payload.</p><p>Add the following content into <code>src/service/user/commands/signUp/schema.ts</code>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> extendApi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@anatine/zod-openapi&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> z <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;zod&#39;</span>

<span class="token comment">// define the input parameters</span>
<span class="token comment">// parameters are given as object (key-value)</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> inputParameterSchema <span class="token operator">=</span> z<span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// define the input payload</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> inputPayloadSchema <span class="token operator">=</span> <span class="token function">extendApi</span><span class="token punctuation">(</span>
  z<span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    email<span class="token operator">:</span> <span class="token function">extendApi</span><span class="token punctuation">(</span>
      z
        <span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">email</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">transform</span><span class="token punctuation">(</span><span class="token punctuation">(</span>email<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> email<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        example<span class="token operator">:</span> <span class="token string">&#39;newuser@example.com&#39;</span><span class="token punctuation">,</span>
        title<span class="token operator">:</span> <span class="token string">&#39;the users email address&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    password<span class="token operator">:</span> <span class="token function">extendApi</span><span class="token punctuation">(</span>z<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      example<span class="token operator">:</span> <span class="token string">&#39;the_super_secret_user_password&#39;</span><span class="token punctuation">,</span>
      title<span class="token operator">:</span> <span class="token string">&#39;the user password&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

<span class="token comment">// define the output payload</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> outputPayloadSchema <span class="token operator">=</span> z<span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  uuid<span class="token operator">:</span> <span class="token function">extendApi</span><span class="token punctuation">(</span>z<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">uuid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> example<span class="token operator">:</span> <span class="token string">&#39;e118e649-09c4-4d00-917b-3a0a940e1d45&#39;</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">&#39;the users uuid&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As you can see, we define the shape of our data.<br> We also add some additional metadata like <code>title</code> and <code>example</code>. This will be used to generate the OpenApi definition for our function, as we want to expose this function as a rest API endpoint.</p><h3 id="add-the-function-to-service" tabindex="-1"><a class="header-anchor" href="#add-the-function-to-service" aria-hidden="true">#</a> Add the function to service</h3><p>Now it&#39;s time to let our <code>User</code> service know that he has some function <code>signUp</code> and we need to implement the logic for it.<br> First, we will create a function definition in our <code>src/service/user/commands/signUp/index.ts</code>:</p>`,9),S=e(`<p>Keep the order, schema, hook and function implementation as very last, to have correct types!</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> UserServiceBuilder <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../../UserServiceBuilder&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> UserService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../../UserService&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> inputParameterSchema<span class="token punctuation">,</span> inputPayloadSchema<span class="token punctuation">,</span> outputPayloadSchema <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./schema&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> userSignUpBuilder <span class="token operator">=</span> UserServiceBuilder<span class="token punctuation">.</span><span class="token function">getFunctionBuilder</span><span class="token punctuation">(</span><span class="token string">&#39;signUp&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sign up a new unknown user&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;NewUserCreated&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">addInputSchema</span><span class="token punctuation">(</span>inputPayloadSchema<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">addParameterSchema</span><span class="token punctuation">(</span>inputParameterSchema<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">addOutputSchema</span><span class="token punctuation">(</span>outputPayloadSchema<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">exposeAsHttpEndpoint</span><span class="token punctuation">(</span><span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/sign-up&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">setFunction</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> logger <span class="token punctuation">}</span><span class="token punctuation">,</span> payload<span class="token punctuation">,</span> _parameter<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    logger<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&#39;sign up new user&#39;</span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span>

    <span class="token keyword">const</span> uuid <span class="token operator">=</span> <span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    logger<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>config<span class="token punctuation">)</span> <span class="token comment">// log the service config from UserService instance</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      uuid
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This code should be self explaining.<br> We say:</p><p><em>There is a new function <code>signUp</code> in <code>UserService</code>, which will create an event <code>NewUserCreated</code>, with input schema, parameter schema, output schema, and we expose it as POST endpoint on <code>/sign-up</code> path.</em></p><p>It&#39;s a simple function, where we log the input, the config and return a response object.</p><p><strong>But you can see some basic features:</strong></p><p>Our function is an asynchronous function, which allows us to use async-await within our code.<br> The types generated from schema are used, and your linter/typescript will complain on mismatches.<br> You have a <code>this</code> scope, which is the instance of your domain service class <code>UserService</code>.<br> The first parameter of our function provides the function context.</p><p>The function context contains useful things like logger, the full original command message and functions to invoke other service functions or emit custom events.</p>`,8),x=e(`<p><em>You can&#39;t use arrow function to create a new service function, because they don&#39;t allow the <code>this</code> scope!</em></p><p>In the real world, holding states in the service class is a bad approach and should be avoided.<br> Such stuff is hard to handle and to scale. Try to keep things as stateless as possible.</p><p>So, you might ask why a service class at all?</p><p>There are use cases, where it makes sense to have it - if not, than it&#39;s an empty class which doesn&#39;t hurt.</p><p>Use cases are something like simply holding some initial configurations, which is needed by service functions.</p><p>Now we should add the function definition to our <code>User</code> service in our <code>src/service/user/UserService.ts</code>.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> userSignUpBuilder <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./commands/signUp&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> UserServiceBuilder <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./UserServiceBuilder&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> UserService <span class="token operator">=</span> UserServiceBuilder<span class="token punctuation">.</span><span class="token function">addFunctionDefinition</span><span class="token punctuation">(</span>userSignUpBuilder<span class="token punctuation">.</span><span class="token function">getDefinition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you now start the application with <code>npm start</code> you should have a POST endpoint <code>https://localhost:8080/api/v1/sign-up</code> which should trigger our function.</p><p>There you can see, that we expose our function versioned by the service version.<br> This means, we can also have a domain service, running with different versions.</p><p>If you have, for example, breaking API changes in a new version of our <code>User</code> service, then you would create a new Service (or copy the old one and make your changes) and set service version to a higher version.</p><p>Try to open <code>https://localhost:8080/api</code> in your browser. You should see the OpenApi- UI with your new endpoint.</p><h2 id="add-a-subscription" tabindex="-1"><a class="header-anchor" href="#add-a-subscription" aria-hidden="true">#</a> Add a subscription</h2><p>Now, our service should not only be able to create new users. New users should get a welcome or confirmation email.</p><p>You could pack the send email logic into our existing function, but this might not the best way.<br> Why?<br> Because you start mixing up different things, increase the complexity of one simple, single function, and it increases the test complexity, while decreasing the stability and maintenance.</p><p>It&#39;s better to have a subscription, which listens for all new created users and email them.<br> This allows you:</p><ul><li>to implement retry mechanism on sending an email more easily</li><li>lowers the amount of mocking &amp; stubbing within single unit tests</li><li>reduces the request response time for the user, as there is no need to wait for the email to be sent</li><li>keeps your &quot;creation&quot; code clean and easy by separating the &quot;email send&quot; code</li><li>decouple things and remove/avoid dependencies</li><li>separate user creation and sending an email in deployment later on (allows different scaling if needed)</li></ul><p>Back to our example.</p><p>Create a new subfolder <code>src/service/user/subscriptions/sendWelcomeEmail</code> and create files <code>index.ts</code>.</p><p>Define a subscription like this:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> EventName <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../../../../types&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> UserServiceBuilder <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../../UserServiceBuilder&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> sendWelcomeMailBuilder <span class="token operator">=</span> UserServiceBuilder<span class="token punctuation">.</span><span class="token function">getSubscriptionBuilder</span><span class="token punctuation">(</span>
  <span class="token string">&#39;sendWelcomeEmail&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;send a welcome email to new costumers&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">subscribeToEvent</span><span class="token punctuation">(</span><span class="token string">&#39;NewUserCreated&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">setFunction</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> logger <span class="token punctuation">}</span><span class="token punctuation">,</span> _payload<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;Hello from sendWelcomeEmail&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It is quite simple and similar to function definitions.</p><p>Here we create a new subscription <code>sendWelcomeEmail</code> with some description as second parameter.<br> We want to subscribe to all messages with event name <code>NewUserCreated</code>.</p><p>There is only one thing left.<br> Add the subscription to our service in <code>src/service/user/UserService.ts</code>.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> userSignUpBuilder <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./commands/signUp&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> sendWelcomeMailBuilder <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./subscriptions/sendWelcomeMail&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> UserServiceBuilder <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./UserServiceBuilder&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> UserService <span class="token operator">=</span> UserServiceBuilder<span class="token punctuation">.</span><span class="token function">addFunctionDefinition</span><span class="token punctuation">(</span>userSignUpBuilder<span class="token punctuation">.</span><span class="token function">getDefinition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">addSubscriptionDefinition</span><span class="token punctuation">(</span>sendWelcomeMailBuilder<span class="token punctuation">.</span><span class="token function">getDefinition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you restart your program, you will see a console log, each time the <code>/sign-up</code> endpoint is called successfully.</p><h2 id="call-service-function-from-other-service" tabindex="-1"><a class="header-anchor" href="#call-service-function-from-other-service" aria-hidden="true">#</a> Call service function from other service</h2><p>Until now, we have a simple request-respone-pattern and a subscription which listens for the response.<br> The request is triggered by some url request.</p><p>But in real world, you might need to call an other service function within a service function.</p><p>With PURISTA it is quite easy. The function context provides an asynchronous function <code>invoke</code>.</p><p>Example:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">setFunction</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> invoke <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
  <span class="token comment">// invokeResponse type can be set - here it is set to type string</span>
  <span class="token keyword">const</span> invokeResponse <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token generic-function"><span class="token function">invoke</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
    <span class="token comment">// the address of service to call</span>
    <span class="token punctuation">{</span>
      serviceName<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>serviceInfo<span class="token punctuation">.</span>serviceName<span class="token punctuation">,</span>
      serviceVersion<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>serviceInfo<span class="token punctuation">.</span>serviceVersion<span class="token punctuation">,</span>
      serviceTarget<span class="token operator">:</span> UserFunction<span class="token punctuation">.</span>TestFunction<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// the input payload</span>
    <span class="token punctuation">{</span>
      sample<span class="token operator">:</span> <span class="token string">&#39;payload from signUp function&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// the input parameter</span>
    <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If the invoked service fails for some reason, the <code>invoke</code> will throw <code>HandledError</code> or <code>UnhandledError</code>.<br> There is also no input validation on the callers side. To ensure correct types and input, you should share the types between the two service functions, or you should add explicit input validation.<br> The response is also only validated on the invoked service.</p>`,32);function U(_,B){const t=i("ExternalLinkIcon"),o=i("Badge");return c(),l("div",null,[u,a("p",null,[d,k,v,a("a",m,[h,s(t)]),b,a("a",f,[w,s(t)]),g]),y,s(o,{text:"Be aware",type:"warning"}),S,s(o,{text:"\u26A0\uFE0F Be aware",type:"warning"}),x])}var A=p(r,[["render",U],["__file","2_create-new-service.html.vue"]]);export{A as default};