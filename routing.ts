import { Router } from 'https://deno.land/x/oak/mod.ts'
import { main } from './handler/common.ts'
import createUser from './handler/createUser.ts'
import getUsers from './handler/getUsers.ts'
import getUserDeatils from './handler/getUserDetails.ts'

const router = new Router()

router.get('/', main).
  get('/users', getUsers).
  get('/users/:id', getUserDeatils).
  post('/users', createUser)

export default router
