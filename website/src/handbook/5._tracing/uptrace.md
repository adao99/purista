---
order: 70
title: Uptrace
shortTitle: Uptrace
description: Uptrace
image: https://purista.dev/graphic/uptrace_screenshot.png
tag:
  - opentelemetry
  - Uptrace
---


![Uptrace](/graphic/uptrace_screenshot.png)

__Official website: [Uptrace](https://uptrace.io)__

See it in action and try out!  
You will need docker and docker-compose installed at your machine.  
At the [PURISTA repository](https://github.com/sebastianwessel/purista) in `examples/fullexample` you will find a running example:

Start the required docker containers:

```bash
npm run uptrace:up
```

Open the Uptrace in your browser: [http://localhost:14318](http://localhost:14318).  
In the top bar on, besides the Uptrace logo, select the _PURISTA_ project.

Start the example:

```bash
npm run uptrace:start
```

To generate some traces, go to the OpenAPI UI at [http://localhost:8080/](http://localhost:8080/) and call some commands.  
To stop and cleanup and stop all docker containers:

```bash
npm run uptrace:down
```

__You can follow updated on Twitter [@purista_js](https://twitter.com/purista_js) or join the [Discord server](https://discord.gg/9feaUm3H2v) to get in touch with PURISTA maintainers and other developers.__
