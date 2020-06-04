import { serve } from 'https://deno.land/std/http/server.ts'

const port: number = 8888

const server = serve({ port })
console.log('http://localhost:8888')
for await (const req of server) {
  req.respond({body: "Hello, Deno🦖?!!\n"})
}
