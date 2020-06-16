import { Router } from 'https://deno.land/x/oak/mod.ts'
import { main } from './handler/common.ts'
import createUser from './handler/createUser.ts'
import getUsers from './handler/getUsers.ts'
import getUserDetails from './handler/getUserDetails.ts'
import updateUser from './handler/updateUser.ts'
import deleteUser from './handler/deleteUser.ts'

const router = new Router()

router.get('/', main).
  get('/users', getUsers).
  get('/users/:id', getUserDetails).
  post('/users', createUser).
  put('/users/:id', updateUser).
  delete('/users/:id', deleteUser)

export default router
