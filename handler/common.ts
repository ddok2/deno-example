import { Response } from 'https://deno.land/x/oak/mod.ts'

const main = ({ response }: { response: Response }) => {
  response.body = { msg: `Hello, ${ [...'node'].sort().join('') }🦖?!!!` }
}

const notFound = ({ response }: { response: Response }) => {
  response.status = 404
  response.body = { msg: 'Not Found' }
}

export {
  main,
  notFound,
}
