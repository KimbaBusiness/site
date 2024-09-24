import { Router } from 'express';
import {userAuth} from '../util/middlewares/session'
import homeRouter from '../module/site/routes';
const routes = Router()

routes.use('/',homeRouter)




export {routes};