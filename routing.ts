import { Router } from 'https://deno.land/x/oak/mod.ts'
import createUser from './handler/createUser.ts'

const router = new Router()

router
  .post('/users', createUser)

export default router
