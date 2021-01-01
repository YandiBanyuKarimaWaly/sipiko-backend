import { Router } from "https://deno.land/x/oak@v6.4.1/mod.ts"

import Middleware from './middleware.ts'
import { Example as Data } from './controller.ts'

import Example from './routes/example.ts'

const Routes = new Router()

Routes.get('/', (ctx, next) => {})
Routes.post('/', Middleware.example, (ctx, next) => {

})
Routes.get('/complicated/api/call', Data.example1)

Routes.use(Example.allowedMethods())
Routes.use(Example.routes())

export default Routes