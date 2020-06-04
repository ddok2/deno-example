# deno-example

```
$ deno run index.ts
error: Uncaught PermissionDenied: network access to "0.0.0.0:8888", run again with the --allow-net flag
    at unwrapResponse ($deno$/ops/dispatch_json.ts:43:11)
    at Object.sendSync ($deno$/ops/dispatch_json.ts:72:10)
    at Object.listen ($deno$/ops/net.ts:51:10)
    at listen ($deno$/net.ts:152:22)
    at serve (https://deno.land/std/http/server.ts:252:20)
    at file:///Users/sung/Development/02.study/deno/deno-example/index.ts:5:16
```

```bash
$ deno run --allow-net  index.ts
http://localhost:8888
```
