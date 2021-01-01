import { Application as Oak } from "https://deno.land/x/oak@v6.4.1/mod.ts"

import Router from './routes.ts'

const App = new Oak()

App.use(Router.allowedMethods())
App.use(Router.routes())

await App.listen({ port: 8001, hostname: '127.0.0.1' })