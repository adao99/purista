---
order: 80
title: Zipkin
shortTitle: Zipkin
description: Zipkin
image: https://purista.dev/graphic/zipkin_screenshot.png
tag:
  - opentelemetry
  - Zipkin
---


![Zipkin](/graphic/zipkin_screenshot.png)

__Official website: [Zipkin](https://zipkin.io)__

See it in action and try out!  
You will need docker and docker-compose installed at your machine.  
At the [PURISTA repository](https://github.com/sebastianwessel/purista) in `examples/fullexample` you will find a running example:

Start the required docker containers:

```bash
npm run zipkin:up
```

Open the Zipkin in your browser: [http://localhost:9411](http://localhost:9411).

Start the example:

```bash
npm run zipkin:start
```

To generate some traces, go to the OpenAPI UI at [http://localhost:8080/](http://localhost:8080/) and call some commands.  
To stop and cleanup and stop all docker containers:

```bash
npm run zipkin:down
```

__You can follow updated on Twitter [@purista_js](https://twitter.com/purista_js) or join the [Discord server](https://discord.gg/9feaUm3H2v) to get in touch with PURISTA maintainers and other developers.__
