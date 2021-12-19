## Issue

`fastify-autoload` does not throw an error when parsing a plugin file fails,
and instead fails to load subsequent plugins.

## Reproduction

The minimal server setup will load routes in `./routes` with `fastify-autoload`,
and print all loaded routes.

1. Run

```shell
$ node ./server.js
```

At the moment, only a valid plugin/route file is available in `./routes`: `valid.js`.

Result:

```
$ node ./server.js
└── /valid (GET)
```

2. Insert a plugin which fails to parse, and run again:

```shell
$ mv disabled-routes/error-in-plugin.js routes/
$ node ./server.js
```

The `error-in-plugin` file has a reference error. When fastify-autoload silently
fails to load it, it will also not load subsequent plugins (`valid.js`):

```
$ node ./server.js
└── /
```

3. Rename `valid.js` and run:

```shell
$ mv routes/valid.js routes/a-valid-route.js
$ node ./server.js
```

Because `a-valid-route` comes before `error-in-plugin`, the valid plugin will
now be loaded:

```
$ node ./server.js
└── /valid (GET)
```

4. There are other kind of issues that cause this behaviour.

Try moving the other invalid plugin files into `./routes`.
