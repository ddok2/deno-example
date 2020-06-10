import { Router } from 'https://deno.land/x/oak/mod.ts'
import createUser from './handler/createUser.ts'
import getUsers from './handler/getUsers.ts'
import { main } from './handler/common.ts'

const router = new Router()

router.get('/', main).get('/users', getUsers).post('/users', createUser)

export default router
