import { Router, Response } from 'https://deno.land/x/oak/mod.ts'
import createUser from './handler/createUser.ts'

const router = new Router()

const test = ({ response }: { response: Response }): void => {
  response.body = { msg: `Hello, ${[..."node"].sort().join("")}🦖?!!!` }
}

router
  .post('/users', createUser)
  .get('/', test)

export default router
